import DashboardLayout from "@/Layouts/DashboardLayout";
import { pusher, timeFormat } from "@/helper/helper";
import { Answer, PaketSoal, Student } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ScoreDetail from "./Partials/ScoreDetail";
import Pusher from "pusher-js";
import Echo from "laravel-echo";

export default function Summary({ paketSoal, students }: { paketSoal: PaketSoal, students: Student[] }) {
    const [penskoranData, setPenskoranData] = useState<Student[]>();
    const [scoreDetailData, setScoreDetailData] = useState<Answer[] | null>(null);

    const deleteStudent = (u_id: string) => {
        Swal.fire({
            title: "Apakah anda yakin?",
            text: "Siswa yang dihapus tidak akan bisa dipulihkan",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: 'Batal',
            confirmButtonText: "Hapus!"
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route('delete_student', {
                    'slug': paketSoal.slug,
                    'u_id': u_id
                }), {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Berhasil",
                            text: "Siswa berhasil dihapus",
                            icon: "success"
                        });
                    }
                });
            }
        })



    }
    const openScoreDetail = (u_id: string) => {
        (document.getElementById(
            "scoreDetail"
        ) as HTMLDialogElement
        ).showModal()

        penskoranData?.forEach((student) => {
            if (student.u_id == u_id) {
                if (student.answers) {
                    setScoreDetailData(student.answers)
                }
            }
        })

    }


    useEffect(() => {

        setPenskoranData(students);
    }, [])


    useEffect(() => {
        const channel = pusher.subscribe(`Penskoran.${paketSoal.slug}`)
        channel.bind('PenskoranEvent', (data: { student: Student }) => {

            setPenskoranData(prevData => {
                if (prevData) {
                    let updatedData = [...prevData];

                    const index = updatedData.findIndex(prev => prev.u_id === data.student.u_id);

                    if (index !== -1) {
                        updatedData[index] = data.student;
                    } else {
                        updatedData.push(data.student);
                    }
                    if (data.student.answers) {
                        setScoreDetailData(data.student.answers)
                    }
                    return updatedData;
                }

                return prevData

            });
        })
        return () => {
            channel.unbind('PenskoranEvent');
            pusher.unsubscribe(`Penskoran.${paketSoal.slug}`);
        };
    }, [])

    return (
        <DashboardLayout>
            <Head title="Analisis" />
            <ScoreDetail answers={scoreDetailData} questions={paketSoal.questions} />
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link href={route('analisis')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Analisis
                        </Link>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Penskoran
                        </a>
                    </li>
                </ul>
            </div>
            <div className="p-5 bg-white rounded-md shadow-sm w-full">
                <div className="flex gap-3 justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <div className="w-[60px]">
                            <img src="/static/analysis.png" alt="logo" width="100%" />
                        </div>
                        <div className="block">
                            <p className="lg:text-xl text-lg font-semibold text-slate-600">
                                {paketSoal.title}
                            </p>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-slate-400">
                                    {timeFormat(paketSoal.created_at)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href={route('download_analisis', { slug: paketSoal.slug })} className="btn btn-sm bg-blue-500 hover:bg-blue-900 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Unduh Analisis
                        </a>
                    </div>
                </div>
                <h1 className="text-gray-500 font-semibold text-xl mt-4">
                    Analisis
                </h1>
            </div>

            <div role="tablist" className="tabs tabs-lifted mt-5 lg:tabs-lg">
                <Link role="tab" href={route('summary', { slug: paketSoal.slug })} className="tab  tab-active">Penskoran</Link>
                <Link role="tab" href={route('detail', { slug: paketSoal.slug })} className="tab">Analisis Butir Soal</Link>
            </div>
            <div className="flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px] ">
                {
                    penskoranData && penskoranData.length > 0 ? (
                        penskoranData.map((student, key) => (
                            <div key={key} className="flex gap-3 border-[1px] p-3 rounded-lg hover:bg-slate-50 min-w-[600px] cursor-pointer">
                                <div className="lg:basis-[5%] basis-[15%]">
                                    <div className="bg-green-400 w-full h-full rounded-lg flex items-center justify-center font-bold text-white text-lg">
                                        {student.result?.score}
                                    </div>
                                </div>
                                <div className="block lg:basis-[95%] basis-[75%]">
                                    <div className="flex items-center gap-3">
                                        <div onClick={() => openScoreDetail(student.u_id)} className="basis-[20%]" >
                                            <p className="text-lg font-semibold text-slate-600">
                                                {student.name}
                                            </p>
                                            <p className="text-sm text-slate-600">Kelas {student.grade}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <p className="text-xs text-slate-400">{timeFormat(student.created_at)}</p>
                                            </div>
                                        </div>
                                        <div onClick={() => openScoreDetail(student.u_id)} className="basis-[65%]">
                                            <p className="text-center">{student.result?.progress} %</p>
                                            <progress className={`progress ${student.result?.progress == 100 ? 'progress-success' : 'progress-warning '}`} value={student.result?.progress} max={100} />
                                            <p className="text-center text-xs text-slate-500">
                                                {student.result?.answeredTotal} dari {student.result?.questionTotal} Soal Selesai
                                            </p>
                                        </div>
                                        <div onClick={() => openScoreDetail(student.u_id)} className="basis-[10%]">
                                            <p className="text-center text-xs text-slate-500">Hasil Akhir</p>
                                            <p className="text-center text-slate-500 font-bold">{student.result?.score}</p>
                                        </div>
                                        <div className="basis-[5%]">
                                            <button className="text-red-500 btn bg-white shadow-none border-none" onClick={() => deleteStudent(student.u_id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="mt-10">
                                <img src="/static/empty.svg" className="w-[300px] mx-auto" alt="" />
                                <p className="text-center text-gray-500 font-semibold">Belum ada Siswa yang menjawab</p>
                            </div>
                        </>
                    )
                }

            </div>
        </DashboardLayout>
    )
}
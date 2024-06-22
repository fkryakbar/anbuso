import DashboardLayout from "@/Layouts/DashboardLayout";
import { timeFormat } from "@/helper/helper";
import { Answer, PaketSoal, Student } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";
import ScoreDetail from "./Partials/ScoreDetail";

export default function Summary({ paketSoal, students }: { paketSoal: PaketSoal, students: Student[] }) {

    const [scoreDetailData, setScoreDetailData] = useState<Answer[] | null>(null);
    const reload = () => {
        router.reload({
            only: ['students']
        })
    }
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

        students.forEach((student) => {
            if (student.u_id == u_id) {
                if (student.answers) {
                    setScoreDetailData(student.answers)
                }
            }
        })

    }
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
                <div className="flex gap-3 p-3">
                    <div className="lg:basis-[4%] basis-[15%]">
                        <img src="/static/analysis.png" alt="logo" width="100%" />
                    </div>
                    <div className="block ">
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
                <h1 className="text-gray-500 font-semibold text-xl mt-4">
                    Analisis
                </h1>
            </div>
            <div className="mt-5 justify-end flex">
                <button onClick={reload} className="btn btn-sm bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </div>
            <div role="tablist" className="tabs tabs-lifted mt-5 lg:tabs-lg">
                <Link role="tab" href={route('summary', { slug: paketSoal.slug })} className="tab  tab-active">Penskoran</Link>
                <Link role="tab" href={route('detail', { slug: paketSoal.slug })} className="tab">Analisis Butir Soal</Link>
            </div>
            <div className="flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px] overflow-x-auto">
                {
                    students && students.length > 0 ? (
                        students.map((student, key) => (
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
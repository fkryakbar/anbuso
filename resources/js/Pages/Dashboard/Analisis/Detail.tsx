import DashboardLayout from "@/Layouts/DashboardLayout";
import { timeFormat } from "@/helper/helper";
import { DayaPembeda, PaketSoal, Reliability, Student, TingkatKesulitan, Validity } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Summary({ paketSoal, validity, filteredStudents, reliabilitas, tingkatKesulitan, dayaPembeda }: { paketSoal: PaketSoal, validity: Validity | null, filteredStudents: Student[], reliabilitas: Reliability | null, tingkatKesulitan: TingkatKesulitan[] | null, dayaPembeda: DayaPembeda | null }) {
    console.log(dayaPembeda);

    return (
        <DashboardLayout>
            <Head title="Analisis" />
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
                            Analisis Butir Soal
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
            <div role="tablist" className="tabs tabs-lifted mt-5 lg:tabs-lg">
                <Link role="tab" href={route('summary', { slug: paketSoal.slug })} className="tab">Penskoran</Link>
                <Link role="tab" href={route('detail', { slug: paketSoal.slug })} className="tab tab-active">Analisis Butir Soal</Link>
            </div>
            <div className="flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px]">
                <div className="flex justify-between mt-5">
                    <h1 className="text-xl font-semibold text-gray-700">Validitas dan Tingkat Kesulitan Butir Soal</h1>
                    <button onClick={() => (document.getElementById(
                        "validitas"
                    ) as HTMLDialogElement
                    ).showModal()} className="btn btn-sm bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </button>
                    <dialog id="validitas" className="modal">
                        <div className="modal-box max-w-[1000px]">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                            </form>
                            <h3 className="font-bold text-lg">Interpretasi Validitas Butir Soal</h3>
                        </div>
                    </dialog>
                </div>
                {
                    validity ? (<>
                        <div className="overflow-x-auto">
                            <table className="table border-[1px] min-w-[1000px]">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-center font-semibold text-black text-lg" colSpan={paketSoal.questions && paketSoal.questions.length}>Butir Soal</th>
                                    </tr>
                                    <tr>
                                        <th className="text-center font-semibold text-black text-lg">No</th>
                                        <th className="font-semibold text-black text-lg">Nama Siswa</th>
                                        {
                                            paketSoal.questions && paketSoal.questions.length > 0 ? (
                                                paketSoal.questions.map((q, i) => (
                                                    <th className="text-center text-black text-lg" key={i}>{i + 1}</th>
                                                ))
                                            ) : null
                                        }
                                        <th className="text-center font-semibold text-black text-lg">Total Benar</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredStudents.map((student, i) => (
                                            <tr key={i}>
                                                <th className="text-center">{i + 1}</th>
                                                <th>{student.name}</th>
                                                {
                                                    student.answers && student.answers.length > 0 ? (
                                                        student.answers.map((answer, i) => (
                                                            <td className={`text-center ${answer.result == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.result}</td>
                                                        ))
                                                    ) : null
                                                }
                                                <td className="text-center">{validity.trueAnswerTotalByStudent[i]}</td>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                        <td></td>
                                        <td>Korelitas</td>
                                        {
                                            validity.questionsValidity.map((v, i) => (
                                                <td key={i} className="text-center">
                                                    {v.correlationValue ? v.correlationValue : 'Null'}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Nilai Validitas
                                            <p>rTabel = <span className="font-semibold">{validity.rTable}</span></p>

                                        </td>
                                        {
                                            validity.questionsValidity.map((v, i) => (
                                                <td key={i} className="text-center">
                                                    <div className={`${v.correlationValue == null ? 'bg-gray-300 text-black' : (v.validity ? 'bg-green-500 text-white' : 'bg-red-500 text-white')} rounded-lg font-semibold p-2 w-fit mx-auto`}>
                                                        {v.correlationValue == null ? v.validity : (v.validity ? 'Valid' : 'Tidak Valid')}
                                                    </div>
                                                </td>
                                            ))
                                        }
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Tingkat Kesulitan
                                        </td>
                                        {
                                            tingkatKesulitan?.map((t, i) => (
                                                <td key={i} className="text-center">
                                                    <p className="font-semibold">
                                                        {t.category}
                                                    </p>
                                                    <p>{t.value}</p>
                                                </td>
                                            ))
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </>) : (
                        <div className="mt-5">
                            <img src="/static/question-mark.svg" alt="" className="max-w-[300px] mx-auto" />
                            <h2 className="text-center font-semibold text-gray-500">Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis</h2>
                        </div>
                    )
                }
                {
                    reliabilitas ? (
                        <>
                            <hr className="border-[1px] mt-5" />
                            <div className="flex justify-between">
                                <h1 className="text-xl font-semibold text-gray-700">Reliabilitas Soal</h1>
                                <button onClick={() => (document.getElementById(
                                    "reliabilitas"
                                ) as HTMLDialogElement
                                ).showModal()} className="btn btn-sm bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                    </svg>
                                </button>
                                <dialog id="reliabilitas" className="modal">
                                    <div className="modal-box max-w-[1000px]">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                ✕
                                            </button>
                                        </form>
                                        <h3 className="font-bold text-lg">Interpretasi Reliabilitas Soal</h3>
                                    </div>
                                </dialog>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="border-[1px] flex p-5 rounded-lg min-w-[1000px]">
                                    <div className="basis-[15%] flex flex-col gap-2">
                                        <h1 className="font-semibold">rHitung</h1>
                                        <h1 className="font-semibold">rTabel</h1>
                                        <h1 className="font-semibold">Reliabilitas</h1>
                                    </div>
                                    <div className="basis-[85%] flex flex-col gap-2">
                                        <h1>: {reliabilitas.rHitung}</h1>
                                        <h1>: {reliabilitas.rTable}</h1>
                                        <h1>: <span className={`p-2 rounded-md text-white font-semibold text-xs ${reliabilitas.reliabilitas ? 'bg-green-500' : 'bg-red-500'}`}>{reliabilitas.reliabilitas ? 'Reliabel' : 'Tidak reliabel'}</span></h1>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null
                }
                {
                    dayaPembeda ? (<>
                        <hr className="border-[1px] mt-5" />
                        <div className="flex justify-between">
                            <h1 className="text-xl font-semibold text-gray-700">Daya Pembeda</h1>
                            <button onClick={() => (document.getElementById(
                                "reliabilitas"
                            ) as HTMLDialogElement
                            ).showModal()} className="btn btn-sm bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>
                            </button>
                            <dialog id="reliabilitas" className="modal">
                                <div className="modal-box max-w-[1000px]">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                            ✕
                                        </button>
                                    </form>
                                    <h3 className="font-bold text-lg">Interpretasi Daya Pembeda</h3>
                                </div>
                            </dialog>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table border-[1px] min-w-[1000px]">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-center font-semibold text-black text-lg" colSpan={paketSoal.questions && paketSoal.questions.length}>Butir Soal</th>
                                    </tr>
                                    <tr>
                                        <th className="text-center font-semibold text-black text-lg">No</th>
                                        <th className="font-semibold text-black text-lg">Nama Siswa</th>
                                        {
                                            paketSoal.questions && paketSoal.questions.length > 0 ? (
                                                paketSoal.questions.map((q, i) => (
                                                    <th className="text-center text-black text-lg" key={i}>{i + 1}</th>
                                                ))
                                            ) : null
                                        }
                                        <th className="text-center font-semibold text-black text-lg">Total Benar</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dayaPembeda.upperGroupStudents.map((student, i) => (
                                            <tr key={i} className="bg-green-200">
                                                <th className="text-center">{i + 1}</th>
                                                <th >{student.name}</th>
                                                {
                                                    student.answers && student.answers.length > 0 ? (
                                                        student.answers.map((answer, i) => (
                                                            <td className={`text-center ${answer.result == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.result}</td>
                                                        ))
                                                    ) : null
                                                }
                                                <td className="text-center">{student.trueAnswer ? student.trueAnswer : null}</td>
                                            </tr>
                                        ))
                                    }
                                    {
                                        dayaPembeda.middleGroupStudents?.map((student, i) => (
                                            <tr key={i} className="bg-red-100">
                                                <th className="text-center">{dayaPembeda.upperGroupStudents.length + i + 1}</th>
                                                <th >{student.name}</th>
                                                {
                                                    student.answers && student.answers.length > 0 ? (
                                                        student.answers.map((answer, i) => (
                                                            <td className={`text-center ${answer.result == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.result}</td>
                                                        ))
                                                    ) : null
                                                }
                                                <td className="text-center">{student.trueAnswer ? student.trueAnswer : null}</td>
                                            </tr>
                                        ))
                                    }
                                    {
                                        dayaPembeda.lowerGroupStudents?.map((student, i) => (
                                            <tr key={i} className="bg-amber-200">
                                                {
                                                    dayaPembeda.middleGroupStudents ? (
                                                        <th className="text-center">{dayaPembeda.upperGroupStudents.length + dayaPembeda.middleGroupStudents.length + i + 1}</th>
                                                    ) : (
                                                        <th className="text-center">{dayaPembeda.upperGroupStudents.length + i + 1}</th>
                                                    )
                                                }
                                                <th >{student.name}</th>
                                                {
                                                    student.answers && student.answers.length > 0 ? (
                                                        student.answers.map((answer, i) => (
                                                            <td className={`text-center ${answer.result == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.result}</td>
                                                        ))
                                                    ) : null
                                                }
                                                <td className="text-center">{student.trueAnswer ? student.trueAnswer : 0}</td>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                        <td></td>
                                        <td >
                                            Daya Pembeda
                                        </td>
                                        {
                                            dayaPembeda.dayaPembeda.map((t, i) => (
                                                <td key={i} className="text-center">
                                                    <p className="font-semibold">
                                                        {t.category}
                                                    </p>
                                                    <p>{t.value}</p>
                                                </td>
                                            ))
                                        }
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </>) : (
                        <div className="mt-5">
                            <img src="/static/question-mark.svg" alt="" className="max-w-[300px] mx-auto" />
                            <h2 className="text-center font-semibold text-gray-500">Maksimal 30 Siswa yang hanya bisa dilakukan analisis</h2>
                        </div>
                    )
                }
            </div>
        </DashboardLayout>
    )
}
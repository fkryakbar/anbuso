import DashboardLayout from "@/Layouts/DashboardLayout";
import { timeFormat } from "@/helper/helper";
import { PaketSoal } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({ paketSoal }: { paketSoal: PaketSoal[] }) {
    console.log(paketSoal);

    return <>
        <DashboardLayout>
            <Head title="Analisis" />
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Analisis
                        </a>
                    </li>
                </ul>
            </div>
            <div className="p-5 bg-white rounded-md shadow-sm flex items-center justify-between w-full">
                <h1 className="text-gray-500 font-semibold text-xl">
                    Analisis
                </h1>
                <button
                    className="btn text-white hover:bg-purple-800 bg-purple-500"
                    onClick={() =>
                        (
                            document.getElementById(
                                "create"
                            ) as HTMLDialogElement
                        ).showModal()
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    Buat
                </button>
                {/* <CreateForm /> */}
            </div>
            <div className="flex flex-col gap-3 mt-5">
                {
                    paketSoal.length > 0 ? (paketSoal.map((e, i) => (
                        <div key={i} className="flex gap-3 border-[1px] p-3 rounded-lg hover:bg-slate-50 bg-white">
                            <div className="lg:basis-[4%] basis-[15%]">
                                <img src="/static/analysis.png" alt="logo" width="100%" />
                            </div>
                            <Link href={route('summary', { slug: e.slug })} className="lg:basis-[96%] basis-[75%]">
                                <div className="block ">
                                    <p className="lg:text-xl text-lg font-semibold text-slate-600">
                                        {e.title}
                                    </p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <p className="text-xs text-slate-400"> {timeFormat(e.created_at)}</p>
                                        <p className="text-xs text-slate-400 flex gap-1 items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                                                    clipRule="evenodd"
                                                />
                                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                            </svg>
                                            {e.students.length}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))) : (
                        <div className="mt-10">
                            <img src="/static/empty.svg" className="w-[300px] mx-auto" alt="" />
                            <p className="text-center text-gray-500 font-semibold">Belum ada paket soal</p>
                        </div>
                    )
                }
            </div>
        </DashboardLayout>
    </>
}
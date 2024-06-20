import DashboardLayout from "@/Layouts/DashboardLayout";
import { timeFormat } from "@/helper/helper";
import { PaketSoal } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({ paketSoal }: { paketSoal: PaketSoal[] }) {
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
                                <img src="/static/kuis.png" alt="logo" width="100%" />
                            </div>
                            <Link href={route('summary', { slug: e.slug })} className="lg:basis-[96%] basis-[75%]">
                                <div className="block ">
                                    <p className="lg:text-xl text-lg font-semibold text-slate-600">
                                        {e.title}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-slate-400">
                                            {timeFormat(e.created_at)}
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
import DashboardLayout from "@/Layouts/DashboardLayout";
import { timeFormat } from "@/helper/helper";
import { PaketSoal } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Summary({ paketSoal }: { paketSoal: PaketSoal }) {
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
                hello world
            </div>
        </DashboardLayout>
    )
}
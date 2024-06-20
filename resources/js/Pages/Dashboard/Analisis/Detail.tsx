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
                            Ringkasan
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
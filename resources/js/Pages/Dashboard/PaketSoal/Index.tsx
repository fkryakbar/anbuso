import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import CreateForm from "./Partials/CreateForm";
import { PaketSoal } from "@/types";
import Swal from 'sweetalert2'
import { useEffect } from "react";
import { timeFormat } from "@/helper/helper";


export default function Index({ paketSoal }: { paketSoal: PaketSoal[] }) {
    const props = usePage().props as any;

    const deletePaketSoal = (slug: string) => {
        Swal.fire({
            title: "Apakah anda yakin?",
            text: "Paket soal yang dihapus tidak akan bisa dipulihkan",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: 'Batal',
            confirmButtonText: "Hapus!"
        }).then((result) => {
            if (result.isConfirmed) {
                router.get(`/dashboard/paket-soal/${slug}/delete`, {}, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Dihapus",
                            text: "Paket Soal berhasil dihapus",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }
    return (
        <>
            <DashboardLayout>
                <Head title="Paket Soal" />
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                </svg>
                                Paket Soal
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="p-5 bg-white rounded-md shadow-sm flex items-center justify-between w-full">
                    <h1 className="text-gray-500 font-semibold text-xl">
                        Paket Soal
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
                    <CreateForm />
                </div>
                <div className="flex flex-col gap-3 mt-5">
                    {
                        paketSoal.length > 0 ? (paketSoal.map((e, i) => (
                            <div key={i} className="flex gap-3 border-[1px] p-3 rounded-lg hover:bg-slate-50 bg-white">
                                <div className="lg:basis-[4%] basis-[15%]">
                                    <img src="/static/kuis.png" alt="logo" width="100%" />
                                </div>
                                <div className="block lg:basis-[96%] basis-[75%]">
                                    <Link href={`/dashboard/paket-soal/${e.slug}`}>
                                        <p className="lg:text-xl text-lg font-semibold text-slate-600">
                                            {e.title}
                                        </p>
                                    </Link>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-slate-400">
                                            {timeFormat(e.created_at)}
                                        </p>
                                        <div className="flex gap-3">
                                            <a href="/play/sysY-Guu-Jjt" target="_blank" className="btn lg:btn-sm btn-xs bg-purple-400 text-white hover:bg-purple-700" >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </a>
                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn lg:btn-sm btn-xs bg-slate-50" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" >
                                                        <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                                                            clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <button>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" >
                                                                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                                                                    clipRule="evenodd" />
                                                                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                                                                    clipRule="evenodd" />
                                                            </svg>
                                                            Copy Link
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={f => { deletePaketSoal(e.slug) }} className="text-red-500" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"  >
                                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                                                    clipRule="evenodd" />
                                                            </svg>
                                                            Hapus
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    );
}

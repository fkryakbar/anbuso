import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="bg-white shadow-lg w-full fixed top-0 left-0 right-0 z-[1000]">
                <div className={`max-w-[1200px] mx-auto lg:p-4 p-2 lg:flex justify-between transition-all lg:h-fit ${isMenuOpen ? 'h-[280px]' : 'h-[80px]'} overflow-clip`}>
                    <div className="flex w-full justify-between items-center">
                        <Link href="/" className="flex gap-4 items-center">
                            <img src="/static/ULM.webp" className="lg:size-[60px] size-[40px]" alt="ULM" />
                            <div className="text-gray-700">
                                <p className="lg:text-xl text-lg font-bold">Pendidikan Matematika</p>
                                <p className="lg:text-sm text-[10px] font-bold">Fakultas Keguruan dan Ilmu Pendidikan</p>
                                <p className="lg:text-xs text-[10px] font-bold">Universitas Lambung Mangkurat</p>
                            </div>
                        </Link>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden block btn btn-sm bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center gap-4 flex flex-col lg:flex-row my-5 lg:my-0">
                        <Link href="/">Beranda</Link>
                        <Link href="/#fitur">Fitur</Link>
                        <Link href="/tentang">Tentang</Link>
                        <Link href="/login" className="btn bg-blue-500 text-white hover:bg-blue-700">Masuk</Link>
                    </div>
                </div>
            </nav>
            <main className="">
                {children}
            </main>
            <footer className="max-w-[1200px] mx-auto p-5">
                <h3 className="text-center text-gray-500 font-semibold">Tim PDWM-PDWA Pendidikan Matematika FKIP ULM © 2024 All rights reserved.</h3>
            </footer>
        </>
    )
}
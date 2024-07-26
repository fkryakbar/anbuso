import { PaketSoal, Question, Student } from "@/types";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

interface ExamLayout {
    children: ReactNode | undefined,
    paketSoal: PaketSoal,
    nextQuestion: () => void,
    prevQuestion: () => void,
    questionIndex: number,
    questionTotal?: number,
    student: Student,
    changeQuestion: (index: number) => void,
    questions: Question[] | undefined
}

export default function GuestExamLayout({ children, paketSoal, nextQuestion, prevQuestion, questionIndex, questionTotal, student, changeQuestion, questions }: ExamLayout) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    useEffect(() => {
        (document.getElementById('help') as HTMLDialogElement).showModal();
        (document.getElementById('help') as HTMLDialogElement).addEventListener('show', function () {
            (document.getElementById('hidden-focus') as HTMLInputElement).focus();
        });



    }, [])

    return (
        <div className='bg-gray-100 min-h-screen'>
            <nav className='bg-white p-3 px-5 flex items-center shadow-md'>
                <div className='flex items-center gap-2 mr-2'>
                    <button className='lg:hidden' onClick={e => setIsSideBarOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center basis-[100%]">
                    <div className='basis-[15%] hidden lg:block'>
                        <h1 className="text-blue-400 text-2xl font-bold ">
                            CBT
                        </h1>
                        <p className="text-xs font-semibold text-gray-600">Computer Based Test</p>
                    </div>
                    <div className="basis-[85%] flex lg:justify-center justify-evenly items-center">
                        <div className="text-center text-gray-600">
                            <p className="text-xs">Nomor Soal</p>
                            <h1 className="font-bold text-sm">
                                {questionIndex + 1}
                            </h1>
                        </div>
                    </div>
                    <div>
                        <button className="btn bg-white shadow-none border-none" onClick={() => (document.getElementById('help') as HTMLDialogElement).showModal()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <dialog id="help" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Panduan Penggunaan Aplikasi Ujian</h3>
                    <input type="text" id="hidden-focus" style={{ position: 'absolute', opacity: 0, height: 0, width: 0 }} />
                    <div className="ml-4 mt-5">
                        <h1 className="font-semibold text-md">Pilihan Ganda</h1>
                        <ul className="list-disc ml-5">
                            <li>Baca setiap pertanyaan dengan seksama.</li>
                            <li>Pilih salah satu jawaban yang menurut Anda benar dengan mengklik pada opsi yang tersedia.</li>
                            <li>Anda dapat menggunakan tombol 'Berikutnya' dan 'Sebelumnya' untuk berpindah antar soal atau dengan mengklik nomor soal dibagian navigasi</li>
                            <li>Nomor soal dibagian navigasi akan berwarna biru jika soal sudah dijawab.</li>
                        </ul>
                        <h1 className="font-semibold text-md">Esai</h1>
                        <ul className="list-disc ml-5">
                            <li>Baca setiap pertanyaan esai dengan teliti.</li>
                            <li>Tulis jawaban Anda di kotak teks yang disediakan. Pastikan jawaban Anda lengkap dan jelas.</li>
                            <li>Anda dapat menggunakan tombol 'Berikutnya' dan 'Sebelumnya' untuk berpindah antar soal atau dengan mengklik nomor soal dibagian navigasi</li>
                            <li>Nomor soal dibagian navigasi akan berwarna biru jika soal sudah dijawab.</li>
                        </ul>
                        <h1 className="font-semibold text-md">Mengakhiri Ujian</h1>
                        <ul className="list-disc ml-5">
                            <li>Sebelum mengakhiri ujian, pastikan Anda telah menjawab semua soal. Anda dapat meninjau kembali jawaban yang telah Anda berikan.</li>
                            <li>Pergi ke nomor soal terakhir kemudian klik selanjutnya untuk mengakhiri ujian.</li>
                            <li>Ujian hanya bisa diakhiri jika soal sudah terjawab semua.</li>
                            <li>Setelah selesai maka anda akan diarahkan ke halaman hasil.</li>
                        </ul>
                    </div>
                    <form method="dialog">
                        <button className="btn w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white">
                            Lanjutkan
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className='flex'>
                <aside className={`bg-white min-h-screen shadow-md fixed top-0 ${isSideBarOpen ? 'left-0' : 'left-[-250px]'} w-[250px] pt-5 transition-all lg:hidden z-20`}>
                    <div className='flex ml-5 items-center justify-between mr-5 mb-5'>
                        <div className=''>
                            <h1 className="text-blue-400 text-2xl font-bold ">
                                CBT
                            </h1>
                            <p className="text-xs font-semibold text-gray-600">Computer Based Test</p>
                        </div>
                        <button onClick={e => setIsSideBarOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ExamSideBar student={student} paketSoal={paketSoal} questionTotal={questionTotal} changeQuestion={changeQuestion} questionIndex={questionIndex} questions={questions} />
                </aside>
                <aside className={`lg:basis-[15%] bg-white min-h-screen shadow-md pt-5 hidden lg:block`}>
                    <ExamSideBar student={student} paketSoal={paketSoal} questionTotal={questionTotal} changeQuestion={changeQuestion} questionIndex={questionIndex} questions={questions} />
                </aside>
                <div onClick={e => setIsSideBarOpen(false)} className={`fixed inset-0 z-10 items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${isSideBarOpen ? 'flex' : 'hidden'} min-h-screen`}></div>
                <div className='lg:basis-[85%] w-full relative'>
                    <main className='p-5'>{children}</main>
                    <div className="flex gap-2 fixed bottom-0 w-full bg-white p-3 lg:justify-start justify-center">
                        <button type="button" onClick={prevQuestion} className="btn bg-blue-400 hover:bg-blue-800 text-white text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg>
                            Sebelumnya
                        </button>
                        <button type="button" onClick={nextQuestion} className="btn bg-blue-400 hover:bg-blue-800 text-white text-sm">
                            Selanjutnya
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ExamSideBar({ changeQuestion, student, paketSoal, questionTotal, questionIndex, questions }: { student: Student, paketSoal: PaketSoal, questionTotal: number | undefined, changeQuestion: (index: number) => void, questionIndex: number, questions: Question[] | undefined }) {
    const buttonIndex = [];
    if (questionTotal && questions) {
        for (let i = 0; i < questionTotal; i++) {
            buttonIndex.push(
                <button key={i} onClick={e => changeQuestion(i)} type="button" className={`p-2 rounded border-[1px] hover:bg-amber-500 hover:text-white font-semibold text-gray-600 transition-all ${questionIndex == i ? 'bg-amber-500 text-white' : ''} ${questions[i].answer ? 'bg-blue-500 text-white' : ''}`}>
                    {i + 1}
                </button>
            );
        }
    }
    return <>
        <div className='ml-5 mb-5 mr-5'>
            <div className="border-gray-300 border-[1px] p-2 rounded-lg text-center">
                <h1 className="font-bold text-gray-600">{student.name}</h1>
                <h1 className="text-gray-600 text-xs">Kelas {student.grade}</h1>
            </div>
            <div className="border-gray-300 border-[1px] p-2 rounded-lg text-center mt-5">
                <h1 className="font-bold text-gray-600">{paketSoal.title}</h1>
                <hr className="my-2" />
                <div className="grid grid-cols-4 gap-1">
                    {buttonIndex}
                </div>
            </div>
        </div>
    </>
}


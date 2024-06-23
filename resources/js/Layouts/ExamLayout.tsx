import { PaketSoal, Question, Student } from "@/types";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

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
    return (
        <div className='bg-gray-100'>
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
                    <div className="basis-[85%] flex lg:justify-center justify-end items-center">
                        <div className="text-center text-gray-600">
                            <p className="text-xs">Nomor Soal</p>
                            <h1 className="font-bold text-sm">
                                {questionIndex + 1}
                            </h1>
                        </div>
                    </div>
                </div>
            </nav>
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


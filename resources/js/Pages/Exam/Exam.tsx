import ExamLayout from "@/Layouts/ExamLayout";
import { PaketSoal, Student } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Exam({ paketSoal, student }: { paketSoal: PaketSoal, student: { session: Student } }) {
    const questions = paketSoal.questions
    const questionTotal = questions?.length

    const [currentQuestion, setCurrentQuestion] = useState(questions?.[0]);
    const [questionIndex, setQuestionIndex] = useState(0);


    const nextQuestion = () => {
        setQuestionIndex(currentIndex => {
            if (currentIndex + 1 == questionTotal) return currentIndex
            const newIndex = currentIndex + 1;
            setCurrentQuestion(questions?.[newIndex]);
            return newIndex;
        })
    }
    const prevQuestion = () => {
        setQuestionIndex(currentIndex => {
            if (currentIndex == 0) return currentIndex
            const newIndex = currentIndex - 1;
            setCurrentQuestion(questions?.[newIndex]);
            return newIndex;
        })
    }
    const changeQuestion = (index: number) => {
        setQuestionIndex(index)
        setCurrentQuestion(questions?.[index])
    }
    return (
        <ExamLayout changeQuestion={changeQuestion} paketSoal={paketSoal} nextQuestion={nextQuestion} prevQuestion={prevQuestion} questionIndex={questionIndex} questionTotal={questionTotal} student={student.session}>
            <Head title={`${paketSoal.title} | Exam Mode`} />
            {
                currentQuestion ? (
                    <div className="mb-[100px] max-w-[500px] mx-auto">
                        <div className="mt-5" dangerouslySetInnerHTML={{ __html: currentQuestion?.content }}></div>
                        <div className="mt-5">
                            {
                                currentQuestion.option_a && (
                                    <div className="flex mb-4">
                                        <input type="radio" name={currentQuestion.slug} id={`${currentQuestion.slug}-a`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" defaultValue="a" />
                                        <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${currentQuestion.slug}-a`}>
                                            A. {currentQuestion.option_a}
                                        </label>
                                        <br />
                                    </div>
                                )
                            }
                            {
                                currentQuestion.option_b && (
                                    <div className="flex mb-4">
                                        <input type="radio" name={currentQuestion.slug} id={`${currentQuestion.slug}-b`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" defaultValue="b" />
                                        <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${currentQuestion.slug}-b`}>
                                            B. {currentQuestion.option_b}
                                        </label>
                                        <br />
                                    </div>
                                )
                            }
                            {
                                currentQuestion.option_c && (
                                    <div className="flex mb-4">
                                        <input type="radio" name={currentQuestion.slug} id={`${currentQuestion.slug}-c`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" defaultValue="c" />
                                        <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${currentQuestion.slug}-c`}>
                                            C. {currentQuestion.option_c}
                                        </label>
                                        <br />
                                    </div>
                                )
                            }
                            {
                                currentQuestion.option_d && (
                                    <div className="flex mb-4">
                                        <input type="radio" name={currentQuestion.slug} id={`${currentQuestion.slug}-d`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" defaultValue="d" />
                                        <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${currentQuestion.slug}-d`}>
                                            D. {currentQuestion.option_d}
                                        </label>
                                        <br />
                                    </div>
                                )
                            }
                            {
                                currentQuestion.option_e && (
                                    <div className="flex mb-4">
                                        <input type="radio" name={currentQuestion.slug} id={`${currentQuestion.slug}-e`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" defaultValue="e" />
                                        <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${currentQuestion.slug}-e`}>
                                            E. {currentQuestion.option_e}
                                        </label>
                                        <br />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ) : null
            }
        </ExamLayout>
    )
}
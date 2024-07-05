import ExamLayout from "@/Layouts/ExamLayout";
import { Answer, PaketSoal, Question, Student } from "@/types";
import { Head, router, useRemember } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';
import Swal from "sweetalert2";
import RichEditor from "./Partials/RichEditor";

export default function Exam({ paketSoal, student }: { paketSoal: PaketSoal, student: { session: Student } }) {
    const [questions, setQuestions] = useState(paketSoal.questions);
    const questionTotal = questions?.length

    // const [currentQuestion, setCurrentQuestion] = useState(questions?.[0]);
    const [rememberedState, setRememberedState] = useRemember({
        questionIndex: 0
    });
    const [questionIndex, setQuestionIndex] = useState(rememberedState.questionIndex);

    const nextQuestion = () => {
        setQuestionIndex(currentIndex => {
            if (currentIndex + 1 == questionTotal) {

                const notAnsweredQuestion = questions?.filter(q => q.answer == null) as Question[];

                if (notAnsweredQuestion.length > 0) {
                    Swal.fire({
                        title: "Belum Selesai",
                        text: "Masih ada soal yang belum terjawab.",
                        icon: "warning"
                    });

                    return currentIndex
                }
                Swal.fire({
                    title: "Yakin Sudah Selesai?",
                    text: "Setelah selesai jawaban tidak bisa dirubah",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "Selesai",
                    cancelButtonText: "Batal",
                }).then(result => {
                    if (result.isConfirmed) {
                        router.get(route('finished-exam', { slug: paketSoal.slug }))
                    }
                })


                return currentIndex
            }
            const newIndex = currentIndex + 1;
            setRememberedState({
                questionIndex: newIndex
            })
            return newIndex;
        })
    }
    const prevQuestion = () => {
        setQuestionIndex(currentIndex => {
            if (currentIndex == 0) return currentIndex
            const newIndex = currentIndex - 1;
            setRememberedState({
                questionIndex: newIndex
            })
            return newIndex;
        })
    }
    const changeQuestion = (index: number) => {
        setQuestionIndex(index)
        setRememberedState({
            questionIndex: index
        })
    }


    const saveAnswerMultipleChoice = (userAnswer: string, key: string, question_slug: string) => {
        const payload = {
            question_slug: question_slug,
            answer: userAnswer,
            score: 0,
        }
        if (userAnswer == key) {
            payload.score = 1;
        }

        // router.post(route('save_answer', { slug: paketSoal.slug }), payload);
        axios.post(route('save_answer_multiple_choice', { slug: paketSoal.slug }), payload)
            .then((res) => {
                if (questions) {
                    const currentQuestion = questions.find(q => q.slug == question_slug)
                    const currentQuestionIndex = questions.findIndex(q => q.slug == question_slug)
                    if (currentQuestion) {
                        currentQuestion.answer = res.data.answer
                    }
                    const newQuestionsData = questions
                    newQuestionsData[currentQuestionIndex] = currentQuestion as Question

                    setQuestions(newQuestionsData);


                }

            })
            .catch(err => {
                if (err.response.status == 403) {
                    Swal.fire({
                        title: "Ditutup",
                        text: "Ujian Telah ditutup",
                        icon: "error",
                        confirmButtonText: "Keluar",
                    }).then(result => {
                        router.get(route('finished-exam', { slug: paketSoal.slug }))
                    })
                    return
                }
                Swal.fire({
                    title: "ERROR",
                    text: "Something Went Wrong!",
                    icon: "error"
                });
                console.log(err);

            })
    }

    return (
        <ExamLayout changeQuestion={changeQuestion} paketSoal={paketSoal} questions={questions} nextQuestion={nextQuestion} prevQuestion={prevQuestion} questionIndex={questionIndex} questionTotal={questionTotal} student={student.session}>
            <Head title={`${paketSoal.title} | Exam Mode`} ></Head>
            {
                questions && questions.length > 0 ? (questions.map((q, index) => (

                    <div key={index} className={`mb-[100px] max-w-[500px] mx-auto ${questionIndex == index ? '' : 'hidden'}`}>
                        {/* <div className="mt-5" dangerouslySetInnerHTML={{ __html: q.content }}></div> */}
                        <div className="mt-5">
                            <Latex>{q.content}</Latex>
                        </div>
                        <div className="mt-5">
                            {
                                q.type == 'multiple_choice' ? (<>
                                    {
                                        q.format.option_a ? (
                                            <div className="flex mb-4">
                                                <input onChange={event => { saveAnswerMultipleChoice('a', q.format.answer_key, q.slug); event.target.checked }} defaultChecked={q.answer ? (q.answer.answer == 'a' ? true : false) : false} type="radio" name={q.slug} id={`${q.slug}-a`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                                <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${q.slug}-a`}>
                                                    A. {q.format.option_a}
                                                </label>
                                                <br />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        q.format.option_b ? (
                                            <div className="flex mb-4">
                                                <input onChange={event => { saveAnswerMultipleChoice('b', q.format.answer_key, q.slug); event.target.checked }} defaultChecked={q.answer ? (q.answer.answer == 'b' ? true : false) : false} type="radio" name={q.slug} id={`${q.slug}-b`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                                <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${q.slug}-b`}>
                                                    B. {q.format.option_b}
                                                </label>
                                                <br />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        q.format.option_c ? (
                                            <div className="flex mb-4">
                                                <input onChange={event => { saveAnswerMultipleChoice('c', q.format.answer_key, q.slug); event.target.checked }} defaultChecked={q.answer ? (q.answer.answer == 'c' ? true : false) : false} type="radio" name={q.slug} id={`${q.slug}-c`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                                <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${q.slug}-c`}>
                                                    C. {q.format.option_c}
                                                </label>
                                                <br />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        q.format.option_d ? (
                                            <div className="flex mb-4">
                                                <input onChange={event => { saveAnswerMultipleChoice('d', q.format.answer_key, q.slug); event.target.checked }} defaultChecked={q.answer ? (q.answer.answer == 'd' ? true : false) : false} type="radio" name={q.slug} id={`${q.slug}-d`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                                <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${q.slug}-d`}>
                                                    D. {q.format.option_d}
                                                </label>
                                                <br />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        q.format.option_e ? (
                                            <div className="flex mb-4">
                                                <input onChange={event => { saveAnswerMultipleChoice('e', q.format.answer_key, q.slug); event.target.checked }} defaultChecked={q.answer ? (q.answer.answer == 'e' ? true : false) : false} type="radio" name={q.slug} id={`${q.slug}-e`} className="peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                                <label className={`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer`} htmlFor={`${q.slug}-e`}>
                                                    E. {q.format.option_e}
                                                </label>
                                                <br />
                                            </div>
                                        ) : null
                                    }
                                </>) : (<>
                                    <RichEditor question={q} questions={questions} setQuestions={setQuestions} />
                                </>)
                            }
                        </div>
                    </div>
                ))) : null
            }

        </ExamLayout>
    )
}
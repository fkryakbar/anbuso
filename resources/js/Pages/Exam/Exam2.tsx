import ExamLayout from "@/Layouts/ExamLayout";
import { Answer, PaginatedQuestions, PaketSoal, Question, Student } from "@/types";
import { Head, router, useRemember } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';
import Swal from "sweetalert2";
import RichEditor from "./Partials/RichEditor";

export default function Exam({ paketSoal, student, question }: { paketSoal: PaketSoal, student: { session: Student }, question: PaginatedQuestions }) {
    const [questions, setQuestions] = useState(question.data);
    const questionTotal = paketSoal.questions?.length;
    const [isSaving, setIsSaving] = useState(false);

    const nextQuestion = () => {

        if (question.next_page_url) {
            router.visit(question.next_page_url);
        } else {
            let questionTotal = paketSoal.questions?.length ? paketSoal.questions?.length : 0;

            const notAnsweredQuestion = paketSoal.questions?.filter((q, i) => q.answer == null && i != questionTotal - 1) as Question[];
            let lastQuestionIsAnwered = questions[0].answer ? true : false;

            if (notAnsweredQuestion.length > 0) {
                Swal.fire({
                    title: "Belum Selesai",
                    text: "Masih ada soal yang belum terjawab.",
                    icon: "warning"
                });
            } else if (lastQuestionIsAnwered) {
                Swal.fire({
                    title: "Yakin Sudah Selesai?",
                    text: "Setelah selesai jawaban tidak bisa dirubah",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "Selesai",
                    cancelButtonText: "Batal",
                }).then(result => {
                    if (result.isConfirmed) {
                        sessionStorage.removeItem('helpDialogState');
                        router.get(route('finished-exam', { slug: paketSoal.slug }))
                    }
                })
            } else {
                Swal.fire({
                    title: "Belum Selesai",
                    text: "Masih ada soal yang belum terjawab.",
                    icon: "warning"
                });
            }

        }
    }
    const prevQuestion = () => {
        if (question.prev_page_url) {
            router.visit(question.prev_page_url)
        }
    }
    const changeQuestion = (index: number) => {
        router.visit(route('exam', { slug: paketSoal.slug, page: index + 1 }))
    }


    const saveAnswerMultipleChoice = (userAnswer: string, key: string, question_slug: string) => {
        setIsSaving(true)
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

                    setIsSaving(false)
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
                setIsSaving(false)
            })
    }

    return (
        <ExamLayout changeQuestion={changeQuestion} paketSoal={paketSoal} questions={paketSoal.questions} nextQuestion={nextQuestion} prevQuestion={prevQuestion} questionIndex={question.current_page} questionTotal={questionTotal} student={student.session}>
            <Head title={`${paketSoal.title} | Exam Mode`} ></Head>
            {
                questions && questions.length > 0 ? (questions.map((q, index) => (

                    <div key={index} className={`mb-[100px] max-w-[500px] mx-auto`}>
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
                                                    A. <Latex>{q.format.option_a}</Latex>
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
                                                    B. <Latex>{q.format.option_b}</Latex>
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
                                                    C. <Latex>{q.format.option_c}</Latex>
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
                                                    D. <Latex>{q.format.option_d}</Latex>
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
                                                    E. <Latex>{q.format.option_e}</Latex>
                                                </label>
                                                <br />
                                            </div>
                                        ) : null
                                    }
                                </>) : (<>
                                    <RichEditor setIsSaving={setIsSaving} question={q} questions={questions} setQuestions={setQuestions} />
                                </>)
                            }
                        </div>
                        <p className="text-end text-slate-500 italic text-xs mt-2">
                            {
                                q.answer && isSaving == false ? (
                                    <>
                                        Answer Saved
                                    </>
                                ) : (
                                    isSaving ? (
                                        <>Saving Answer...</>
                                    ) : (<>

                                    </>)
                                )
                            }
                        </p>
                    </div>
                ))) : null
            }

        </ExamLayout>
    )
}
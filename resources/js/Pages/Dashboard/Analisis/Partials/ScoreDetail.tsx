import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Answer, Question } from "@/types";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import { FormEventHandler, useEffect, useState } from "react";
import Latex from "react-latex-next";
import Swal from "sweetalert2";

export default function ScoreDetail({ answers, questions, id }: { answers: { multiple_choice?: Answer[], essay?: Answer[] } | null, questions: Question[] | undefined, id: string }) {

    const multipleChoiceQuestions = questions?.filter((q, _) => q.type == 'multiple_choice');
    const essayQuestions = questions?.filter((q, _) => q.type == 'essay');

    // const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState(questions?.filter((q, _) => q.type == 'multiple_choice'))
    // const [essayQuestions, setEssayQuestions] = useState(questions?.filter((q, _) => q.type == 'essay'));

    // const [answersState, setAnwersState] = useState(answers);

    const updateScore = (answer_id: number | undefined, score: number | undefined, paket_soal_slug: string) => {
        // console.log(answersState);
        axios.post(route('updateScore', { slug: paket_soal_slug }), { answer_id: answer_id, score: score })
            .then((res) => {

                router.reload();

            })
            .catch(err => {
                Swal.fire({
                    title: "ERROR",
                    text: "Something Went Wrong!",
                    icon: "error"
                });
                console.log(err);

            })

    }

    return <>
        <dialog id={id} className="modal">
            <div className="modal-box max-w-[1000px]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Detail Penilaian Siswa</h3>
                <div className="overflow-x-auto mt-5">
                    <h1 className="font-semibold mb-2">Pilihan Ganda</h1>
                    <table className="table border-[1px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-center">Nomor Soal</th>
                                <th className="text-center">Jawaban Siswa</th>
                                <th className="text-center">Kunci Jawaban</th>
                                <th>Hasil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                multipleChoiceQuestions && multipleChoiceQuestions.length ? (
                                    multipleChoiceQuestions.map((question, key) => (
                                        <tr key={key}>
                                            <td className="text-center">{key + 1}</td>
                                            <td className="text-center">
                                                {
                                                    answers?.multiple_choice?.find(answer => answer.question_slug == question.slug) ? (
                                                        answers?.multiple_choice?.find(answer => answer.question_slug == question.slug)?.answer
                                                    ) : null
                                                }
                                            </td>
                                            <td className="text-center">{question.format.answer_key}</td>
                                            <td>
                                                {
                                                    answers?.multiple_choice?.find(answer => answer.question_slug == question.slug) ? (
                                                        answers?.multiple_choice?.find(answer => answer.question_slug == question.slug)?.score == 1 ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                            </svg>
                                                        )
                                                    ) : null
                                                }
                                            </td>
                                        </tr>
                                    ))
                                ) : null
                            }
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto mt-5">
                    <h1 className="font-semibold mb-2">Esai</h1>
                    <table className="table border-[1px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-center">Nomor Soal</th>
                                <th className="">Jawaban Siswa</th>
                                <th className="text-center">Nilai</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                essayQuestions && essayQuestions.length ? (
                                    essayQuestions.map((question, key) => (
                                        <tr key={key}>
                                            <td className="text-center">{key + 1}</td>
                                            <td className="">
                                                {
                                                    answers?.essay?.find(answer => answer.question_slug == question.slug) ? (
                                                        <>
                                                            <Latex>{answers?.essay?.find(answer => answer.question_slug == question.slug)?.answer || ''}</Latex>
                                                        </>
                                                    ) : null
                                                }
                                            </td>
                                            <td className="flex justify-center">

                                                <div className="flex">
                                                    <div className="flex items-center me-4">
                                                        <input defaultChecked={answers?.essay?.find(answer => answer.question_slug == question.slug)?.score == 0} onChange={e => updateScore(answers?.essay?.find(answer => answer.question_slug == question.slug)?.id, 0, question.paket_soal_slug)} id={`${question.slug}-1`} type="radio" value="" name={`${id}-${question.slug}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={`${question.slug}-1`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">0</label>
                                                    </div>
                                                    <div className="flex items-center me-4">
                                                        <input defaultChecked={answers?.essay?.find(answer => answer.question_slug == question.slug)?.score == 1} onChange={e => updateScore(answers?.essay?.find(answer => answer.question_slug == question.slug)?.id, 1, question.paket_soal_slug)} id={`${question.slug}-2`} type="radio" name={`${id}-${question.slug}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={`${question.slug}-2`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
                                                    </div>
                                                    <div className="flex items-center me-4">
                                                        <input defaultChecked={answers?.essay?.find(answer => answer.question_slug == question.slug)?.score == 2} onChange={e => updateScore(answers?.essay?.find(answer => answer.question_slug == question.slug)?.id, 2, question.paket_soal_slug)} id={`${question.slug}-3`} type="radio" name={`${id}-${question.slug}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={`${question.slug}-3`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
                                                    </div>
                                                    <div className="flex items-center me-4">
                                                        <input defaultChecked={answers?.essay?.find(answer => answer.question_slug == question.slug)?.score == 3} onChange={e => updateScore(answers?.essay?.find(answer => answer.question_slug == question.slug)?.id, 3, question.paket_soal_slug)} id={`${question.slug}-4`} type="radio" name={`${id}-${question.slug}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={`${question.slug}-4`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
                                                    </div>
                                                    <div className="flex items-center me-4">
                                                        <input defaultChecked={answers?.essay?.find(answer => answer.question_slug == question.slug)?.score == 4} onChange={e => updateScore(answers?.essay?.find(answer => answer.question_slug == question.slug)?.id, 4, question.paket_soal_slug)} id={`${question.slug}-5`} type="radio" name={`${id}-${question.slug}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={`${question.slug}-5`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
                                                    </div>
                                                    <div className="flex items-center me-4">
                                                        <input defaultChecked={answers?.essay?.find(answer => answer.question_slug == question.slug)?.score == 5} onChange={e => updateScore(answers?.essay?.find(answer => answer.question_slug == question.slug)?.id, 5, question.paket_soal_slug)} id={`${question.slug}-6`} type="radio" name={`${id}-${question.slug}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={`${question.slug}-6`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
                                                    </div>
                                                </div>

                                                {/* <input type="number" value={answers?.essay?.find(answer => answer.question_slug == question.slug)?.score} onChange={e => updateScore(answers?.essay?.find(answer => answer.question_slug == question.slug)?.id, parseInt(e.target.value), question.paket_soal_slug)} min={0} max={5} className="input input-bordered w-[70px]" /> */}
                                            </td>
                                        </tr>
                                    ))
                                ) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </dialog>
    </>
}
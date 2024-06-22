import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Answer, Question } from "@/types";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, useEffect } from "react";
import Swal from "sweetalert2";

export default function ScoreDetail({ answers, questions }: { answers: Answer[] | null, questions: Question[] | undefined }) {
    return <>
        <dialog id="scoreDetail" className="modal">
            <div className="modal-box max-w-[1000px]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Detail Penilaian Siswa</h3>
                <div className="overflow-x-auto mt-5">
                    <table className="table">
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
                                questions && questions.length ? (
                                    questions.map((question, key) => (
                                        <tr key={key}>
                                            <td className="text-center">{key + 1}</td>
                                            <td className="text-center">
                                                {
                                                    answers?.find(answer => answer.question_slug == question.slug) ? (
                                                        answers?.find(answer => answer.question_slug == question.slug)?.answer
                                                    ) : null
                                                }
                                            </td>
                                            <td className="text-center">{question.answer_key}</td>
                                            <td>
                                                {
                                                    answers?.find(answer => answer.question_slug == question.slug) ? (
                                                        answers?.find(answer => answer.question_slug == question.slug)?.result == 1 ? (
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
            </div>
        </dialog>
    </>
}
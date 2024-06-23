import InputError from "@/Components/InputError";
import GuestExamLayout from "@/Layouts/GuestExamLayout";
import { PaketSoal } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Index({ paketSoal }: { paketSoal: PaketSoal }) {
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        grade: ''
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route('student-register', { slug: paketSoal.slug }))
    }

    return (
        <GuestExamLayout>
            <Head title="Exam Mode" />
            <div className="p-8 shadow-lg rounded-xl text-center bg-white mx-4 max-w-[400px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline text-blue-500 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h1 className="text-3xl font-bold text-blue-400">{[paketSoal.title]}</h1>
                <h3 className="text-1xl font-semibold text-gray-500">
                    Computer Based Test
                </h3>
                {
                    paketSoal.accept_responses ? (
                        <form onSubmit={submit} method="post" autoComplete="off" autoCorrect="off">
                            <div className="text-center pt-3">
                                <input type="text" placeholder="Nama" name="name" className="input w-full  input-bordered mt-3" onChange={e => { setData('name', e.target.value) }} disabled={processing} />
                                <InputError message={errors.name} />

                                <input type="text" placeholder="Kelas" name="grade" className="input w-full  input-bordered mt-3" onChange={e => { setData('grade', e.target.value) }} disabled={processing} />
                                <InputError message={errors.grade} />
                            </div>
                            <button type="submit" className="btn bg-blue-400 border-none hover:bg-blue-700 text-white mt-3" disabled={processing}>
                                Mulai Kerjakan
                            </button>
                        </form>
                    ) : (
                        <>
                            <img src="/static/access-denied.svg" alt="access-denied" className="w-full mx-auto" />
                            <p className="text-center font-semibold text-gray-600">Test Telah ditutup</p>
                            <Link href="/" className="btn btn-sm bg-red-400 hover:bg-red-700 text-white">Keluar</Link>
                        </>
                    )
                }
            </div>
        </GuestExamLayout>
    )
}
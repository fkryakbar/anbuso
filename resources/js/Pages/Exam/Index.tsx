import InputError from "@/Components/InputError";
import GuestExamLayout from "@/Layouts/GuestExamLayout";
import { PaketSoal } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Index({ paketSoal }: { paketSoal: PaketSoal }) {
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        grade: ''
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        console.log(data);
        post(route('student-register', { slug: paketSoal.slug }))
    }

    return (
        <GuestExamLayout>
            <Head title="Exam Mode" />
            <div className="p-8 shadow-lg rounded-xl text-center bg-white mx-4 max-w-[400px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline text-purple-500 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h1 className="text-3xl font-bold text-purple-400">{[paketSoal.title]}</h1>
                <h3 className="text-1xl font-semibold text-gray-500">
                    Computer Based Test
                </h3>
                <form onSubmit={submit} method="post" autoComplete="off" autoCorrect="off">
                    <div className="text-center pt-3">
                        <input type="text" placeholder="Nama" name="name" className="input w-full  input-bordered mt-3" onChange={e => { setData('name', e.target.value) }} disabled={processing} />
                        <InputError message={errors.name} />

                        <input type="text" placeholder="Kelas" name="grade" className="input w-full  input-bordered mt-3" onChange={e => { setData('grade', e.target.value) }} disabled={processing} />
                        <InputError message={errors.grade} />
                    </div>
                    <button type="submit" className="btn bg-purple-400 border-none hover:bg-purple-700 text-white mt-3" disabled={processing}>
                        Mulai Kerjakan
                    </button>
                </form>
            </div>
        </GuestExamLayout>
    )
}
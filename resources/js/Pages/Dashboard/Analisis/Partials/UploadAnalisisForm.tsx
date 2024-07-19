import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function UploadAnalisisForm() {

    const { data, setData, errors, post, processing, wasSuccessful, reset } = useForm({
        title: '',
        file: '',
        multiple_choice_total: 0,
        essay_total: 0
    })
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('analisis.upload'), {
            onSuccess: () => {
                reset('title', 'file', 'multiple_choice_total', 'essay_total');

            }
        })

    }
    return <>
        <dialog id="upload" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Upload jawaban siswa untuk dianalisis</h3>
                {
                    wasSuccessful && (
                        <div role="alert" className="alert alert-success mb-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Jawaban Berhasil diupload</span>
                        </div>
                    )
                }
                <form onSubmit={submit} autoComplete="off" autoCorrect="off" className="mt-5">
                    <InputLabel htmlFor="title" value="Nama Paket Soal" className="mt-3" />
                    <TextInput
                        id="title"
                        type="text"
                        name="title"
                        value={data.title}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />
                    <InputError message={errors.title} className="mt-2" />
                    <InputLabel htmlFor="multiple_choice_total" value="Jumlah Soal Pilihan Ganda" className="mt-3" />
                    <TextInput
                        id="multiple_choice_total"
                        type="number"
                        name="multiple_choice_total"
                        value={data.multiple_choice_total}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('multiple_choice_total', parseInt(e.target.value))}
                        required
                    />
                    <InputError message={errors.multiple_choice_total} className="mt-2" />
                    <InputLabel htmlFor="essay_total" value="Jumlah Soal Esai" className="mt-3" />
                    <TextInput
                        id="essay_total"
                        type="text"
                        name="essay_total"
                        value={data.essay_total}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('essay_total', parseInt(e.target.value))}
                        required
                    />
                    <InputError message={errors.essay_total} className="mt-2" />
                    <InputLabel htmlFor="file" value="Upload Jawaban" className="mt-3" />
                    <input type="file" id="file" onChange={e => setData('file', e.target.files ? e.target.files[0] as any : '')} className={`file-input file-input-bordered w-full max-w-xs mt-2 ${errors.file ? 'file-input-error' : ''}`} />
                    <InputError message={errors.file} className="mt-2" />
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton type="button" onClick={() => window.location.href = '/template/Upload Jawaban.xlsx'} className="ms-4 bg-green-500 hover:bg-green-900 gap-2 items-center" disabled={processing}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>
                            Download Template
                        </PrimaryButton>
                        <PrimaryButton className="ms-4  gap-2 items-center" disabled={processing}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                            </svg>
                            Upload
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </dialog>
    </>
}
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, useEffect } from "react";
import Swal from "sweetalert2";

export default function UploadSoalForm() {
    const props = usePage().props as any;
    const { data, setData, errors, post, processing, wasSuccessful, reset } = useForm({
        file: ''
    })
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('upload-question', { slug: props.paketSoal.slug }), {
            onSuccess: () => {
                reset('file');
            }
        })

    }
    return <>
        <dialog id="upload-soal-form" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Upload Soal</h3>
                {
                    wasSuccessful && (
                        <div role="alert" className="alert alert-success mb-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Soal Berhasil diupload</span>
                        </div>
                    )
                }

                <form onSubmit={submit} autoComplete="off" autoCorrect="off" className="mt-5">
                    <InputLabel htmlFor="file" value="Upload Soal" />
                    <input type="file" id="file" onChange={e => setData('file', e.target.files ? e.target.files[0] as any : '')} className={`file-input file-input-bordered w-full max-w-xs mt-2 ${errors.file ? 'file-input-error' : ''}`} />
                    <InputError message={errors.file} className="mt-2" />
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton type="button" onClick={() => window.location.href = '/template/Upload Soal.xlsx'} className="ms-4 bg-green-500 hover:bg-green-900 gap-2 items-center" disabled={processing}>
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
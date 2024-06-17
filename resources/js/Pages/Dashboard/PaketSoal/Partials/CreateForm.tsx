import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, useEffect } from "react";
import Swal from "sweetalert2";

export default function CreateForm() {
    const props = usePage().props as any;
    const { data, setData, errors, post, processing, wasSuccessful, reset } = useForm({
        title: ''
    })
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('post-paket-soal'), {
            onSuccess: (data) => {
                reset('title');
                router.get(`/dashboard/paket-soal/${(data.props.flash as any).data.slug}`)
            }
        })

    }
    return <>
        <dialog id="create" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Buat Paket Soal</h3>
                {
                    wasSuccessful && (
                        <div role="alert" className="alert alert-success mb-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Paket Soal Berhasil dibuat</span>
                        </div>
                    )
                }
                <form onSubmit={submit} autoComplete="off" autoCorrect="off" className="mt-5">
                    <InputLabel htmlFor="title" value="Nama Paket Soal" />
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
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Buat
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </dialog>
    </>
}
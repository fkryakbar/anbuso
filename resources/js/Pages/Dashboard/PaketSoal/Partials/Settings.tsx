import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { PaketSoal } from "@/types";
import { router, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Settings({ paketSoal }: { paketSoal: PaketSoal }) {
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        title: paketSoal.title,
        accept_responses: paketSoal.accept_responses,
        show_correct_answer: paketSoal.show_correct_answer
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('update-paket-soal', { slug: paketSoal.slug }))

    }

    return <>
        <dialog id="settings" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Pengaturan Paket Soal</h3>
                {
                    recentlySuccessful && (
                        <div role="alert" className="alert alert-success mb-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Berhasil diperbarui</span>
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
                        disabled={processing}
                    />
                    <InputError message={errors.title} className="mt-2" />
                    <div className="form-control mt-2">
                        <label className="cursor-pointer label">
                            <span className="label-text">Tampilkan Skor Akhir</span>
                            <input type="checkbox" className="toggle bg-gray-500  hover:bg-blue-700 border-gray-500 checked:bg-blue-500 checked:border-blue-500" name="show_correct_answer" onChange={e => setData('show_correct_answer', e.target.checked ? 1 : 0)} defaultChecked={data.show_correct_answer ? true : false} disabled={processing} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Terima Respons</span>
                            <input type="checkbox" className="toggle bg-gray-500  hover:bg-blue-700 border-gray-500 checked:bg-blue-500 checked:border-blue-500" name="accept_responses" onChange={e => setData('accept_responses', e.target.checked ? 1 : 0)} defaultChecked={data.accept_responses ? true : false} disabled={processing} />
                        </label>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Simpan Perubahan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </dialog>
    </>
}
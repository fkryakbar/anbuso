import { Link, useForm } from "@inertiajs/react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import { User } from "@/types";
import { FormEventHandler } from "react";

export default function Account({ user }: { user: User }) {
    const { data, setData, errors, processing, post, wasSuccessful, reset } = useForm(user);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('account_update'), {
            onSuccess: () => {
                reset('password', 'password_confirmation')
            }
        });
    }

    return (
        <dialog id="account" className="modal">
            <div className="modal-box max-w-[1000px]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-xl mb-5">Pengaturan Akun</h3>
                {
                    wasSuccessful && (
                        <div role="alert" className="alert alert-success mb-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Akun berhasil diperbarui</span>
                        </div>
                    )
                }
                <form onSubmit={submit} autoComplete='off'>
                    <div>
                        <InputLabel htmlFor="name" value="Nama" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            disabled
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Ganti Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password ? data.password : ''}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation ? data.password_confirmation : ''}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Simpan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </dialog>
    )
}
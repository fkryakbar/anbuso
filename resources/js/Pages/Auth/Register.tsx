import { useEffect, FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'
import Gradent from '@/Components/Gradient';
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const props = usePage().props as any

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Gradent />
            <div className="min-h-screen lg:flex flex-col sm:justify-center items-center pt-6 p-6 sm:pt-0 ">
                <Head title="Register" />
                <div className='flex justify-center'>
                    <Link href='/' className='text-blue-400 text-5xl font-bold'>
                        AnBuSo
                    </Link>
                </div>
                <div className="lg:w-[800px]  mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg lg:flex gap-5 mb-5">
                    <div className='basis-[50%] flex items-center'>
                        <img src="/static/register.svg" alt="register" />
                    </div>
                    <div className='basis-[50%]'>
                        <h1 className='text-2xl font-bold text-blue-400 mb-5'>Daftar Akun</h1>
                        {
                            props.flash.success && (
                                <div role="alert" className="alert alert-success mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{props.flash.success}</span>
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
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sudah Daftar Akun?
                                </Link>

                                <PrimaryButton className="ms-4" disabled={processing}>
                                    Daftar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

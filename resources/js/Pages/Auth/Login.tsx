import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Gradent from '@/Components/Gradient';
import { router } from '@inertiajs/react'

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const props = usePage().props.auth as any;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        if (props.user) {
            router.get(route('paket-soal'))
        }

        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Gradent />
            <div className="min-h-screen lg:flex flex-col sm:justify-center items-center pt-6 p-6 sm:pt-0 ">
                <Head title="Login" />
                <div className='flex justify-center'>
                    <Link href='/' className='text-purple-400 text-5xl font-bold'>
                        AnBuSo
                    </Link>
                </div>
                <div className="lg:w-[800px]  mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg lg:flex gap-5 mb-5">
                    <div className='basis-[50%] flex items-center'>
                        <img src="/static/login.svg" alt="register" />
                    </div>
                    <div className='basis-[50%] flex flex-col justify-center'>
                        <h1 className='text-2xl font-bold text-purple-400 mb-5'>Masuk</h1>
                        <form onSubmit={submit} autoComplete='off'>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
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
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('register')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Belum punya akun?
                                </Link>

                                <PrimaryButton className="ms-4" disabled={processing}>
                                    Masuk
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

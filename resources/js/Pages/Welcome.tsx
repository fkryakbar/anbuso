import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';


export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    // console.log(auth);

    return (
        <>
            <Head title="Analisis Butir Soal Berbasis Web" />
            <div>
                <p className='dark:text-white'>Anbuso</p>
                <li>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </li>
            </div>
        </>
    );
}

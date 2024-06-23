import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import HomeLayout from '@/Layouts/HomeLayout';


export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    // console.log(auth);

    return (
        <>
            <HomeLayout>
                <Head title="Analisis Butir Soal Berbasis Web" />
                <section className=' pt-[120px]  -mb-[5px]'>
                    <div className='max-w-[1200px] mx-auto lg:p-4 p-2  gap-5 flex lg:flex-row flex-col items-center'>
                        <div className='basis-[40%]'>
                            <h1 className='text-5xl font-bold text-gray-700 lg:text-left text-center '>Analisis Butir Soal Berbasis Web</h1>
                            <h3 className='text-blue-800 font-semibold mt-2 lg:text-left text-center'>Apa itu Analisis Butir Soal Berbasis Web?</h3>
                            <p className='mt-5 lg:text-left text-center lg:text-black '>
                                Analisis butir soal berbasis website adalah sebuah aplikasi yang dapat menganalisis butir soal secara online. Aplikasi ini memungkinkan guru untuk menganalisis berbagai soal pilihan ganda secara cepat dan efisien, serta dapat diakses kapan saja dan di mana saja.
                            </p>
                            <div className='flex gap-3 mt-4 justify-center lg:justify-start'>
                                <Link href='/login' className='btn bg-blue-500 text-white hover:bg-blue-700 border-none'>Masuk</Link>
                                <Link href='/register' className='btn bg-gray-700 text-white hover:bg-gray-900 border-none'>Daftar</Link>
                            </div>
                        </div>
                        <div className='basis-[60%]'>
                            <img src="/static/hero1.png" alt="hero" className='w-full' />
                        </div>
                    </div>
                </section>
                <svg id='fitur' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='fill-blue-500 -mb-[1px]'>
                    <path
                        fillOpacity={1}
                        d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,208C672,171,768,117,864,96C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
                <section className="bg-blue-500 -mb-[1px]">
                    <div className="lg:flex gap-5 w-[90%] lg:w-[70%] mx-auto">
                        <div className="relative basis-1/2 mb-4">
                            <div className="sticky top-[150px] bg-white p-5 rounded-lg  drop-shadow flex justify-between items-center">
                                <div className="w-full">
                                    <h1 className="text-blue-800 text-xl font-bold text-center lg:text-left">Apa saja yang bisa dilakukan oleh Aplikasi Analisis Butir Soal Berbasis Web?</h1>
                                    <p className="mt-3 text-[#361134] text-center lg:text-left ">Aplikasi analisis butir soal berbasis web hanya tersedia dalam platform web yang bisa diakses kapan saja dan dimana saja</p>
                                    <div className="rounded-full lg:mx-0 mx-auto w-[20%] h-1 bg-[#005AAC] mt-2"></div>
                                </div>

                            </div>
                        </div>
                        <div className="relative basis-1/2">
                            <div
                                className="border-r-4 border-[#11b6e6] absolute h-full top-0"
                                style={{ left: 9 }}
                            />
                            <ul className="list-none m-0 p-0">
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1" />
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                                        Menskor Jawaban Siswa
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700" />
                                                        <div className="w-5 h-5 rounded-full bg-amber-400" />
                                                        <div className="w-5 h-5 rounded-full bg-green-400" />
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">
                                                    Guru dapat melakukan penskoran langsung melalui aplikasi
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1" />
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                                        Mengukur Kevalidan tiap Butir Soal
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700" />
                                                        <div className="w-5 h-5 rounded-full bg-amber-400" />
                                                        <div className="w-5 h-5 rounded-full bg-green-400" />
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">Guru dapat mengetahui kevalidan tiap butir soal dapat diukur secara otomatis melalui aplikasi</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1" />
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                                        Mengukur Tingkat Kesulitan tiap butir Soal
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700" />
                                                        <div className="w-5 h-5 rounded-full bg-amber-400" />
                                                        <div className="w-5 h-5 rounded-full bg-green-400" />
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">
                                                    Guru dapat mengetahui seberapa sulit atau mudahnya suatu soal bagi kelompok responden yang diuji
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1" />
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                                        Mengukur Reliabilitas Soal
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700" />
                                                        <div className="w-5 h-5 rounded-full bg-amber-400" />
                                                        <div className="w-5 h-5 rounded-full bg-green-400" />
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">
                                                    Guru dapat mengetahui secara otomatis sejauh mana hasil pengukuran konsisten atau stabil ketika pengukuran dilakukan berulang kali dalam kondisi yang sama.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1" />
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                                        Mengukur Daya Pembeda
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700" />
                                                        <div className="w-5 h-5 rounded-full bg-amber-400" />
                                                        <div className="w-5 h-5 rounded-full bg-green-400" />
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">
                                                    Aplikasi dapat membantu guru dalam melihat kemampuan suatu soal untuk membedakan antara siswa yang memiliki kemampuan tinggi dan siswa yang memiliki kemampuan rendah
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1" />
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                                        Platform Tes Berbasis Web
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700" />
                                                        <div className="w-5 h-5 rounded-full bg-amber-400" />
                                                        <div className="w-5 h-5 rounded-full bg-green-400" />
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">
                                                    Aplikasi dapat digunakan sebagai media agar Guru bisa melakukan tes kepada siswa secara online
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='fill-blue-500'>
                    <path
                        fillOpacity={1}
                        d="M0,224L48,197.3C96,171,192,117,288,122.7C384,128,480,192,576,192C672,192,768,128,864,90.7C960,53,1056,43,1152,58.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    />
                </svg>
            </HomeLayout>
        </>
    );
}

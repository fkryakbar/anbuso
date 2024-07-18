import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import HomeLayout from '@/Layouts/HomeLayout';


export default function Tentang({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    // console.log(auth);

    return (
        <>
            <HomeLayout>
                <Head title="Tentang" />
                <section className=' pt-[120px]  -mb-[5px]'>
                    <div className='max-w-[1200px] mx-auto gap-5 flex lg:flex-row flex-col items-center'>
                        <div className='basis-[40%] lg:p-8 p-4 m-4 shadow-lg rounded-lg border-[1px]'>
                            <div className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-blue-700" />
                                <div className="w-5 h-5 rounded-full bg-amber-400" />
                                <div className="w-5 h-5 rounded-full bg-green-400" />
                            </div>
                            <h1 className='lg:text-5xl text-4xl font-bold text-gray-700 lg:text-left text-center mt-5'>Tentang Kami</h1>
                            <h3 className='text-blue-800 font-semibold mt-2 lg:text-left text-center'>Tim Pengembang Aplikasi Analisis Butir Soal Berbasis Web</h3>
                            <p className='mt-5 lg:text-black indent-8 text-justify'>
                                Aplikasi Analisis Butir Soal Pilihan Ganda dan Esai kami dirancang untuk membantu para pendidik dalam mengevaluasi kualitas soal ujian. Aplikasi ini mencakup berbagai fitur analisis yang komprehensif, termasuk analisis kevalidan, daya pembeda, reliabilitas, dan tingkat kesukaran soal. Dengan menggunakan aplikasi ini, pengguna dapat memastikan bahwa soal yang digunakan dalam ujian tidak hanya sesuai dengan standar akademis, tetapi juga efektif dalam mengukur kemampuan siswa secara akurat dan adil.
                            </p>
                            <p className='mt-5 lg:text-black indent-8 text-justify'>
                                Tim pengembang aplikasi ini terdiri dari anggota Program Dosen Wajib Mengabdi dan Program Dosen Wajib Meneliti dari Program Studi Pendidikan Matematika Universitas Lambung Mangkurat, yang beranggotakan:
                            </p>
                            <ol className="list-decimal ml-10 mt-3">
                                <li className='text-black'>Dr. Hidayah Ansori, M.Si.</li>
                                <li className='text-black'>Rizki Amalia, S.Pd., M.Pd.</li>
                                <li className='text-black'>Asdini Sari, S.Pd., M.Pd.</li>
                                <li className='text-black'>Juhairiah, S.Pd., M.Pd.</li>
                                <li className='text-black'>Muhammad Sa'duddien Khair, S.Pd., M.Pd.</li>
                            </ol>
                            <p className='mt-5 lg:text-black indent-8 text-justify'>
                                Selain itu, aplikasi ini juga dikembangkan dengan partisipasi aktif dari anggota mahasiswa:
                            </p>
                            <ol className="list-decimal ml-10 mt-3">
                                <li className='text-black'>Annisa Hidayah</li>
                                <li className='text-black'>Rezqy Hidayat</li>
                                <li className='text-black'>Devia Handayani</li>
                            </ol>
                        </div>
                        <div className='basis-[60%]'>
                            <img src="/static/about.svg" alt="about" className='w-full' />
                        </div>
                    </div>
                </section>

            </HomeLayout>
        </>
    );
}

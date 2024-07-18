import DashboardLayout from "@/Layouts/DashboardLayout";
import { timeFormat } from "@/helper/helper";
import { DayaPembeda, DayaPembedaEssay, PaketSoal, Reliability, Student, TingkatKesulitan, Validity } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import Interpretasi from "./Partials/Interpretasi";

export default function Summary({
    paketSoalMultipleChoice,
    validityMultipleChoice,
    filteredStudentsMultipleChoice,
    reliabilitasMultipleChoice,
    tingkatKesulitanMultipleChoice,
    dayaPembedaMultipleChoice,
    paketSoalEssay,
    validityEssay,
    filteredStudentsEssay,
    reliabilitasEssay,
    tingkatKesulitanEssay,
    dayaPembedaEssay
}: {
    paketSoalMultipleChoice: PaketSoal,
    validityMultipleChoice: Validity | null,
    filteredStudentsMultipleChoice: Student[],
    reliabilitasMultipleChoice: Reliability | null,
    tingkatKesulitanMultipleChoice: TingkatKesulitan[] | null,
    dayaPembedaMultipleChoice: DayaPembeda | null
    paketSoalEssay: PaketSoal,
    validityEssay: Validity | null,
    filteredStudentsEssay: Student[],
    reliabilitasEssay: Reliability | null,
    tingkatKesulitanEssay: TingkatKesulitan[] | null,
    dayaPembedaEssay: DayaPembedaEssay[] | null

}) {

    return (
        <DashboardLayout>
            <Head title="Analisis" />
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link href={route('analisis')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Analisis
                        </Link>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Analisis Butir Soal
                        </a>
                    </li>
                </ul>
            </div>
            <div className="p-5 bg-white rounded-md shadow-sm w-full">
                <div className="flex gap-3 justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <div className="w-[60px]">
                            <img src="/static/analysis.png" alt="logo" width="100%" />
                        </div>
                        <div className="block">
                            <p className="lg:text-xl text-lg font-semibold text-slate-600">
                                {paketSoalMultipleChoice.title}
                            </p>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-slate-400">
                                    {timeFormat(paketSoalMultipleChoice.created_at)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <h1 className="text-gray-500 font-semibold text-xl">
                        Analisis
                    </h1>
                    <div>
                        <a href={route('download_analisis', { slug: paketSoalMultipleChoice.slug })} className="btn btn-sm bg-blue-500 hover:bg-blue-900 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Unduh Analisis
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-5 justify-end flex">
                <button onClick={() => {
                    router.reload({
                        only: ['students']
                    })
                }} className="btn btn-sm bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </div>
            <div role="tablist" className="tabs tabs-lifted mt-5 lg:tabs-lg">
                <Link role="tab" href={route('summary', { slug: paketSoalMultipleChoice.slug })} className="tab">Penskoran</Link>
                <Link role="tab" href={route('detail', { slug: paketSoalMultipleChoice.slug })} className="tab tab-active">Analisis Butir Soal</Link>
            </div>
            <div className="flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px] overflow-x-auto">
                <div className="flex flex-col gap-3 p-3 border-[1px] overflow-x-auto   mt-5">
                    <h1 className="text-center text-2xl font-bold text-gray-700">Pilihan Ganda</h1>
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold text-gray-700">Validitas dan Tingkat Kesulitan Butir Soal</h1>
                        <button onClick={() => (document.getElementById(
                            "validitas"
                        ) as HTMLDialogElement
                        ).showModal()} className="btn btn-sm bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </button>
                        <Interpretasi id="validitas" title="Interpretasi Validitas dan Tingkat Kesulitan Butir Soal">
                            <h1 className="font-bold text-lg">1. Validitas</h1>
                            <div className="ml-4">
                                <h2 className="font-semibold">Pengertian</h2>
                                <p className="text-justify indent-10">Validitas adalah ukuran yang menunjukkan sejauh mana suatu tes atau instrumen pengukuran mampu mengukur apa yang seharusnya diukur. Dalam konteks soal pilihan ganda, validitas menunjukkan sejauh mana soal-soal tersebut mampu mengukur pengetahuan atau kemampuan yang ingin diukur.</p>
                                <h2 className="font-semibold">Implikasi Soal Tidak Valid</h2>
                                <p className="text-justify indent-10">Jika soal tidak valid, hasil tes tidak dapat dipercaya karena tidak mengukur apa yang seharusnya diukur. Misalnya, jika sebuah soal matematika tidak valid, bisa jadi soal tersebut tidak mengukur kemampuan matematika siswa tetapi mengukur kemampuan membaca atau pengetahuan umum.</p>
                                <h2 className="font-semibold">Soal yang Valid</h2>
                                <p className="text-justify indent-10">Soal yang valid adalah soal yang benar-benar mengukur kompetensi atau kemampuan yang diharapkan. Soal ini memberikan gambaran yang akurat tentang kemampuan siswa dalam bidang yang diuji.</p>
                            </div>
                            <h1 className="font-bold text-lg mt-5">2. Tingkat Kesulitan</h1>
                            <div className="ml-4">
                                <h2 className="font-semibold">Pengertian</h2>
                                <p className="text-justify indent-10">Tingkat kesulitan adalah ukuran yang menunjukkan seberapa sulit atau mudahnya suatu soal bagi kelompok responden yang diuji. Tingkat kesulitan biasanya diukur dalam bentuk persentase atau proporsi siswa yang menjawab soal tersebut dengan benar.</p>
                                <h2 className="font-semibold">Kategori Tingkat Kesulitan</h2>
                                <ul className="list-disc ml-5">
                                    <li>Sangat Mudah: Jika lebih dari 90% siswa dapat menjawab soal dengan benar.</li>
                                    <li>Mudah: Jika lebih dari 60-90% siswa dapat menjawab soal dengan benar.</li>
                                    <li>Sedang: Jika 40-60% siswa dapat menjawab soal dengan benar.</li>
                                    <li>Sulit: Jika 20-40% siswa dapat menjawab soal dengan benar.</li>
                                    <li>Sangat Sulit: Jika kurang dari 20% siswa dapat menjawab soal dengan benar.</li>
                                </ul>
                                <h2 className="font-semibold">Implikasi</h2>
                                <p className="text-justify indent-10">Soal yang terlalu mudah atau terlalu sulit tidak memberikan informasi yang cukup tentang kemampuan siswa. Idealnya, soal-soal dalam tes memiliki tingkat kesulitan yang bervariasi untuk mendapatkan gambaran kemampuan siswa yang lebih akurat.</p>

                            </div>
                        </Interpretasi>
                    </div>
                    {
                        validityMultipleChoice ? (<>
                            <div className="overflow-x-auto">
                                <table className="table table-xs border-[1px] min-w-[1000px]">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th className="text-center font-semibold text-black text-lg" colSpan={paketSoalMultipleChoice.questions && paketSoalMultipleChoice.questions.length}>Butir Soal</th>
                                        </tr>
                                        <tr>
                                            <th className="text-center font-semibold text-black text-lg">No</th>
                                            <th className="font-semibold text-black text-lg">Nama Siswa</th>
                                            {
                                                paketSoalMultipleChoice.questions && paketSoalMultipleChoice.questions.length > 0 ? (
                                                    paketSoalMultipleChoice.questions.map((q, i) => (
                                                        <th className="text-center text-black text-lg" key={i}>{i + 1}</th>
                                                    ))
                                                ) : null
                                            }
                                            <th className="text-center font-semibold text-black text-lg">Total Benar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredStudentsMultipleChoice.map((student, i) => (
                                                <tr key={i}>
                                                    <th className="text-center">{i + 1}</th>
                                                    <th>{student.name}</th>
                                                    {
                                                        student.answers && student.answers.length > 0 ? (
                                                            student.answers.map((answer, i) => (
                                                                <td className={`text-center ${answer.score == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.score}</td>
                                                            ))
                                                        ) : null
                                                    }
                                                    <td className="text-center">{validityMultipleChoice.trueAnswerTotalByStudent[i]}</td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td></td>
                                            <td>Korelitas</td>
                                            {
                                                validityMultipleChoice.questionsValidity.map((v, i) => (
                                                    <td key={i} className="text-center">
                                                        {v.correlationValue || v.correlationValue == 0.0 ? v.correlationValue : 'Null'}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Nilai Validitas
                                                <p>rTabel = <span className="font-semibold">{validityMultipleChoice.rTable}</span></p>

                                            </td>
                                            {
                                                validityMultipleChoice.questionsValidity.map((v, i) => (
                                                    <td key={i} className="text-center">
                                                        <div className={`${v.correlationValue == null || v.correlationValue == 0.0 ? 'bg-gray-300 text-black' : (v.validity ? 'bg-green-500 text-white' : 'bg-red-500 text-white')} rounded-lg font-semibold p-2 w-fit mx-auto`}>
                                                            {v.correlationValue == null || v.correlationValue == 0.0 ? v.validity : (v.validity ? 'Valid' : 'Tidak Valid')}
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Tingkat Kesulitan
                                            </td>
                                            {
                                                tingkatKesulitanMultipleChoice?.map((t, i) => (
                                                    <td key={i} className="text-center">
                                                        <p className="font-semibold">
                                                            {t.category}
                                                        </p>
                                                        <p>{t.value}</p>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </>) : (
                            <div className="mt-5">
                                <img src="/static/question-mark.svg" alt="" className="max-w-[300px] mx-auto" />
                                <h2 className="text-center font-semibold text-gray-500">Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis</h2>
                            </div>
                        )
                    }
                    <hr className="border-[1px] mt-5" />
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold text-gray-700">Reliabilitas Soal</h1>
                        <button onClick={() => (document.getElementById(
                            "reliabilitas"
                        ) as HTMLDialogElement
                        ).showModal()} className="btn btn-sm bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </button>
                        <Interpretasi id="reliabilitas" title="Interpretasi Reliabilitas Soal">
                            <div className="ml-4">
                                <h2 className="font-semibold">Pengertian</h2>
                                <p className="text-justify indent-10">Reliabilitas adalah ukuran yang menunjukkan sejauh mana hasil pengukuran konsisten atau stabil ketika pengukuran dilakukan berulang kali dalam kondisi yang sama. Reliabilitas yang tinggi berarti hasil tes dapat diandalkan dan konsisten dari waktu ke waktu.</p>
                                <h2 className="font-semibold">Implikasi Reliabilitas Rendah</h2>
                                <p className="text-justify indent-10">Jika tes memiliki reliabilitas yang rendah, hasil tes dapat bervariasi secara signifikan setiap kali tes diulang, meskipun kondisi tes tetap sama. Hal ini membuat hasil tes tidak dapat diandalkan sebagai indikator kemampuan siswa.</p>
                                <h2 className="font-semibold">Reliabilitas yang Tinggi</h2>
                                <p className="text-justify indent-10">Tes dengan reliabilitas yang tinggi memberikan hasil yang konsisten, artinya jika siswa yang sama mengikuti tes yang sama dalam kondisi yang sama, hasilnya akan serupa.</p>
                            </div>
                        </Interpretasi>
                    </div>
                    {
                        reliabilitasMultipleChoice ? (
                            <>
                                <div className="overflow-x-auto">
                                    <div className="border-[1px] flex p-5 rounded-lg min-w-[1000px]">
                                        <div className="basis-[15%] flex flex-col gap-2">
                                            <h1 className="font-semibold">rHitung</h1>
                                            <h1 className="font-semibold">rTabel</h1>
                                            <h1 className="font-semibold">Reliabilitas</h1>
                                        </div>
                                        <div className="basis-[85%] flex flex-col gap-2">
                                            <h1>: {reliabilitasMultipleChoice.rHitung}</h1>
                                            <h1>: {reliabilitasMultipleChoice.rTable}</h1>
                                            <h1>: <span className={`p-2 rounded-md text-white font-semibold text-xs ${reliabilitasMultipleChoice.reliabilitas ? 'bg-green-500' : 'bg-red-500'}`}>{reliabilitasMultipleChoice.reliabilitas ? 'Reliabilitas Tinggi' : 'Reliabilitas Rendah'}</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="mt-5">
                                <img src="/static/question-mark.svg" alt="" className="max-w-[300px] mx-auto" />
                                <h2 className="text-center font-semibold text-gray-500">Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis</h2>
                            </div>
                        )
                    }
                    <hr className="border-[1px] mt-5" />
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold text-gray-700">Daya Pembeda</h1>
                        <button onClick={() => (document.getElementById(
                            "dayaPembeda"
                        ) as HTMLDialogElement
                        ).showModal()} className="btn btn-sm bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </button>
                        <Interpretasi id="dayaPembeda" title="Interpretasi Daya Pembeda">
                            <div className="ml-4">
                                <h2 className="font-semibold">Pengertian</h2>
                                <p className="text-justify indent-10">Daya pembeda adalah kemampuan suatu soal untuk membedakan antara siswa yang memiliki kemampuan tinggi dan siswa yang memiliki kemampuan rendah. Daya pembeda diukur dengan melihat perbedaan proporsi siswa dengan kemampuan tinggi yang menjawab benar dan siswa dengan kemampuan rendah yang menjawab benar.</p>
                                <h2 className="font-semibold">Kategori Daya Pembeda</h2>
                                <ul className="list-disc ml-5">
                                    <li>Sangat Baik: Jika soal dapat dengan jelas membedakan siswa yang berkemampuan tinggi dan rendah.</li>
                                    <li>Baik: Jika soal dapat membedakan siswa yang berkemampuan tinggi dan rendah.</li>
                                    <li>Cukup: Jika soal hanya dapat sedikit membedakan siswa yang berkemampuan tinggi dan rendah.</li>
                                    <li>Kurang Baik: Jika soal tidak dapat membedakan siswa yang berkemampuan tinggi dan rendah atau jika kedua kelompok sama-sama menjawab benar atau salah.</li>
                                </ul>
                                <h2 className="font-semibold">Implikasi</h2>
                                <p className="text-justify indent-10">Soal dengan daya pembeda yang baik akan memberikan informasi yang lebih jelas tentang kemampuan individu siswa. Jika daya pembeda rendah, soal tersebut tidak efektif dalam menilai perbedaan kemampuan siswa.</p>
                                <h2 className="font-semibold">Catatan</h2>
                                <p className="text-justify indent-10">Perhitungan dilakukan dengan mengukur maksimal 30 data siswa. Perhitungan dilakukan dengan mengurutkan siswa dari skor menjawab terbanyak sampai yang terkecil. Kemudian, siswa akan dibagi menjadi Upper Group (Warna Hijau) dan Lower Group (Warna kuning). Jika jumlah siswa ganjil maka siswa yang berada diantara Upper Group dan Lower Group (Warna Merah muda) tidak diikutkan didalam perhitungan.</p>
                            </div>
                        </Interpretasi>
                    </div>
                    {
                        dayaPembedaMultipleChoice ? (<>
                            <div className="overflow-x-auto">
                                <table className="table border-[1px] min-w-[1000px]">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th className="text-center font-semibold text-black text-lg" colSpan={paketSoalMultipleChoice.questions && paketSoalMultipleChoice.questions.length}>Butir Soal</th>
                                        </tr>
                                        <tr>
                                            <th className="text-center font-semibold text-black text-lg">No</th>
                                            <th className="font-semibold text-black text-lg">Nama Siswa</th>
                                            {
                                                paketSoalMultipleChoice.questions && paketSoalMultipleChoice.questions.length > 0 ? (
                                                    paketSoalMultipleChoice.questions.map((q, i) => (
                                                        <th className="text-center text-black text-lg" key={i}>{i + 1}</th>
                                                    ))
                                                ) : null
                                            }
                                            <th className="text-center font-semibold text-black text-lg">Total Benar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dayaPembedaMultipleChoice.upperGroupStudents.map((student, i) => (
                                                <tr key={i} className="bg-green-200">
                                                    <th className="text-center">{i + 1}</th>
                                                    <th >{student.name}</th>
                                                    {
                                                        student.answers && student.answers.length > 0 ? (
                                                            student.answers.map((answer, i) => (
                                                                <td className={`text-center ${answer.score == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.score}</td>
                                                            ))
                                                        ) : null
                                                    }
                                                    <td className="text-center">{student.trueAnswer ? student.trueAnswer : null}</td>
                                                </tr>
                                            ))
                                        }
                                        {
                                            dayaPembedaMultipleChoice.middleGroupStudents?.map((student, i) => (
                                                <tr key={i} className="bg-red-100">
                                                    <th className="text-center">{dayaPembedaMultipleChoice.upperGroupStudents.length + i + 1}</th>
                                                    <th >{student.name}</th>
                                                    {
                                                        student.answers && student.answers.length > 0 ? (
                                                            student.answers.map((answer, i) => (
                                                                <td className={`text-center ${answer.score == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.score}</td>
                                                            ))
                                                        ) : null
                                                    }
                                                    <td className="text-center">{student.trueAnswer ? student.trueAnswer : null}</td>
                                                </tr>
                                            ))
                                        }
                                        {
                                            dayaPembedaMultipleChoice.lowerGroupStudents?.map((student, i) => (
                                                <tr key={i} className="bg-amber-200">
                                                    {
                                                        dayaPembedaMultipleChoice.middleGroupStudents ? (
                                                            <th className="text-center">{dayaPembedaMultipleChoice.upperGroupStudents.length + dayaPembedaMultipleChoice.middleGroupStudents.length + i + 1}</th>
                                                        ) : (
                                                            <th className="text-center">{dayaPembedaMultipleChoice.upperGroupStudents.length + i + 1}</th>
                                                        )
                                                    }
                                                    <th >{student.name}</th>
                                                    {
                                                        student.answers && student.answers.length > 0 ? (
                                                            student.answers.map((answer, i) => (
                                                                <td className={`text-center ${answer.score == 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.score}</td>
                                                            ))
                                                        ) : null
                                                    }
                                                    <td className="text-center">{student.trueAnswer ? student.trueAnswer : 0}</td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td></td>
                                            <td >
                                                Daya Pembeda
                                            </td>
                                            {
                                                dayaPembedaMultipleChoice.dayaPembeda.map((t, i) => (
                                                    <td key={i} className="text-center">
                                                        <p className="font-semibold">
                                                            {t.category}
                                                        </p>
                                                        <p>{t.value}</p>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>) : (
                            <div className="mt-5">
                                <img src="/static/question-mark.svg" alt="" className="max-w-[300px] mx-auto" />
                                <h2 className="text-center font-semibold text-gray-500">Minimal 5 dan Maksimal 30 Siswa yang hanya bisa dilakukan analisis</h2>
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-col gap-3 p-3 border-[1px] overflow-x-auto   mt-5">
                    <h1 className="text-center text-2xl font-bold text-gray-700">Esai</h1>
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold text-gray-700">Validitas dan Tingkat Kesulitan Butir Soal</h1>
                        <button onClick={() => (document.getElementById(
                            "validitas"
                        ) as HTMLDialogElement
                        ).showModal()} className="btn btn-sm bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </button>
                    </div>
                    {
                        validityEssay ? (<>
                            <div className="overflow-x-auto">
                                <table className="table table-xs border-[1px] min-w-[1000px]">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th className="text-center font-semibold text-black text-lg" colSpan={paketSoalEssay.questions && paketSoalEssay.questions.length}>Butir Soal</th>
                                        </tr>
                                        <tr>
                                            <th className="text-center font-semibold text-black text-lg">No</th>
                                            <th className="font-semibold text-black text-lg">Nama Siswa</th>
                                            {
                                                paketSoalEssay.questions && paketSoalEssay.questions.length > 0 ? (
                                                    paketSoalEssay.questions.map((q, i) => (
                                                        <th className="text-center text-black text-lg" key={i}>{i + 1}</th>
                                                    ))
                                                ) : null
                                            }
                                            <th className="text-center font-semibold text-black text-lg">Total Poin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredStudentsEssay.map((student, i) => (
                                                <tr key={i}>
                                                    <th className="text-center">{i + 1}</th>
                                                    <th>{student.name}</th>
                                                    {
                                                        student.answers && student.answers.length > 0 ? (
                                                            student.answers.map((answer, i) => (
                                                                <td className={`text-center ${answer.score >= 1 ? 'text-green-500' : 'text-red-500'} font-semibold`} key={i}>{answer.score}</td>
                                                            ))
                                                        ) : null
                                                    }
                                                    <td className="text-center">{validityEssay.trueAnswerTotalByStudent[i]}</td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td></td>
                                            <td>Korelitas</td>
                                            {
                                                validityEssay.questionsValidity.map((v, i) => (
                                                    <td key={i} className="text-center">
                                                        {v.correlationValue || v.correlationValue == 0.0 ? v.correlationValue : 'Null'}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Nilai Validitas
                                                <p>rTabel = <span className="font-semibold">{validityEssay.rTable}</span></p>

                                            </td>
                                            {
                                                validityEssay.questionsValidity.map((v, i) => (
                                                    <td key={i} className="text-center">
                                                        <div className={`${v.correlationValue == null || v.correlationValue == 0.0 ? 'bg-gray-300 text-black' : (v.validity ? 'bg-green-500 text-white' : 'bg-red-500 text-white')} rounded-lg font-semibold p-2 w-fit mx-auto`}>
                                                            {v.correlationValue == null || v.correlationValue == 0.0 ? v.validity : (v.validity ? 'Valid' : 'Tidak Valid')}
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Tingkat Kesulitan
                                            </td>
                                            {
                                                tingkatKesulitanEssay?.map((t, i) => (
                                                    <td key={i} className="text-center">
                                                        <p className="font-semibold">
                                                            {t.category}
                                                        </p>
                                                        <p>{t.value}</p>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                daya Pembeda
                                            </td>
                                            {
                                                dayaPembedaEssay?.map((t, i) => (
                                                    <td key={i} className="text-center">
                                                        <p className="font-semibold">
                                                            {t.category}
                                                        </p>
                                                        <p>{t.value}</p>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </>) : (
                            <div className="mt-5">
                                <img src="/static/question-mark.svg" alt="" className="max-w-[300px] mx-auto" />
                                <h2 className="text-center font-semibold text-gray-500">Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis</h2>
                            </div>
                        )
                    }
                    <hr className="border-[1px] mt-5" />
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold text-gray-700">Reliabilitas Soal</h1>
                        <button onClick={() => (document.getElementById(
                            "reliabilitas"
                        ) as HTMLDialogElement
                        ).showModal()} className="btn btn-sm bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </button>
                    </div>
                    {
                        reliabilitasEssay ? (
                            <>
                                <div className="overflow-x-auto">
                                    <div className="border-[1px] flex p-5 rounded-lg min-w-[1000px]">
                                        <div className="basis-[15%] flex flex-col gap-2">
                                            <h1 className="font-semibold">rHitung</h1>
                                            <h1 className="font-semibold">rTabel</h1>
                                            <h1 className="font-semibold">Reliabilitas</h1>
                                        </div>
                                        <div className="basis-[85%] flex flex-col gap-2">
                                            <h1>: {reliabilitasEssay.rHitung}</h1>
                                            <h1>: {reliabilitasEssay.rTable}</h1>
                                            <h1>: <span className={`p-2 rounded-md text-white font-semibold text-xs ${reliabilitasEssay.reliabilitas ? 'bg-green-500' : 'bg-red-500'}`}>{reliabilitasEssay.reliabilitas ? 'Reliabilitas Tinggi' : 'Reliabilitas Rendah'}</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="mt-5">
                                <img src="/static/question-mark.svg" alt="" className="max-w-[300px] mx-auto" />
                                <h2 className="text-center font-semibold text-gray-500">Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis</h2>
                            </div>
                        )
                    }

                </div>
            </div>
        </DashboardLayout>
    )
}
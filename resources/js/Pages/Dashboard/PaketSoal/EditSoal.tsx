import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { PaketSoal } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import RichEditor from "./Partials/RichEditor";
import { FormEventHandler } from "react";
import Swal from "sweetalert2";

export default function EditSoal({ paketSoal }: { paketSoal: PaketSoal }) {
    const { data, processing, errors, setData, post, recentlySuccessful, progress, reset } = useForm({
        content: paketSoal.questions?.[0].content ?? '',
        option_a: paketSoal.questions?.[0].option_a,
        option_b: paketSoal.questions?.[0].option_b,
        option_c: paketSoal.questions?.[0].option_c,
        option_d: paketSoal.questions?.[0].option_d,
        option_e: paketSoal.questions?.[0].option_e,
        answer_key: paketSoal.questions?.[0].answer_key
    });

    console.log(data);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // console.log(data);
        console.log(route('update-soal', {
            paket_soal_slug: paketSoal.slug,
            slug: paketSoal.questions?.[0].slug
        }));

        post(route('update-soal', {
            paket_soal_slug: paketSoal.slug,
            slug: paketSoal.questions?.[0].slug
        }), {
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil",
                    text: "Soal berhasil diperbarui",
                    icon: "success"
                });
            },
            onError: (err) => {
                console.log(err);

            }

        })
    }
    return <>
        <DashboardLayout>
            <Head title={`Edit Soal | ${paketSoal.title}`} />
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link href="/dashboard/paket-soal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Paket Soal
                        </Link>
                    </li>
                    <li>
                        <Link href={route('soal', { slug: paketSoal.slug })}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Soal
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        </svg>
                        Edit Soal
                    </li>
                </ul>
            </div>


            <div className="bg-white p-3 rounded-md shadow mt-3 w-full">
                <form onSubmit={submit} autoComplete="off" autoCorrect="off" className="mt-5">
                    <RichEditor setData={setData} value={data.content} trigger={recentlySuccessful} />
                    <InputError message={errors.content} className="mt-2" />
                    <TextInput placeholder="A." className="mt-3" onChange={e => setData('option_a', e.target.value)} value={data.option_a} disabled={processing} />
                    <TextInput placeholder="B." className="mt-3" onChange={e => setData('option_b', e.target.value)} value={data.option_b} disabled={processing} />
                    <TextInput placeholder="C." className="mt-3" onChange={e => setData('option_c', e.target.value)} value={data.option_c} disabled={processing} />
                    <TextInput placeholder="D." className="mt-3" onChange={e => setData('option_d', e.target.value)} value={data.option_d} disabled={processing} />
                    <TextInput placeholder="E." className="mt-3" onChange={e => setData('option_e', e.target.value)} value={data.option_e} disabled={processing} />
                    <select className="select select-bordered w-full mt-4" value={data.answer_key} onChange={e => { setData('answer_key', e.target.value) }} disabled={processing}>
                        <option disabled value={''}>Kunci Jawaban</option>
                        <option value={'a'}>A</option>
                        <option value={'b'}>B</option>
                        <option value={'c'}>C</option>
                        <option value={'d'}>D</option>
                        <option value={'e'}>E</option>
                    </select>
                    <InputError message={errors.answer_key} className="mt-2" />
                    {
                        progress ? (
                            <progress className={`progress progress-success w-full`} value={progress.percentage} max="100"></progress>
                        ) : null
                    }
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Simpan Perubahan
                        </PrimaryButton>
                    </div>


                </form>
            </div>


        </DashboardLayout>
    </>
}
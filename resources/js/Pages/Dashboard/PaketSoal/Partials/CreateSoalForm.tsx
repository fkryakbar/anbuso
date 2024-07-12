import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect } from "react";
import RichEditor from "./RichEditor";
import { PaketSoal } from "@/types";
export default function CreateSoalForm({ paketSoal }: { paketSoal: PaketSoal }) {
    const { data, processing, errors, setData, post, recentlySuccessful, progress, reset } = useForm({
        content: '',
        type: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        option_e: '',
        answer_key: 'a',
        bobot: 10
    });


    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('create-question', {
            slug: paketSoal.slug
        }), {
            onSuccess: () => {
                reset('content', 'option_a', 'option_b', 'option_c', 'option_d', 'option_e', 'answer_key', 'type');
            }
        })
    }


    return <>
        <dialog id="create-soal-form" className="modal">
            <div className="modal-box max-w-[1000px] min-h-[700px]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Buat Soal</h3>
                {
                    recentlySuccessful && (
                        <div role="alert" className="alert alert-success mb-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Berhasil dibuat</span>
                        </div>
                    )
                }
                <form onSubmit={submit} autoComplete="off" autoCorrect="off" className="mt-5">
                    <RichEditor setData={setData} value={data.content} trigger={recentlySuccessful} />
                    <InputError message={errors.content} className="mt-2" />
                    <select className="select select-bordered w-full mt-4" value={data.type} onChange={e => { setData('type', e.target.value) }} disabled={processing}>
                        <option disabled value={''}>Tipe Soal</option>
                        <option value={'multiple_choice'}>Pilihan Ganda</option>
                        <option value={'essay'}>Esai</option>
                    </select>
                    <InputError message={errors.type} className="mt-2" />
                    {
                        data.type == 'multiple_choice' ? (
                            <>
                                <TextInput placeholder="A." className="mt-3" onChange={e => setData('option_a', e.target.value)} value={data.option_a} disabled={processing} />
                                <TextInput placeholder="B." className="mt-3" onChange={e => setData('option_b', e.target.value)} value={data.option_b} disabled={processing} />
                                <TextInput placeholder="C." className="mt-3" onChange={e => setData('option_c', e.target.value)} value={data.option_c} disabled={processing} />
                                <TextInput placeholder="D." className="mt-3" onChange={e => setData('option_d', e.target.value)} value={data.option_d} disabled={processing} />
                                <TextInput placeholder="E." className="mt-3" onChange={e => setData('option_e', e.target.value)} value={data.option_e} disabled={processing} />
                                <select className="select select-bordered w-full mt-4" value={data.answer_key} onChange={e => { setData('answer_key', e.target.value) }} disabled={processing}>
                                    <option value={'a'}>A</option>
                                    <option value={'b'}>B</option>
                                    <option value={'c'}>C</option>
                                    <option value={'d'}>D</option>
                                    <option value={'e'}>E</option>
                                </select>
                                <InputError message={errors.answer_key} className="mt-2" />
                            </>
                        ) : null
                    }
                    {
                        data.type == 'essay' ? (<>
                            <TextInput type="number" placeholder="Bobot" className="mt-3" onChange={e => setData('bobot', parseInt(e.target.value))} value={data.bobot} disabled={processing} />

                        </>) : null
                    }
                    {
                        progress ? (
                            <progress className={`progress progress-success w-full`} value={progress.percentage} max="100"></progress>
                        ) : null
                    }
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Buat Soal
                        </PrimaryButton>
                    </div>


                </form>
            </div>
        </dialog>
    </>
}
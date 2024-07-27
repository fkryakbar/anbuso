import { PaketSoal } from "@/types";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Filter({ paketSoalMultipleChoice, paketSoalEssay, multipleChoiceQuestionsId, essayQuestionsId }: { paketSoalMultipleChoice: PaketSoal, paketSoalEssay: PaketSoal, essayQuestionsId: number[], multipleChoiceQuestionsId: number[] }) {
    const [multipleChoiceChecked, setMultipleChoiceChecked] = useState<number[]>(multipleChoiceQuestionsId);
    const [essayChecked, setEssayChecked] = useState<number[]>(essayQuestionsId);
    const [isError, setIsError] = useState(false);
    const handleMultipleChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMultipleChoiceChecked(prev =>
            e.target.checked ? [...prev, value] : prev.filter(v => v !== value)
        );
    };

    const handleEssayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setEssayChecked(prev =>
            e.target.checked ? [...prev, value] : prev.filter(v => v !== value)
        );
    };

    const handleSave = () => {
        setIsError(false);
        const params = new URLSearchParams();
        multipleChoiceChecked.forEach(value => params.append('multipleChoice[]', value.toString()));
        essayChecked.forEach(value => params.append('essay[]', value.toString()));

        let url = route('detail', { slug: paketSoalMultipleChoice.slug }) + '?' + params.toString();
        if (multipleChoiceChecked.length == paketSoalMultipleChoice.questions?.length && essayChecked.length == paketSoalEssay.questions?.length) {
            url = route('detail', { slug: paketSoalMultipleChoice.slug })
        }
        if (multipleChoiceChecked.length > 1 && essayChecked.length > 1) {
            router.visit(url);
        } else {
            setIsError(true);
        }


    };

    return <>
        <button onClick={() => (document.getElementById('filter') as HTMLDialogElement).showModal()} className="btn btn-sm bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
        </button>
        <dialog id="filter" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg my-3">Pilih soal yang ingin dianalisis</h3>
                {
                    isError ? (
                        <div role="alert" className="alert alert-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Minimal Soal yang dipilih adalah 2</span>
                        </div>
                    ) : null
                }
                <p className="font-semibold mt-2">Plihan Ganda</p>
                {
                    paketSoalMultipleChoice.questions && paketSoalMultipleChoice.questions.length > 0 ? (
                        paketSoalMultipleChoice.questions.map((q, i) => (
                            <div className="form-control" key={i}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">Soal Nomor {i + 1}</span>
                                    <input type="checkbox" value={q.id.toString()} checked={multipleChoiceChecked.includes(q.id)} name="multipleChoice" onChange={handleMultipleChoiceChange} className="checkbox" />
                                </label>
                            </div>
                        ))
                    ) : null
                }
                <hr className="my-4" />
                <p className="font-semibold mt-2">Esai</p>
                {
                    paketSoalEssay.questions && paketSoalEssay.questions.length > 0 ? (
                        paketSoalEssay.questions.map((q, i) => (
                            <div className="form-control" key={i}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">Soal Nomor {i + 1}</span>
                                    <input type="checkbox" value={q.id.toString()} checked={essayChecked.includes(q.id)} name="essay" onChange={handleEssayChange} className="checkbox" />
                                </label>
                            </div>
                        ))
                    ) : null
                }

                <div className="modal-action">
                    <button className="btn bg-blue-500 text-white hover:bg-blue-700" onClick={handleSave}>Simpan</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>
}
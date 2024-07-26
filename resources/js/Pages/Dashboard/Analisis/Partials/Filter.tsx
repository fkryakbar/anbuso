import { PaketSoal } from "@/types";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Filter({ paketSoalMultipleChoice, paketSoalEssay }: { paketSoalMultipleChoice: PaketSoal, paketSoalEssay: PaketSoal }) {
    const [multipleChoiceChecked, setMultipleChoiceChecked] = useState<number[]>([]);
    const [essayChecked, setEssayChecked] = useState<number[]>([]);

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
        const params = new URLSearchParams();
        multipleChoiceChecked.forEach(value => params.append('multipleChoice[]', value.toString()));
        essayChecked.forEach(value => params.append('essay[]', value.toString()));

        const url = route('detail', { slug: paketSoalMultipleChoice.slug }) + '?' + params.toString();
        console.log(url);


    };

    return <>
        <button onClick={() => (document.getElementById('filter') as HTMLDialogElement).showModal()} className="btn btn-sm bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
        </button>
        <dialog id="filter" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Pilih soal yang ingin dianalisis</h3>
                <p className="font-semibold mt-2">Plihan Ganda</p>
                {
                    paketSoalMultipleChoice.questions && paketSoalMultipleChoice.questions.length > 0 ? (
                        paketSoalMultipleChoice.questions.map((q, i) => (
                            <div className="form-control" key={i}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">Soal Nomor {i + 1}</span>
                                    <input type="checkbox" value={i + 1} name="multipleChoice" onChange={handleMultipleChoiceChange} className="checkbox" />
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
                                    <input type="checkbox" value={i + 1} name="essay" onChange={handleEssayChange} className="checkbox" />
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
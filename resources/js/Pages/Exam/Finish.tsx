import GuestExamLayout from "@/Layouts/GuestExamLayout";
import { PaketSoal, Student } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Finish({ student, paketSoal }: { student: Student, paketSoal: PaketSoal }) {

    return (
        <GuestExamLayout >
            <Head title="Selesai" />
            <div className="m-auto">
                <div className="card min-[500px]:w-96 min-[200px]:w-[350px]  bg-base-100 shadow-xl m-3">
                    <div className="card-body items-center text-center">
                        <p className="text-center card-title">Test Telah Selesai</p>
                        <img src="/static/finished.svg" alt="" />
                        {
                            paketSoal.show_correct_answer ? (
                                <>
                                    <h2 className="card-title">Skor kamu</h2>
                                    <div className="radial-progress text-green-400" style={{ '--value': 100 } as React.CSSProperties}>{student.result?.score}</div>
                                </>
                            ) : null
                        }
                        <div className="flex gap-2 flex-wrap justify-center mt-2">
                            <div className="card-actions">
                                <Link href="/" className="btn btn-sm bg-green-400 border-none hover:bg-green-600 text-white">
                                    Keluar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </GuestExamLayout>
    )
}
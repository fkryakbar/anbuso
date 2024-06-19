import ExamLayout from "@/Layouts/ExamLayout";
import { PaketSoal, Student } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Exam({ paketSoal, student }: { paketSoal: PaketSoal, student: { session: Student } }) {
    const questions = paketSoal.questions
    const questionTotal = questions?.length

    const [currentQuestion, setCurrentQuestion] = useState(questions?.[0]);
    const [questionIndex, setQuestionIndex] = useState(0);


    const nextQuestion = () => {
        setQuestionIndex(currentIndex => {
            if (currentIndex + 1 == questionTotal) return currentIndex
            const newIndex = currentIndex + 1;
            setCurrentQuestion(questions?.[newIndex]);
            return newIndex;
        })
    }
    const prevQuestion = () => {
        setQuestionIndex(currentIndex => {
            if (currentIndex == 0) return currentIndex
            const newIndex = currentIndex - 1;
            setCurrentQuestion(questions?.[newIndex]);
            return newIndex;
        })
    }
    const changeQuestion = (index: number) => {
        setQuestionIndex(index)
        setCurrentQuestion(questions?.[index])
    }
    return (
        <ExamLayout changeQuestion={changeQuestion} paketSoal={paketSoal} nextQuestion={nextQuestion} prevQuestion={prevQuestion} questionIndex={questionIndex} questionTotal={questionTotal} student={student.session}>
            <Head title={`${paketSoal.title} | Exam Mode`} />
            {
                currentQuestion ? (
                    <div>
                        <div className="mt-5" dangerouslySetInnerHTML={{ __html: currentQuestion?.content }}></div>

                    </div>
                ) : null
            }
        </ExamLayout>
    )
}
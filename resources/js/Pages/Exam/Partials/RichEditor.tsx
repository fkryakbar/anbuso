import { useCallback, useEffect, useRef, useState } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import "../../../../../resources/css/richeditor.css"
import { Question } from "@/types"
import { useDebounce } from "@/helper/helper"
import axios from "axios"
import Swal from "sweetalert2"
import { Head, router } from "@inertiajs/react"
const RichEditor = ({ question, questions, setQuestions, setIsSaving }: { question: Question, questions: Question[], setIsSaving: (state: boolean) => void, setQuestions: (value: Question[]) => void }) => {

    const [quill, setQuill] = useState<any>(null)
    const [editor, setEditor] = useState<any>(null)
    const [answer, setAnswer] = useState('');
    const debouncedText = useDebounce(answer, 500); // 500ms delay

    useEffect(() => {
        if (debouncedText) {
            saveAnswerEssay(debouncedText, question.slug)
        }
    }, [debouncedText]);
    const saveAnswerEssay = (userAnswer: string, question_slug: string) => {
        setIsSaving(true)
        const payload = {
            question_slug: question_slug,
            answer: userAnswer,
            score: 0,
        }

        axios.post(route('save_answer_essay', { slug: question.paket_soal_slug }), payload)
            .then((res) => {
                if (questions) {
                    const currentQuestion = questions.find(q => q.slug == question_slug)
                    const currentQuestionIndex = questions.findIndex(q => q.slug == question_slug)
                    if (currentQuestion) {
                        currentQuestion.answer = res.data.answer
                    }
                    const newQuestionsData = questions
                    newQuestionsData[currentQuestionIndex] = currentQuestion as Question

                    setQuestions(newQuestionsData);


                }
                setIsSaving(false)
            })
            .catch(err => {
                if (err.response.status == 403) {
                    Swal.fire({
                        title: "Ditutup",
                        text: "Ujian Telah ditutup",
                        icon: "error",
                        confirmButtonText: "Keluar",
                    }).then(result => {
                        router.get(route('finished-exam', { slug: question.paket_soal_slug }))
                    })
                    return
                }
                Swal.fire({
                    title: "ERROR",
                    text: "Something Went Wrong!",
                    icon: "error"
                });
                console.log(err);
                setIsSaving(false)
            })
    }
    const wrapperRef = useCallback((wrapper: any) => {
        if (wrapper == null) return
        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        editor.innerHTML = ''
        if (question.answer?.answer) {
            editor.innerHTML = question.answer?.answer
        }
        wrapper.append(editor)
        const q = new Quill(editor, {
            theme: 'snow', modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],

                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'color': [] }, { 'background': [] }],

                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    [{ 'align': [] }],

                    ['clean']
                ]
            }
        }) as any
        setQuill(q);
        setEditor(editor)
        // setEditor(editor)

    }, [])

    useEffect(() => {
        if (quill == null) return

        quill.on('text-change', (delta: any, oldContents: any, source: string) => {
            if (source != 'user') return
            setAnswer(quill.root.innerHTML)
        });


    }, [quill])


    return (
        <>
            <div id="editor" ref={wrapperRef}></div>
        </>
    )
}

export default RichEditor

import { useCallback, useEffect, useRef, useState } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import "../../../../../css/richeditor.css"
const RichEditor = ({ setData, value, trigger }: { setData: any, value: string, trigger: boolean }) => {

    const [quill, setQuill] = useState<any>(null)
    const [editor, setEditor] = useState<any>(null)

    const wrapperRef = useCallback((wrapper: any) => {
        if (wrapper == null) return
        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        editor.innerHTML = value
        wrapper.append(editor)
        const q = new Quill(editor, {
            theme: 'snow', modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    ['link', 'image', 'video', 'formula'],

                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],

                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
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
            setData('content', quill.root.innerHTML)
        });


    }, [quill])
    useEffect(() => {
        if (quill == null) return

        const editor = document.querySelector('.ql-editor')
        console.log(editor);
        if (editor) {
            editor.innerHTML = value
        }


    }, [trigger])

    return (
        <>
            <div id="editor" ref={wrapperRef}></div>
        </>
    )
}

export default RichEditor

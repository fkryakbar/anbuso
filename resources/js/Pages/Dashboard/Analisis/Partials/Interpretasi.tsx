export default function Interpretasi({ children = <></>, id, title }: { children?: React.ReactNode, id: string, title: string }) {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box max-w-[1000px]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-xl mb-5">{title}</h3>
                {children}
            </div>
        </dialog>
    )
}
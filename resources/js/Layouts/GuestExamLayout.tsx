import { PropsWithChildren } from "react";

export default function GuestExamLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {children}
        </div>
    );
}

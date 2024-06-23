import { Link } from "@inertiajs/react";

export default function SideMenu({ pageData }: { pageData: any }) {


    function isRoute(url: string) {
        // const pattern = /^helloworld.*/;
        const pattern = new RegExp('^' + url + '.*')

        return pattern.test(pageData.url);

    }

    return <>
        <div className=" text-gray-500">
            <ul>
                <li className="relative px-6 py-3">
                    <span className={`absolute inset-y-0 left-0 w-1 ${isRoute('/dashboard/paket-soal') ? 'bg-blue-400' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true" />
                    <Link className={`inline-flex items-center w-full text-sm font-semibold transition-colors  ${isRoute('/dashboard/paket-soal') ? 'text-blue-400' : ''} duration-150 hover:text-gray-800`} href="/dashboard/paket-soal"  >
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                        <span className="ml-4">Paket Soal</span>
                    </Link>
                </li>
                <li className="relative px-6 py-3">
                    <span className={`absolute inset-y-0 left-0 w-1 ${isRoute('/dashboard/analisis') ? 'bg-blue-400' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true" />
                    <Link className={`inline-flex items-center w-full text-sm font-semibold transition-colors  ${isRoute('/dashboard/analisis') ? 'text-blue-400' : ''} duration-150 hover:text-gray-800`} href="/dashboard/analisis"  >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                        <span className="ml-4">Analisis</span>
                    </Link>
                </li>

            </ul>
        </div>

    </>
}
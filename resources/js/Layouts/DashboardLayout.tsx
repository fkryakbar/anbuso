import { useState, PropsWithChildren, ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { User } from '@/types';
import SideMenu from '@/Components/SideMenu';
import Account from '@/Components/Account';
function getInitials(fullName: string) {
    const words = fullName.split(' ');

    const initials = words.reduce((acc, word) => acc + word[0] + '', '');

    return initials.slice(0, 2);
}


export default function Authenticated({ children }: { children: ReactNode }) {
    const pageData = usePage();
    const { user } = pageData.props.auth as { user: User };
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <>
            <div className='bg-gray-100 min-h-screen'>
                <nav className='bg-white p-3 px-5 flex justify-between items-center shadow-md'>
                    <div className='flex items-center gap-2'>
                        <button className='lg:hidden' onClick={e => setIsSideBarOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <Link href='/' className='text-blue-400 text-3xl font-bold'>
                            AnBuSo
                        </Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="avatar placeholder">
                            <div className="bg-gray-300 text-gray-500 rounded-full w-12">
                                <span className="text-xl">{getInitials(user.name)}</span>
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button onClick={() => (document.getElementById(
                                    "account"
                                ) as HTMLDialogElement
                                ).showModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    Akun
                                </button>
                            </li>
                            <li>
                                <Link href={route('logout')} className='text-red-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Account user={user} />
                <div className='flex'>
                    <aside className={`bg-white min-h-screen shadow-md fixed top-0 ${isSideBarOpen ? 'left-0' : 'left-[-250px]'} w-[250px] pt-5 transition-all lg:hidden z-20`}>
                        <div className='flex ml-5 items-center justify-between mr-5'>
                            <Link href='/' className='text-blue-400 text-3xl font-bold'>
                                AnBuSo
                            </Link>
                            <button onClick={e => setIsSideBarOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='ml-5 my-5'>
                            <h2 className='text-gray-600 font-semibold lg:text-base text-sm'>
                                {user.name}
                            </h2>
                            <div className='bg-gray-200 rounded-md p-2 w-fit text-xs mt-2 '>
                                {user.email}
                            </div>
                        </div>
                        <SideMenu pageData={pageData} />
                    </aside>
                    <aside className={`lg:basis-[15%] bg-white min-h-screen shadow-md pt-5 hidden lg:block`}>
                        <div className='ml-5 mb-5'>
                            <h2 className='text-gray-600 font-semibold lg:text-base text-sm'>
                                {user.name}
                            </h2>
                            <div className='bg-gray-200 rounded-md p-2 w-fit text-xs mt-2 '>
                                {user.email}
                            </div>
                        </div>
                        <SideMenu pageData={pageData} />
                    </aside>
                    <div onClick={e => setIsSideBarOpen(false)} className={`fixed inset-0 z-10 items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${isSideBarOpen ? 'flex' : 'hidden'} min-h-screen`}></div>
                    <div className='lg:basis-[85%] w-full'>
                        <main className='p-5'>{children}</main>
                    </div>
                </div>
            </div>
        </>
    );
}

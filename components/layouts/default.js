import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Default({ children }) {
    const [sideBar, setSideBar] = useState(false);

    const handleSideBar = () => {
        setSideBar(!sideBar); 
    };

    useEffect(() => {
        if (sideBar) {
            document.body.classList.add("overflowHidden");
        } else {
            document.body.classList.remove("overflowHidden");
        }
    }, [sideBar])

    return (
        <>
            <Head>
                <title>MyCartoon</title>
            </Head>

            <div
                className={
                    sideBar ? "fixed inset-0 bg-black z-50 opacity-80" : ""
                }
                onClick={handleSideBar}
            ></div>

            <header className="fixed z-40 w-full bg-black bg-opacity-50 h-20 backdrop-filter backdrop-blur-sm transform case-in-out transition-all duration-300">
                <div className="container mx-auto flex justify-between h-full items-center px-3 xl:px-0">
                    <div className="flex">
                        <div className="md:hidden mr-3 flex items-center" onClick={handleSideBar}>
                            <Image
                                src="/svg-icons/bars.svg"
                                alt="Picture of the manhwa"
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="/">
                            <div className="text-white text-xl cursor-pointer flex items-center">
                                MyCartoon
                            </div>
                        </Link>
                    </div>

                    <div className="text-white text-lg flex gap-6 items-center">
                        <div className="hidden md:block">
                            <Link href="/">หน้าแรก</Link>
                        </div>
                        <div className="hidden md:block">
                            <Link href="#">นิยาย</Link>
                        </div>
                        <div className="hidden md:block">
                            <Link href="/cartoon">การ์ตูน</Link>
                        </div>
                        <div className="hidden md:block">
                            <Link href="#">ค้นหา</Link>
                        </div>
                        <button className="bg-gradient-to-b from-gold-1 to-gold-2 rounded-full text-xs md:text-sm px-6 py-2">
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
            </header>

            <aside
                className={`fixed h-full w-56 bg-dark z-50 top-0 transform case-in-out transition-all duration-300 ${
                    sideBar ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="h-full p-5 text-white">
                    <div className="text-xl mb-5 border-b pb-2 border-white">My Cartoon</div>
                    <div className="mb-3 text-lg" onClick={handleSideBar}>
                        <Link href="/">หน้าแรก</Link>
                    </div>
                    <div className="mb-3 text-lg" onClick={handleSideBar}>
                        <Link href="#">นิยาย</Link>
                    </div>
                    <div className="mb-3 text-lg" onClick={handleSideBar}>
                        <Link href="/cartoon">การ์ตูน</Link>
                    </div>
                    <div className="mb-3 text-lg" onClick={handleSideBar}>
                        <Link href="#">ค้นหา</Link>
                    </div>
                </div>
            </aside>

            <div className="bg-black bg-opacity-90 w-full pt-20">
                <div className="container mx-auto  px-3 xl:px-0">
                    {children}
                </div>
            </div>

            <footer className="h-20 text-white bg-black bg-opacity-95">
                <div className="container mx-auto flex items-center h-full px-3 xl:px-0 justify-center">
                    <div>© My Cartoon. 2021. All rights reserved.</div>
                </div>
            </footer>
        </>
    );
}

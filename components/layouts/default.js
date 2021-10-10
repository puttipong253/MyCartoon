import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Default({ children }) {
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        window.onscroll = function () {
            setScrollTop(document.documentElement.scrollTop);
            console.log(document.documentElement.scrollTop);
        };
    }, []);

    return (
        <>
            <Head>
                <title>MyCartoon</title>
            </Head>
            
            <header
                className="fixed z-50 top-0 w-full bg-black bg-opacity-90 h-20 backdrop-filter backdrop-blur-sm transform case-in-out transition-all duration-300"
            >
                <div className="container mx-auto flex justify-between h-full items-center px-3 md:px-0">
                    <div className="text-white text-xl cursor-pointer">
                        My Cartoon
                    </div>
                    <div className="text-white text-lg flex gap-6 items-center">
                        <div className="hidden md:block">
                            <Link href="/">หน้าแรก</Link>
                        </div>
                        <div className="hidden md:block">
                            <Link href="/">นิยาย</Link>
                        </div>
                        <div className="hidden md:block">
                            <Link href="/cartoon">การ์ตูน</Link>
                        </div>
                        <button className="bg-gradient-to-b from-gold-1 to-gold-2 rounded-lg text-sm px-4 py-2">
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
            </header>

            <div className="bg-black bg-opacity-90 w-full">
                <div className="container mx-auto px-3 mt-20 md:px-0">
                    {children}
                </div>
            </div>

            <footer className="h-40 bg-black bg-opacity-90 text-white">
                <div className="px-3 md:px-0">Footer</div>
            </footer>
        </>
    );
}

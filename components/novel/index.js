import Image from "next/image";

export default function Novel() {
    return (
        <div className="py-6">
            <div className="flex justify-between mb-4">
                <div className="text-3xl text-white">นิยาย</div>
                <button className="flex items-center">
                    <span className="text-lg text-white mr-2">ดูทั้งหมด</span>
                    <Image
                        src="/svg-icons/arrow-up.svg"
                        alt="Picture of the manhwa"
                        width={15}
                        height={15}
                        className="rounded-md transform rotate-90"
                    />
                </button>
            </div>

            <div className="grid grid-cols-6 gap-7">
                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <Image
                        src="/images/novel-1.jpg"
                        alt="Picture of the recommend"
                        width={200}
                        height={280}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <Image
                        src="/images/novel-2.jpg"
                        alt="Picture of the recommend"
                        width={200}
                        height={280}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <Image
                        src="/images/novel-3.jpg"
                        alt="Picture of the recommend"
                        width={200}
                        height={280}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <Image
                        src="/images/novel-4.jpg"
                        alt="Picture of the recommend"
                        width={200}
                        height={280}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <Image
                        src="/images/novel-5.jpg"
                        alt="Picture of the recommend"
                        width={200}
                        height={280}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <Image
                        src="/images/novel-6.jpg"
                        alt="Picture of the recommend"
                        width={200}
                        height={280}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}
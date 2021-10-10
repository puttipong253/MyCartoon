import Image from "next/image";

export default function RecommendCartoon() {
    return (
        <div className="py-5">
            <div className="flex justify-between mb-4">
                <div className="text-2xl md:text-3xl text-white">การ์ตูนแนะนำ</div>
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

            <div className="grid grid-cols-6 gap-5">
                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <img
                        src="/images/Against-the-Gods.webp"
                        alt=""
                        width="190"
                        className="rounded-xl"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <img
                        src="/images/Against-the-Gods.webp"
                        alt=""
                        width="190"
                        className="rounded-xl"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <img
                        src="/images/Against-the-Gods.webp"
                        alt=""
                        width="190"
                        className="rounded-xl"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <img
                        src="/images/Against-the-Gods.webp"
                        alt=""
                        width="190"
                        className="rounded-xl"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <img
                        src="/images/Against-the-Gods.webp"
                        alt=""
                        width="190"
                        className="rounded-xl"
                    />
                </div>

                <div className="transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <img
                        src="/images/Against-the-Gods.webp"
                        alt=""
                        width="190"
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}

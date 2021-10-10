import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function TopTenNovel() {
    return (
        <div className="">
            <Swiper
                modules={[Navigation, Pagination]}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-1.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-2.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-3.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-4.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-5.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-6.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-7.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-8.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-9.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-3 my-6 rounded-lg transform transition duration-300 ease-in-out xl:hover:-translate-y-2 cursor-pointer">
                        <div className="col-span-2">
                            <Image
                                src="/images/novel-10.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-gray-200">
                            <div className="text-lg mb-2">
                                Ahainst the Gods - อสูรพลิกฟ้า
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ประเภท - กำลังภายใน
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                ผู้แปล - indytranslate
                            </div>
                            <div className="text-xs md:text-sm mb-1">
                                เรื่องย่อ การท่องยุทธภพของบัคของเรื่อง
                                ขี้โกงกว่าชาวบ้านชาวเขา
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

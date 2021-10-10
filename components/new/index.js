import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function New() {
    return (
        <div className="py-4 xl:py-6">
            <div className="mb-4">
                <div className="text-2xl md:text-3xl text-white">เรื่องใหม่ล่าสุด</div>
            </div>
            
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
                    <div className="grid grid-cols-5 gap-2 bg-white bg-opacity-20 rounded-lg cursor-pointer px-3 pb-6 pt-3">
                        <div className="col-span-2">
                            <Image
                                src="/images/Yuan_Zun_1.png"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-white">
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
                    <div className="grid grid-cols-5 gap-2 bg-white bg-opacity-20 rounded-lg cursor-pointer px-3 pb-6 pt-3">
                        <div className="col-span-2">
                            <Image
                                src="/images/Phoenix_Goes_Against_the_World_1.jpg"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-white">
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
                    <div className="grid grid-cols-5 gap-2 bg-white bg-opacity-20 rounded-lg cursor-pointer px-3 pb-6 pt-3">
                        <div className="col-span-2">
                            <Image
                                src="/images/Martial_Arts_Reigns.png"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-white">
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
                    <div className="grid grid-cols-5 gap-2 bg-white bg-opacity-20 rounded-lg cursor-pointer px-3 pb-6 pt-3">
                        <div className="col-span-2">
                            <Image
                                src="/images/Against_The_Gods_1.PNG"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-white">
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
                    <div className="grid grid-cols-5 gap-2 bg-white bg-opacity-20 rounded-lg cursor-pointer px-3 pb-6 pt-3">
                        <div className="col-span-2">
                            <Image
                                src="/images/Against-the-Gods.webp"
                                alt="Picture of the manhwa"
                                width={250}
                                height={350}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="p-1 col-span-3 text-white">
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

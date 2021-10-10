import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Recommend() {
    return (
        <div className="py-1 xl:py-6">
            <div className="mb-4">
                <div className="text-2xl md:text-3xl text-white">
                    การ์ตูนแนะนำ
                </div>
            </div>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{
                    clickable: true,
                }}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="pb-7">
                        <Image
                            src="/images/The_Heavens_List_1.jpg"
                            alt="Picture of the recommendCartoon"
                            width={200}
                            height={280}
                            layout="responsive"
                            className="rounded-md cursor-pointer"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-7">
                        <Image
                            src="/images/Martial_God_Asura_1.jpg"
                            alt="Picture of the recommendCartoon"
                            width={200}
                            height={280}
                            layout="responsive"
                            className="rounded-md cursor-pointer"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-7">
                        <Image
                            src="/images/Martial_Arts_Reigns.png"
                            alt="Picture of the recommendCartoon"
                            width={200}
                            height={280}
                            layout="responsive"
                            className="rounded-md cursor-pointer"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-7">
                        <Image
                            src="/images/Banished_Disciples_Counterattack_1.jpg"
                            alt="Picture of the recommendCartoon"
                            width={200}
                            height={280}
                            layout="responsive"
                            className="rounded-md cursor-pointer"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-7">
                        <Image
                            src="/images/Against_The_Gods_1.PNG"
                            alt="Picture of the recommendCartoon"
                            width={200}
                            height={280}
                            layout="responsive"
                            className="rounded-md cursor-pointer"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-7">
                        <Image
                            src="/images/Yuan_Zun_1.png"
                            alt="Picture of the recommendCartoon"
                            width={200}
                            height={280}
                            layout="responsive"
                            className="rounded-md cursor-pointer"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-7">
                        <Image
                            src="/images/Spirit_Sword_Sovereign_1.jpg"
                            alt="Picture of the recommendCartoon"
                            width={200}
                            height={280}
                            layout="responsive"
                            className="rounded-md cursor-pointer"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

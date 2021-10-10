import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';

export default function Recommend() {
    return (
        <div className="py-4 xl:py-6">
            <div className="mb-4">
                <div className="text-2xl md:text-3xl text-white">เรื่องแนะนำ</div>
            </div>

            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
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
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <Image
                        src="/images/recommend-1.PNG"
                        alt="Picture of the recommend"
                        width={500}
                        height={250}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/recommend-2.PNG"
                        alt="Picture of the recommend"
                        width={500}
                        height={250}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/recommend-3.PNG"
                        alt="Picture of the recommend"
                        width={500}
                        height={250}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/recommend-4.PNG"
                        alt="Picture of the recommend"
                        width={500}
                        height={250}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

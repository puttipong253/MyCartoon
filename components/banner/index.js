import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
export default function Banner() {
    return (
        <div className="py-2 xl:py-5">
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
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                }}
            >
                <SwiperSlide>
                    <Image
                        src="/images/banner-1.PNG"
                        alt="Picture of the banner"
                        width={650}
                        height={300}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/banner-2.PNG"
                        alt="Picture of the banner"
                        width={650}
                        height={300}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/banner-3.PNG"
                        alt="Picture of the banner"
                        width={650}
                        height={300}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/banner-4.PNG"
                        alt="Picture of the banner"
                        width={650}
                        height={300}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

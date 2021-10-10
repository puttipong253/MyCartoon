import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
export default function Banner() {
    return (
        <div className="py-5">
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide>
                    <Image
                        src="/images/banner-1.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={270}
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/banner-2.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={270}
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/banner-3.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={270}
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/banner-4.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={270}
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

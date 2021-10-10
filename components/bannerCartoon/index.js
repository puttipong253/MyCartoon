import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
export default function BannerCartoon() {
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
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
            >
                <SwiperSlide>
                    <Image
                        src="/images/bannerCartoon-1.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={280}
                        className="rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/bannerCartoon-1.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={280}
                        className="rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/bannerCartoon-1.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={280}
                        className="rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/bannerCartoon-1.PNG"
                        alt="Picture of the banner"
                        width={550}
                        height={280}
                        className="rounded-md"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

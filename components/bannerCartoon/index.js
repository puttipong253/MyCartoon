import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
export default function BannerCartoon() {
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
                        src="/images/bannerCartoon-1.PNG"
                        alt="Picture of the bannerCartoon"
                        width={650}
                        height={300}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/bannerCartoon-2.PNG"
                        alt="Picture of the bannerCartoon"
                        width={650}
                        height={300}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/bannerCartoon-3.PNG"
                        alt="Picture of the bannerCartoon"
                        width={650}
                        height={300}
                        layout="responsive"
                        className="rounded-md cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/bannerCartoon-4.PNG"
                        alt="Picture of the bannerCartoon"
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

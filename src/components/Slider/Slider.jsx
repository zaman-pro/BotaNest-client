import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Slider = ({ title }) => {
  return (
    <div className="">
      <h2 className="text-sm font-semibold mb-2 md:mb-4 text-accent/80">
        {title}
      </h2>

      <Swiper
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1536: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper customSwiper"
      >
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyoj.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyoC.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyo0.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyoj.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyoC.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyo0.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyoj.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyoC.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s14.gifyu.com/images/bsyo0.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import PlantCard from "../PlantCard/PlantCard";

const Slider = ({ title, plants }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">
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
        loop={plants.length >= 6}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper customSwiper"
      >
        {plants.map((plant) => (
          <SwiperSlide key={plant._id}>
            <PlantCard key={plant._id} plant={plant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

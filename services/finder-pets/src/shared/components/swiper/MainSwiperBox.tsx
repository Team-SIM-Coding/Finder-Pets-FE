import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

import SwiperCore from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MainItemBox from "@/components/home/MainItemBox";
import { LostPets } from "@/shared/types/pet";

interface Props {
  items: LostPets[];
}

const MainSwiperBox = ({ items }: Props) => {
  SwiperCore.use([Navigation, Scrollbar]);

  return (
    <article>
      <Swiper
        spaceBetween={8}
        loop={true}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <MainItemBox item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default MainSwiperBox;

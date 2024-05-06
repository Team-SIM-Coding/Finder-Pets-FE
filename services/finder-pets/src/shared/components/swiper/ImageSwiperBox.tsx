import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

import { PetImage } from "@/shared/types/pet";
import SwiperCore from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageBox from "./ImageBox";

interface Props {
  images: PetImage[];
}

const ImageSwiperBox = ({ images }: Props) => {
  SwiperCore.use([Navigation, Scrollbar]);

  return (
    <article>
      {/* <Spacing height="12px" /> */}
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
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageBox image={image} width={320} height={214} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default ImageSwiperBox;

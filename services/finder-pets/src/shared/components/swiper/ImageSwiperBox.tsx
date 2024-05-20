import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

import SwiperCore from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ImageBox from "@/shared/components/swiper/ImageBox";

import { Image } from "@/models/image";

interface Props {
  images: Image[] | undefined;
  width: number;
  height: number;
}

const ImageSwiperBox = ({ images, width, height }: Props) => {
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
            <ImageBox image={image} width={width} height={height} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default ImageSwiperBox;

import * as s from "./Swiper.css";

import { PetImage } from "@/shared/types/pet";
import Image from "next/image";

interface Props {
  image: PetImage;
  width: number;
  height: number;
}

const ImageBox = ({ image, width, height }: Props) => {
  return (
    <div className={s.imageWrap}>
      <Image
        key={image.image_id}
        src={image.image_url}
        alt="반려동물 이미지"
        width={width}
        height={height}
        className={s.imageStyle}
      />
    </div>
  );
};

export default ImageBox;

import * as s from "./Swiper.css";

import { Image as ImageType } from "@/models/image";
import Image from "next/image";

interface Props {
  image: ImageType;
  width: number;
  height: number;
}

const ImageBox = ({ image, width, height }: Props) => {
  return (
    <div className={s.imageWrap}>
      <Image
        key={image.img_id}
        src={image.url}
        alt="반려동물 이미지"
        width={width}
        height={height}
        className={s.imageStyle}
      />
    </div>
  );
};

export default ImageBox;

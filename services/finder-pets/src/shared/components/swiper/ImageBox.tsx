import { PetImage } from "@/shared/types/pet";
import Image from "next/image";

interface Props {
  image: PetImage;
}

const ImageBox = ({ image }: Props) => {
  return (
    <div>
      <Image
        key={image.image_id}
        src={image.image_url}
        alt="반려동물 이미지"
        width={320}
        height={400}
      />
    </div>
  );
};

export default ImageBox;

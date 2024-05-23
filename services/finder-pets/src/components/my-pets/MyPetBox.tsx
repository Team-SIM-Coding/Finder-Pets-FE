import * as s from "./MyPetStyle.css";

import { GridItem, Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import HighLightTag from "@/components/list/HighLightTag";

import { MyPet } from "@/models/pet";

import Link from "next/link";
import Image from "next/image";

interface Props {
  pet: MyPet;
}

const MyPetBox = ({ pet }: Props) => {
  return (
    <GridItem>
      <Spacing margin="12px" />
      <Flex direction="column" justify="center" align="center">
        <label>{pet.name}</label>
        <Spacing margin="12px" />
        <Link href={`/my-menu/my-pets/${pet.my_pet_id}`} className={s.myPetBoxLinkStyle}>
          <Image
            key={pet.pet_image.img_id}
            src={pet.pet_image.url}
            alt="반려동물 이미지"
            width={160}
            height={160}
            className={s.myPetBoxImageStyle}
          />
        </Link>
        <Spacing margin="12px" />
        <Flex>
          <HighLightTag text={pet.animal} color="#FDD78D" width="56px" />
          <HighLightTag text={pet.kind} color="#7C80E4" width="56px" />
          <HighLightTag text={pet.gender === "M" ? "수컷" : "암컷"} color="#F18FE2" width="56px" />
        </Flex>
        <Spacing margin="12px" />
      </Flex>
    </GridItem>
  );
};

export default MyPetBox;

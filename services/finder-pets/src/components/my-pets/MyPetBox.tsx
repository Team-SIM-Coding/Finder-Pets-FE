import * as s from "./MyPetStyle.css";

import { GridItem } from "@design-system/react-components-layout";

import Image from "next/image";

import { LostPets } from "@/shared/types/pet";
import { Flex } from "@design-system/react-components-layout";
import HighLightTag from "../list/HighLightTag";
import Spacing from "@/shared/components/Spacing";

interface Props {
  pet: LostPets;
}

const MyPetBox = ({ pet }: Props) => {
  return (
    <GridItem>
      <Spacing height="12px" />
      <Flex direction="column" justify="center" align="center">
        <label>반려동물 이름</label>
        <Spacing height="12px" />
        <Image
          key={pet.images[0].image_id}
          src={pet.images[0].image_url}
          alt="반려동물 이미지"
          width={160}
          height={160}
          className={s.myPetBoxImageStyle}
        />
        <Spacing height="12px" />
        <Flex>
          <HighLightTag text={pet.animal} color="#FDD78D" width="56px" />
          <HighLightTag text={pet.kind} color="#7C80E4" width="56px" />
          <HighLightTag text={pet.gender} color="#F18FE2" width="56px" />
        </Flex>
        <Spacing height="12px" />
      </Flex>
    </GridItem>
  );
};

export default MyPetBox;

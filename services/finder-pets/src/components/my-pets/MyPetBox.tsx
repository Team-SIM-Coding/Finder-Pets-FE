import * as s from "./MyPetStyle.css";

import { GridItem } from "@design-system/react-components-layout";

import Image from "next/image";

import { Flex } from "@design-system/react-components-layout";
import HighLightTag from "../list/HighLightTag";
import Spacing from "@/shared/components/Spacing";
import { MyPet } from "@/models/pet";

interface Props {
  pet: MyPet;
}

const MyPetBox = ({ pet }: Props) => {
  return (
    <GridItem>
      <Spacing height="12px" />
      <Flex direction="column" justify="center" align="center">
        <label>{pet.name}</label>
        <Spacing height="12px" />
        <Image
          key={pet.profile_image}
          src={pet.profile_image}
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

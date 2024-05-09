import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Image from "next/image";
import ListInfoBox from "./ListInfoBox";
import { LostPet } from "@/models/lost";
import { SightedPet } from "@/models/sighted";
import { Review } from "@/models/review";
import { PetStory } from "@/models/pet-story";

interface Props {
  list_info: LostPet | SightedPet | Review | PetStory;
}

const ListBox = ({ list_info }: Props) => {
  return (
    <article className={s.listBoxWrap}>
      <Flex>
        <Image
          src="/images/pet1.jpeg"
          alt="반려동물 이미지"
          width={100}
          height={100}
          className={s.listBoxImage}
        />
        <ListInfoBox info={list_info} />
      </Flex>
    </article>
  );
};

export default ListBox;

"use client";
import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Image from "next/image";
import ListInfoBox from "./ListInfoBox";
import { LostPet } from "@/models/lost";
import { SightedPet } from "@/models/sighted";
import { Review } from "@/models/review";
import { PetStory } from "@/models/pet-story";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  list_info: LostPet | SightedPet | Review | PetStory;
}

const ListBox = ({ list_info }: Props) => {
  const path = usePathname();

  let id;
  if ("lost_pet_id" in list_info) {
    id = list_info.lost_pet_id;
  } else if ("sighted_pet_id" in list_info) {
    id = list_info.sighted_pet_id;
  } else if ("review_id" in list_info) {
    id = list_info.review_id;
  } else if ("pet_story_id" in list_info) {
    id = list_info.pet_story_id;
  }

  return (
    <Link href={`${path}/${id}`} className={s.linkStyle}>
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
    </Link>
  );
};

export default ListBox;

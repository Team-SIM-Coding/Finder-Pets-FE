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
import { ShelterPet } from "@/models/shelter";

interface Props {
  list_info: LostPet | SightedPet | Review | PetStory | ShelterPet;
}

const defaultImageUrl = "/images/pet1.jpeg";

const ListBox = ({ list_info }: Props) => {
  const path = usePathname();

  let id;

  if (list_info) {
    if ("lost_pet_id" in list_info) {
      id = list_info.lost_pet_id;
    } else if ("sighted_pet_id" in list_info) {
      id = list_info.sighted_pet_id;
    } else if ("review_id" in list_info) {
      id = list_info.review_id;
    } else if ("pet_story_id" in list_info) {
      id = list_info.pet_story_id;
    } else if ("desertionNo" in list_info) {
      id = list_info.desertionNo;
    }
  }

  const image_url = (list_info && "filename" in list_info && list_info.filename) || defaultImageUrl;

  console.log(image_url);

  return (
    <Link href={`${path}/${id}`} className={s.linkStyle}>
      <article className={s.listBoxWrap}>
        <Flex>
          <div className={s.listBoxImageContainer}>
            <Image
              src={image_url === "http://www.animal.go.kr/" ? defaultImageUrl : image_url}
              alt="반려동물 이미지"
              width={100}
              height={100}
              className={s.listBoxImage}
            />
          </div>
          <ListInfoBox info={list_info} />
        </Flex>
      </article>
    </Link>
  );
};

export default ListBox;

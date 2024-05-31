"use client";
import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

import ListInfoBox from "@/components/list/ListInfoBox";

import { Board } from "@/models/board";
import { FinderPet } from "@/models/finder";
import { ShelterPet } from "@/models/shelter";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  list_info: FinderPet | Board | ShelterPet;
}

const defaultImageUrl = "/images/pet1.jpeg";

const ListBox = ({ list_info }: Props) => {
  const path = usePathname();

  let id;

  if (list_info) {
    if ("pet_id" in list_info) {
      id = list_info.pet_id;
    } else if ("board_id" in list_info) {
      id = list_info.board_id;
    } else if ("desertionNo" in list_info) {
      id = list_info.desertionNo;
    }
  }

  const image_url = (list_info && "filename" in list_info && list_info.filename) || defaultImageUrl;

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

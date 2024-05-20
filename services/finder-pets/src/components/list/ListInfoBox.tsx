"use client";
import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

import HighLightTag from "@/components/list/HighLightTag";
import ListInfoDescription from "@/components/list/ListInfoDescription";

import { Board } from "@/models/board";
import { FinderPet } from "@/models/finder";
import { ShelterPet } from "@/models/shelter";

import { formatDate } from "@/utils/format/formatDate";
import { trimText } from "@/utils/trimText";

import { usePathname } from "next/navigation";

type PetInfo = FinderPet | ShelterPet;

interface Props {
  info: PetInfo | Board;
}

const hasPetInfo = (info: PetInfo): info is PetInfo => {
  return "place" in info || "animal" in info || "kind" in info || "gender" in info;
};

const COMMUNITY_PATHS = ["/community/reunion-reviews", "/community/pet-stories"];

const normalizeShelterPetData = (pet: ShelterPet): PetInfo => {
  return {
    area: `${pet.orgNm} ${pet.happenPlace}`,
    animal: pet.kindCd.match(/\[(.*?)\]/)?.[1] ?? pet.kindCd,
    kind: pet.kindCd.replace(/^\[.*?\]\s*/, ""),
    gender: pet.sexCd,
    description: pet.specialMark || "",
    created_at: pet.noticeSdt,
    weight: pet.weight || "",
  };
};

const ListInfoBox = ({ info }: Props) => {
  const path = usePathname();

  const petInfo = (info as ShelterPet)?.careAddr
    ? normalizeShelterPetData(info as ShelterPet)
    : info;

  if (!info) {
    return (
      <div className={s.listInfoBoxWrap}>
        <p>No information available</p>
      </div>
    );
  }

  return (
    <div className={s.listInfoBoxWrap}>
      <Flex justify="space-around">
        {hasPetInfo(petInfo) && (
          <>
            <HighLightTag text={trimText(petInfo.area, 4)} color="#FDD78D" />
            <HighLightTag text={petInfo.animal} color="#7C80E4" />
            <HighLightTag text={trimText(petInfo.kind, 5)} color="#F18FE2" />
          </>
        )}
        {!COMMUNITY_PATHS.includes(path) && hasPetInfo(petInfo) && (
          <HighLightTag text={petInfo.gender === "M" ? "수컷" : "암컷"} color="#52FF00" />
        )}
      </Flex>
      {!COMMUNITY_PATHS.includes(path) && (
        <div className={s.infoDescriptionWrap}>
          {hasPetInfo(petInfo) && (
            <>
              <ListInfoDescription label="체중" text={`${petInfo.weight} Kg`} />
              <ListInfoDescription label="특징" text={petInfo.description} />
              <ListInfoDescription label="구조장소" text={petInfo.area} />
              <ListInfoDescription label="공고기간" text={formatDate(petInfo.created_at)} />
            </>
          )}
        </div>
      )}
      {COMMUNITY_PATHS.includes(path) && (
        <p className={s.infoDescription}>{trimText(petInfo.description, 100)}</p>
      )}
    </div>
  );
};

export default ListInfoBox;

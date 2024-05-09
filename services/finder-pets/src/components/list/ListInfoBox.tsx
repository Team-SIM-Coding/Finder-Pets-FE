import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

import HighLightTag from "./HighLightTag";
import ListInfoDescription from "./ListInfoDescription";
import { LostPet } from "@/models/lost";
import { SightedPet } from "@/models/sighted";
import { Review } from "@/models/review";
import { PetStory } from "@/models/pet-story";
import { trimText } from "@/utils/trimText";

type PetInfo = LostPet | SightedPet;
type CommunityInfo = Review | PetStory;

interface Props {
  info: PetInfo | CommunityInfo;
}

const hasPetInfo = (info: PetInfo): info is PetInfo => {
  return "place" in info || "animal" in info || "kind" in info || "gender" in info;
};

const ListInfoBox = ({ info }: Props) => {
  if (!info) {
    return (
      <div className={s.listInfoBoxWrap}>
        <p></p>
      </div>
    );
  }

  return (
    <div className={s.listInfoBoxWrap}>
      <Flex justify="space-around">
        {hasPetInfo(info) && <HighLightTag text={trimText(info.place, 4)} color="#FDD78D" />}
        {hasPetInfo(info) && <HighLightTag text={info.animal} color="#7C80E4" />}
        {hasPetInfo(info) && <HighLightTag text={info.kind} color="#F18FE2" />}
        {hasPetInfo(info) && <HighLightTag text={info.gender} color="#52FF00" />}
      </Flex>
      <div className={s.infoDescriptionWrap}>
        {hasPetInfo(info) && <ListInfoDescription label="체중" text={`${info.weight}Kg`} />}
        {hasPetInfo(info) && <ListInfoDescription label="특징" text={info.description} />}
        {hasPetInfo(info) && <ListInfoDescription label="구조장소" text={info.place} />}
        {hasPetInfo(info) && <ListInfoDescription label="공고기간" text={info.created_at} />}
      </div>
    </div>
  );
};

export default ListInfoBox;

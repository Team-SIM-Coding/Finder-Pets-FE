import * as cs from "@/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import DetailDescriptionTextField from "@/shared/components/detail/DetailDescriptionTextField";
import KakaoMap from "@/shared/components/kakao-map/KakaoMap";

import { ShelterPet } from "@/models/shelter";

interface Props {
  pet_info: ShelterPet;
}

const ShelterDetailDescription = ({ pet_info }: Props) => {
  return (
    <article className={cs.detailSectionStyle}>
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="발견장소" text={pet_info.orgNm} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="보호장소" text={pet_info.careAddr} />
      <Spacing margin="12px" />
      <Divider size={6} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="특징" text={pet_info.specialMark} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="색상" text={pet_info.colorCd} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="품종" text={pet_info.kindCd} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="체중" text={pet_info.weight} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="성별" text={pet_info.sexCd === "M" ? "수컷" : "암컷"} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="나이 " text={pet_info.age} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="보호소전화번호" text={pet_info.careTel} />
      <Spacing margin="12px" />
      <Divider size={6} />
      <Spacing margin="12px" />
      <DetailDescriptionTextField label="발견장소" />
      <Spacing margin="12px" />
      <KakaoMap address={pet_info.careAddr} />
    </article>
  );
};

export default ShelterDetailDescription;

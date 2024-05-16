import * as cs from "@/shared/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import { ShelterPet } from "@/models/shelter";
import Spacing from "@/shared/components/Spacing";
import DetailDescriptionTextField from "@/shared/components/detail/DetailDescriptionTextField";
import KakaoMap from "@/shared/components/kakao-map/KakaoMap";
import { trimText } from "@/utils/trimText";

interface Props {
  pet_info: ShelterPet;
}

const ShelterDetailDescription = ({ pet_info }: Props) => {
  return (
    <article className={cs.detailSectionStyle}>
      <Spacing height="12px" />
      <DetailDescriptionTextField label="발견장소" text={pet_info.orgNm} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="보호장소" text={pet_info.careAddr} />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="특징" text={trimText(pet_info.specialMark)} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="색상" text={pet_info.colorCd} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="품종" text={pet_info.kindCd} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="체중" text={pet_info.weight} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="성별" text={pet_info.sexCd === "M" ? "수컷" : "암컷"} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="나이 " text={pet_info.age} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="보호소전화번호" text={pet_info.careTel} />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="발견장소" />
      <Spacing height="12px" />
      <KakaoMap address={pet_info.careAddr} />
    </article>
  );
};

export default ShelterDetailDescription;

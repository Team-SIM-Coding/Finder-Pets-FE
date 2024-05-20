import * as cs from "@/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import DetailDescriptionTextBox from "@/shared/components/detail/DetailDescriptionTextBox";
import DetailDescriptionTextField from "@/shared/components/detail/DetailDescriptionTextField";
import KakaoMap from "@/shared/components/kakao-map/KakaoMap";

import { FinderPet } from "@/models/finder";

import { trimText } from "@/utils/trimText";

interface Props {
  info: FinderPet | undefined;
}

const LostDetailDescription = ({ info }: Props) => {
  const mapAddress = info?.area as string;

  return (
    <article className={cs.detailSectionStyle}>
      <Spacing height="12px" />
      <DetailDescriptionTextField label="실종장소" text={info?.area} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="실종일" text={info?.date} />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="특징" text={trimText(info?.character)} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="색상" text={info?.color} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="품종" text={info?.kind} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="체중" text={`${info?.weight} Kg`} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="성별" text={info?.gender === "M" ? "수컷" : "암컷"} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="나이 " text={info?.age} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="연락처" text={info?.phone} />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="상세설명" />
      <Spacing height="12px" />
      <DetailDescriptionTextBox text={info?.description} />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="24px" />
      <DetailDescriptionTextField label="실종장소" />
      <Spacing height="24px" />
      <KakaoMap address={mapAddress} />
      <Spacing height="24px" />
      <Divider size={6} />
      <Spacing height="12px" />
    </article>
  );
};

export default LostDetailDescription;

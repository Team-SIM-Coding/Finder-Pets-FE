import * as cs from "@/shared/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import DetailDescriptionTextField from "@/shared/components/detail/DetailDescriptionTextField";
import { trimText } from "@/utils/trimText";
import MapImage from "@/shared/components/detail/MapImage";

const ShelterDetailDescription = () => {
  return (
    <article className={cs.detailSectionStyle}>
      <Spacing height="12px" />
      <DetailDescriptionTextField label="발견장소" text="공주시 우금리터널" />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="보호장소" text="충청남도 공주시" />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextField
        label="특징"
        text={trimText("파란색목줄착용, 겁이많음,진드기, 털엉킴, 치석")}
      />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="색상" text="갈색" />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="품종" text="믹스견" />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="체중" text="3Kg" />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="성별" text="수컷" />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="나이 " text="1년 미만" />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="보호소전화번호" text="010-0000-0001" />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="발견장소" />
      <Spacing height="12px" />
      <MapImage url="/images/map.jpg" />
    </article>
  );
};

export default ShelterDetailDescription;

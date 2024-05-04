import * as cs from "@/shared/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import DetailDescriptionTextBox from "@/shared/components/detail/DetailDescriptionTextBox";
import DetailDescriptionTextField from "@/shared/components/detail/DetailDescriptionTextField";
import MapImage from "@/shared/components/detail/MapImage";
import { trimText } from "@/utils/trimText";

const SightedDetailDescription = () => {
  return (
    <article className={cs.detailSectionStyle}>
      <Spacing height="12px" />
      <DetailDescriptionTextField label="발견장소" text="공주시 우금리터널" />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="발견일" text="2024.04.13" />
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
      <DetailDescriptionTextField label="연락처" text="010-0000-0001" />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextField label="상세설명" />
      <Spacing height="12px" />
      <DetailDescriptionTextBox text="공주시 우금리 터널에서 2024.04.13일 20시 경 즈음에 혼자 돌아다니는 걸 발견했어요" />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="24px" />
      <DetailDescriptionTextField label="발견장소" />
      <Spacing height="24px" />
      <MapImage url="/images/map.jpg" />
      <Spacing height="24px" />
      <Divider size={6} />
      <Spacing height="12px" />
    </article>
  );
};

export default SightedDetailDescription;

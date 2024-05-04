import * as cs from "@/shared/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import DetailSubHeader from "@/shared/components/detail/DetailSubHeader";
import DetailDescriptionTextBox from "@/shared/components/detail/DetailDescriptionTextBox";

const PetStoriesDetailDescription = () => {
  return (
    <article className={cs.detailSectionStyle}>
      <Spacing height="12px" />
      <DetailSubHeader text="제작년에 입양한 쿠키 어제 강아지별로 갔어요" />
      <Spacing height="24px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextBox text="마음이 아픕니다. 우리 집에 와서 있는 동안 하루  두 세 번 꼭 산책시켜주고 밥 먹여주고 같이놀고 24시간 붙어있던 아이 입니다. 어제 갑자기 실신해서 병원에 데려갔는데.." />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
    </article>
  );
};

export default PetStoriesDetailDescription;

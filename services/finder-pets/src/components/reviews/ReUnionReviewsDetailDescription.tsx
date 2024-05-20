import * as cs from "@/shared/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import DetailSubHeader from "@/shared/components/detail/DetailSubHeader";
import DetailDescriptionTextBox from "@/shared/components/detail/DetailDescriptionTextBox";
import { Board } from "@/models/board";

interface Props {
  info: Board | undefined;
}

const ReUnionReviewsDetailDescription = ({ info }: Props) => {
  return (
    <article className={cs.detailSectionStyle}>
      <Spacing height="12px" />
      <DetailSubHeader text={info?.title} />
      <Spacing height="24px" />
      <Divider size={6} />
      <Spacing height="12px" />
      <DetailDescriptionTextBox text={info?.description} />
      <Spacing height="12px" />
      <Divider size={6} />
      <Spacing height="12px" />
    </article>
  );
};

export default ReUnionReviewsDetailDescription;

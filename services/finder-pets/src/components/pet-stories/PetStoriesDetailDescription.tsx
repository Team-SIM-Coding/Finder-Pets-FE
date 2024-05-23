import * as cs from "@/styles/common.css";

import { Divider } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import DetailDescriptionTextBox from "@/shared/components/detail/DetailDescriptionTextBox";
import DetailSubHeader from "@/shared/components/detail/DetailSubHeader";

import { Board } from "@/models/board";

interface Props {
  info: Board | undefined;
}

const PetStoriesDetailDescription = ({ info }: Props) => {
  return (
    <article className={cs.detailSectionStyle}>
      <Spacing margin="12px" />
      <DetailSubHeader text={info?.title} />
      <Spacing margin="24px" />
      <Divider size={6} />
      <Spacing margin="12px" />
      <DetailDescriptionTextBox text={info?.description} />
      <Spacing margin="12px" />
      <Divider size={6} />
      <Spacing margin="12px" />
    </article>
  );
};

export default PetStoriesDetailDescription;

import * as s from "./DetailStyle.css";

import { Flex } from "@design-system/react-components-layout";

interface Props {
  label: string;
  text?: string;
}

const DetailDescriptionTextField = ({ label, text }: Props) => {
  return (
    <Flex justify="space-between">
      <label className={s.detailDescriptionLabel}>{label}</label>
      <p className={s.detailDescriptionText}>{text}</p>
    </Flex>
  );
};

export default DetailDescriptionTextField;

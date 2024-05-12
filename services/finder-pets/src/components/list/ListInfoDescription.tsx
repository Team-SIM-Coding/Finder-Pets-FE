import { trimText } from "@/utils/trimText";
import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

interface Props {
  label: string;
  text: string | undefined;
}

const ListInfoDescription = ({ label, text }: Props) => {
  return (
    <Flex className={s.infoDescriptionBox}>
      <label className={s.infoDescriptionLabel}>{label}</label>
      <p className={s.infoDescriptionText}>{trimText(text)}</p>
    </Flex>
  );
};

export default ListInfoDescription;

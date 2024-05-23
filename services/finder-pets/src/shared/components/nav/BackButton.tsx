import * as s from "./NavBarStyle.css";
import { IoIosArrowBack } from "react-icons/io";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

interface Props {
  button_name: string;
}

const BackButton = ({ button_name }: Props) => {
  return (
    <Flex align="center">
      <IoIosArrowBack className={s.backButtonIcon} />
      <Button className={s.backButtonStyle}>{button_name}</Button>
    </Flex>
  );
};

export default BackButton;

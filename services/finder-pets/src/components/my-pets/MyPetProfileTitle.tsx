import * as s from "./MyPetStyle.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

interface Props {
  name: string;
}

const MyPetProfileTitle = ({ name = "반려동물" }: Props) => {
  return (
    <Flex align="center" justify="space-between" className={s.myPetProfileTitleWrap}>
      <h1>{name}의 프로필</h1>
      <Button className={s.myPetProfileDeleteButton}>삭제</Button>
    </Flex>
  );
};

export default MyPetProfileTitle;

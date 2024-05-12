import * as s from "./MyPetStyle.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

interface Props {
  id: string;
  name: string;
}

const MyPetProfileTitle = ({ id, name = "반려동물" }: Props) => {
  const handleDeleteMyPet = async (id: string) => {
    const response = await fetch(`/api/my-pets/delete/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const data = await response.json();
      console.log("나의 반려동물 프로필 삭제 완료 : ", data);
    } else {
      const data = await response.json();
      console.log("나의 반려동물 프로필 삭제 실패 : ", data);
    }
  };

  return (
    <Flex align="center" justify="space-between" className={s.myPetProfileTitleWrap}>
      <h1>{name}의 프로필</h1>
      <Button className={s.myPetProfileDeleteButton} onClick={() => handleDeleteMyPet(id)}>
        삭제
      </Button>
    </Flex>
  );
};

export default MyPetProfileTitle;

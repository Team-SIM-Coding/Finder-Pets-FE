import * as s from "./MyPetStyle.css";
import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

import useAlertContext from "@/hooks/useAlertContext";

import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
}

const MyPetProfileTitle = ({ id, name = "반려동물" }: Props) => {
  const { open, close } = useAlertContext();
  const router = useRouter();

  const handleOpenDeletePopUp = () => {
    open({
      width: "300px",
      height: "200px",
      title: "나의 반려 동물 삭제",
      main: <AlertMainTextBox text="나의 반려동물 프로필을 삭제하시겠습니까?" />,
      leftButtonLabel: "취소",
      leftButtonStyle: cs.whiteButton,
      rightButtonStyle: cs.defaultButton,
      onLeftButtonClick: () => {
        close();
      },
      onRightButtonClick: () => {
        handleDeleteMyPet(id);
        close();
      },
      onBackDropClick: () => {
        close();
      },
    });
  };

  const handleDeleteMyPet = async (id: string) => {
    const response = await fetch(`/api/my-pets/delete/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "200px",
        title: "나의 반려 동물 삭제",
        main: <AlertMainTextBox text={`나의 반려 동물 삭제가 완료되었습니다.`} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push("/my-menu/my-pets");
          close();
        },
      });
    } else {
      const data = await response.json();
    }
  };

  return (
    <Flex align="center" justify="space-between" className={s.myPetProfileTitleWrap}>
      <h1>{name}의 프로필</h1>
      <Button className={s.myPetProfileDeleteButton} onClick={handleOpenDeletePopUp}>
        삭제
      </Button>
    </Flex>
  );
};

export default MyPetProfileTitle;

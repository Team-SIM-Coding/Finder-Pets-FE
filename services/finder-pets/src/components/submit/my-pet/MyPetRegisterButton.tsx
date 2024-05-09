"use client";
import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";

import { Button } from "@design-system/react-components-button";

const TEST_MY_PET = {
  pet_id: "1",
  name: "도베만",
  animal: "개",
  kind: "도베르만",
  gender: "수컷",
  weight: 3,
  color: "검정",
  age: 5,
  character: "사나워서 조심해야 되요",
};

const MyPetRegisterButton = () => {
  const handleRegisterMyPet = async () => {
    const response = await fetch("/api/my-pet/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_MY_PET),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("나의 반려동물 등록 성공:", data);
    } else {
      const data = await response.json();
      console.log("나의 반려동물 등록 실패:", data);
    }
  };

  return (
    <>
      <Button className={cs.defaultButton} onClick={handleRegisterMyPet}>
        등록하기
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default MyPetRegisterButton;

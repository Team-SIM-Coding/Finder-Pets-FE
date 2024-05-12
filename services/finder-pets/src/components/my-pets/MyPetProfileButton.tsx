"use client";
import Spacing from "@/shared/components/Spacing";
import * as cs from "@/shared/styles/common.css";

import { Button } from "@design-system/react-components-button";

const TEST_MY_PET = {
  name: "도베만만",
  animal: "개",
  kind: "도베르만",
  gender: "수컷",
  weight: 3,
  color: "검정",
  age: 7,
  profile_image: "/images/pet2.jpeg",
  intro: "사나워서 조심해야 되요",
  birth: "2023.01.01",
  adoption: "2024.04.03",
  is_neutering: true,
  is_adoption: false,
};

const MyPetProfileButton = () => {
  const handleMyPetUpdate = async (id: string) => {
    const response = await fetch(`/api/my-pets/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_MY_PET),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("나의 반려동물 수정 완료 : ", data);
    } else {
      const data = await response.json();
      console.log("나의 반려동물 수정 실패 : ", data);
    }
  };

  return (
    <>
      <Button className={cs.defaultButton} onClick={() => handleMyPetUpdate("1")}>
        저장
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default MyPetProfileButton;

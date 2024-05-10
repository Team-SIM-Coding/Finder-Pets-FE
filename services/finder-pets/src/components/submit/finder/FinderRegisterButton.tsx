"use client";
import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";

import { Button } from "@design-system/react-components-button";

const TEST_PET = {
  sighted_pet_id: "6",
  date: "2024.04.03",
  place: "충남시 우금리 터널",
  created_at: "2024.04.04",
  like_count: 3,
  pet_id: "1",
  animal: "개",
  kind: "도베르만",
  gender: "수컷",
  weight: 10,
  color: "검정",
  age: 7,
  character: "사나워서 걱정이에요",
  phone: "010-0000-0001",
  description: "우금리 터널에서 갑자기 한 눈 팔을 사이에 잃어버렸어요..",
  images: ["/images/pet1.jpeg", "/images/pet2.jpeg", "/images/pet3.jpeg"],
  comments: [],
};

const FinderRegisterButton = () => {
  const handleRegisterSightedPet = async () => {
    const response = await fetch("/api/sighted/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_PET),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("목격 동물 등록 완료 : ", data);
    } else {
      const data = await response.json();
      console.log("목격 동물 등록 실패 : ", data);
    }
  };

  return (
    <>
      <Button className={cs.defaultButton} onClick={handleRegisterSightedPet}>
        등록하기
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default FinderRegisterButton;

"use client";
import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";
import { Button } from "@design-system/react-components-button";

const TEST_COMMUNITY = {
  pet_story_id: "4",
  title: "재작년에 입양한 쿠키, 어제 강아지별로 갔어요",
  description:
    "마음이 아픕니다. 우리 집에 와서 있는 동안 하루  두 세번 꼭 산책시켜주고 밥 먹여주고 같이놀고 24시간 붙어있던 아이 입니다. 어제 갑자기 실신해서 병원에 데려갔는데..",
  place: "안산",
  animal: "개",
  kind: "치와와",
  images: ["/images/pet1.jpeg", "/images/pet2.jpeg", "/images/pet3.jpeg"],
  comments: [],
};

const CommunityRegisterButton = () => {
  const handleRegisterCommunity = async () => {
    const response = await fetch("/api/pet-story/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_COMMUNITY),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("반려 이야기 등록 완료 : ", data);
    } else {
      const data = await response.json();
      console.log("반려 이야기 등록 실패 : ", data);
    }
  };

  return (
    <>
      <Button className={cs.defaultButton} onClick={handleRegisterCommunity}>
        등록하기
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default CommunityRegisterButton;

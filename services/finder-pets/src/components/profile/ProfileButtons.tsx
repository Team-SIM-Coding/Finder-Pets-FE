"use client";
import Spacing from "@/shared/components/Spacing";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import * as cs from "@/shared/styles/common.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";
import { useEffect, useState } from "react";

const TEST_USER = {
  user_id: "1",
  nickname: "데이터리터러시",
  phone: "010-0000-0002",
  like_area: "안산",
  like_animal: "개",
  like_kind: "도베르만",
  intro: "안녕하세요, 우리 다같이 유기동물들을 보호해요~",
};

const ProfileButtons = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchUserProfile = async (id: string) => {
    try {
      const response = await fetch(`/api/user?id=${id}`);

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (err) {
      setError("프로필 정보를 가져오는 중에 오류가 발생했습니다.");
    }
  };

  const handleUpdateUser = async () => {
    const response = await fetch("/api/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_USER),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("유저 프로필 변경 성공:", data);
    } else {
      const error = await response.json();
      console.error("유저 프로필 변경 실패:", error.message);
    }
  };

  console.log(user);
  console.log(error);

  useEffect(() => {
    (async () => {
      await waitForMSWActivation();
      fetchUserProfile("1");
    })();
  }, []);

  return (
    <Flex direction="column" justify="center" align="center">
      <Spacing height="12px" />
      <Button className={cs.defaultButton} onClick={handleUpdateUser}>
        저장
      </Button>
      <Button className={cs.whiteButton}>로그아웃</Button>
      <Button className={cs.whiteButton}>회원탈퇴</Button>
      <Spacing height="24px" />
    </Flex>
  );
};

export default ProfileButtons;

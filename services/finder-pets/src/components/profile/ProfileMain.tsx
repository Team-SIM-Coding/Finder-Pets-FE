"use client";
import * as es from "@/shared/components/editor/EditorStyle.css";

import { User } from "@/models/user";
import Spacing from "@/shared/components/Spacing";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProfileMain = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [userInfo, setUserInfo] = useState<User>({} as User);

  const fetchUser = async () => {
    const response = await fetch(`/api/user?id=${id}`);

    if (response.ok) {
      const data = await response.json();
      setUserInfo(data);
      console.log("유저 데이터 조회 성공", data);
    } else {
      const data = await response.json();
      console.log("유저 데이터 조회 실패", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      if (id) {
        fetchUser();
      }
    })();
  }, []);

  return (
    <div>
      <EditorImageRegisterForm />
      <EditorInputField label="닉네임" className={es.editorInputMediumStyle} />
      <Spacing height="12px" />
      <EditorInputField
        label="휴대폰"
        className={es.editorInputMediumStyle}
        value={userInfo.phone}
      />
      <Spacing height="12px" />
      <EditorSelectTab label="관심 지역" className={es.editorSelectStyle}>
        <option value="all">모든 지역</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorSelectTab label="관심 동물" className={es.editorSelectStyle}>
        <option value="all">모든 동물</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorSelectTab label="관심 품종" className={es.editorSelectStyle}>
        <option value="all">모든 품종</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorTextAreaField label="자기소개" className={es.editorTextAreaStyle} />
    </div>
  );
};

export default ProfileMain;

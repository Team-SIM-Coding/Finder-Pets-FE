"use client";
import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/shared/styles/common.css";

import useAlertContext from "@/hooks/useAlertContext";
import { User } from "@/models/user";
import Spacing from "@/shared/components/Spacing";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { ProfileFormData, profileSchema } from "@/utils/validation/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

const ProfileMain = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const { open, close } = useAlertContext();

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

  const methods = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      nickname: "",
      phone: "",
      like_area: "",
      like_animal: "",
      like_kind: "",
      intro: "",
    },
  });

  const { handleSubmit, setValue } = methods;

  const onSubmit: SubmitHandler<ProfileFormData> = async (data, event) => {
    event?.preventDefault();

    const response = await fetch("/api/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, user_id: id }),
    });

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "220px",
        title: "프로필 업데이트 실패",
        main: <AlertMainTextBox text={data.message} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
          router.push("/my-menu/profile");
        },
        onBackDropClick: () => {
          close();
        },
      });
      console.log("프로필 업데이트 성공 : ", data);
    } else {
      const error = await response.json();
      open({
        width: "300px",
        height: "220px",
        title: "프로필 업데이트 실패",
        main: <AlertMainTextBox text={error.message} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
        },
        onBackDropClick: () => {
          close();
        },
      });
      console.error("프로필 업데이트 실패:", error.message);
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

  useEffect(() => {
    if (userInfo) {
      setValue("like_area", userInfo.like_area as string);
      setValue("like_animal", userInfo.like_animal as string);
      setValue("like_kind", userInfo.like_kind as string);
    }
  }, [userInfo, setValue]);

  return (
    <FormProvider {...methods}>
      <form id="profile-form" onSubmit={handleSubmit(onSubmit)}>
        <EditorImageRegisterForm />
        <EditorInputField
          name="nickname"
          label="닉네임"
          className={es.editorInputMediumStyle}
          value={userInfo.nickname}
        />
        <Spacing height="12px" />
        <EditorInputField
          name="phone"
          label="휴대폰"
          className={es.editorInputMediumStyle}
          value={userInfo.phone}
        />
        <Spacing height="12px" />
        <EditorSelectTab name="like_area" label="관심 지역" className={es.editorSelectStyle}>
          <option value="all">모든 지역</option>
          <option value="seoul">서울</option>
          <option value="ansan">안산</option>
          <option value="suwon">수원</option>
        </EditorSelectTab>
        <Spacing height="12px" />
        <EditorSelectTab name="like_animal" label="관심 동물" className={es.editorSelectStyle}>
          <option value="all">모든 동물</option>
          <option value="dog">개</option>
          <option value="cat">고양이</option>
        </EditorSelectTab>
        <Spacing height="12px" />
        <EditorSelectTab name="like_kind" label="관심 품종" className={es.editorSelectStyle}>
          <option value="all">모든 품종</option>
          <option value="golden-retriever">골든 리트리버</option>
          <option value="siberian-husky">시베리안 허스키</option>
          <option value="maine-coon">메인 쿤</option>
          <option value="Siamese">샴 고양이</option>
        </EditorSelectTab>
        <Spacing height="12px" />
        <EditorTextAreaField
          name="intro"
          label="자기소개"
          className={es.editorTextAreaStyle}
          value={userInfo.intro}
        />
      </form>
    </FormProvider>
  );
};

export default ProfileMain;

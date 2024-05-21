"use client";
import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";

import { fetchUser } from "@/api/mocks/getUser";

import useAlertContext from "@/hooks/useAlertContext";

import { User } from "@/models/user";

import { useSuspenseQuery } from "@tanstack/react-query";

import { ProfileFormData, profileSchema } from "@/utils/validation/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const ProfileMain = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") as string;
  const router = useRouter();
  const { open, close } = useAlertContext();

  const { data } = useSuspenseQuery<User, Error>({
    queryKey: ["profile"],
    queryFn: () => fetchUser(id),
  });

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
        title: "프로필 업데이트",
        main: <AlertMainTextBox text={data.message} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
          router.push("/my-menu");
        },
        onBackDropClick: () => {
          close();
        },
      });
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
    }
  };

  useEffect(() => {
    if (data) {
      setValue("like_area", data.like_area as string);
      setValue("like_animal", data.like_animal as string);
      setValue("like_kind", data.like_kind as string);
    }
  }, [data, setValue]);

  return (
    <FormProvider {...methods}>
      <form id="profile-form" onSubmit={handleSubmit(onSubmit)}>
        <EditorImageRegisterForm />
        <EditorInputField
          name="nickname"
          label="닉네임"
          className={es.editorInputMediumStyle}
          value={data.nickname}
        />
        <Spacing height="12px" />
        <EditorInputField
          name="phone"
          label="휴대폰"
          className={es.editorInputMediumStyle}
          value={data.phone}
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
          value={data.intro}
        />
      </form>
    </FormProvider>
  );
};

export default ProfileMain;

"use client";

import * as cs from "@/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import InputField from "@/shared/components/auth/InputField";
import FindPasswordResult from "@/components/auth/FindPasswordResult";

import useAlertContext from "@/hooks/useAlertContext";

import authState from "@/recoil/authAtom";
import { useSetRecoilState } from "recoil";

import { FindPasswordFormData, findPasswordSchema } from "@/utils/validation/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const FindPasswordMain = () => {
  const [isFoundPassword, setIsFoundPassword] = useState(false);
  const setAuthStateValue = useSetRecoilState(authState);

  const router = useRouter();
  const { open, close } = useAlertContext();

  const methods = useForm<FindPasswordFormData>({
    resolver: zodResolver(findPasswordSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FindPasswordFormData> = async (data, event) => {
    event?.preventDefault();

    const response = await fetch("/api/find-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsFoundPassword(true);
      setAuthStateValue((prev) => ({ ...prev, isCompletedFindPassword: true }));
    } else {
      const error = await response.json();
      const errorStatus = response.status;
      open({
        width: "300px",
        height: "220px",
        title: "비밀번호 찾기 실패",
        main:
          errorStatus === 400 ? (
            <AlertMainTextBox text={error.message} />
          ) : (
            <AlertMainTextBox text={error.message} />
          ),
        rightButtonStyle: cs.defaultButton,
        ...(errorStatus === 404 && {
          leftButtonStyle: cs.whiteButton,
          leftButtonLabel: "취소",
          onLeftButtonClick: () => {
            close();
          },
          onRightButtonClick: () => {
            router.push("/register");
            close();
          },
        }),
        onRightButtonClick: () => {
          close();
        },
        onBackDropClick: () => {
          close();
        },
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="find-password-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="40px" />
        {!isFoundPassword && (
          <>
            <InputField<FindPasswordFormData> name="email" label="아이디" />
            <InputField<FindPasswordFormData> name="name" label="이름" />
            <InputField<FindPasswordFormData> name="phone" label="휴대폰 번호" />
          </>
        )}
        {isFoundPassword && <FindPasswordResult />}
      </form>
    </FormProvider>
  );
};

export default FindPasswordMain;

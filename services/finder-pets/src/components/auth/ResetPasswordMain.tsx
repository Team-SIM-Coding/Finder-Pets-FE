"use client";

import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import InputField from "@/shared/components/auth/InputField";
import ResetPasswordResult from "@/components/auth/ResetPasswordResult";

import useAlertContext from "@/hooks/useAlertContext";

import authState from "@/recoil/authAtom";
import { useSetRecoilState } from "recoil";

import { ResetPasswordFormData, resetPasswordSchema } from "@/utils/validation/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const ResetPasswordMain = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);
  const setAuthStateValue = useSetRecoilState(authState);

  const router = useRouter();
  const { open, close } = useAlertContext();

  const methods = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<ResetPasswordFormData> = async (data, event) => {
    event?.preventDefault();

    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      setIsResetPassword(true);
      setAuthStateValue((prev) => ({ ...prev, isCompletedResetPassword: true }));
      console.log("비밀번호 재설정 성공:", data);
    } else {
      const error = await response.json();
      const errorStatus = response.status;
      open({
        width: "300px",
        height: "220px",
        title: "비밀번호 재설정 실패",
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
      console.error("비밀번호 재설정 실패:", error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="reset-password-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="40px" />
        {!isResetPassword && (
          <>
            <InputField<ResetPasswordFormData> name="email" label="아이디" />
            <InputField<ResetPasswordFormData>
              name="password"
              label="기존 비밀번호"
              type="password"
            />
            <InputField<ResetPasswordFormData>
              name="newPassword"
              label="새로운 비밀번호"
              type="password"
            />
            <InputField<ResetPasswordFormData>
              name="confirmPassword"
              label="비밀번호 확인"
              type="password"
            />
          </>
        )}
        {isResetPassword && <ResetPasswordResult />}
      </form>
    </FormProvider>
  );
};

export default ResetPasswordMain;

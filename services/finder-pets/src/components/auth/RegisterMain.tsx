"use client";

import * as cs from "@/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import InputField from "@/shared/components/auth/InputField";

import useAlertContext from "@/hooks/useAlertContext";

import { RegisterFormData, registerSchema } from "@/utils/validation/auth";

import useRedirect from "@/hooks/useRedirect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { fetchRegister } from "@/api/auth/fetchRegister";
import { useRouter } from "next/navigation";

const RegisterMain = () => {
  const { open, close } = useAlertContext();
  const router = useRouter();

  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
    },
  });

  const { handleSubmit, watch, trigger } = methods;
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    trigger("confirmPassword");
  }, [confirmPassword, trigger]);

  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormData) => fetchRegister(data),
    onSuccess: () => {
      open({
        width: "300px",
        height: "200px",
        title: "회원가입 완료",
        main: <AlertMainTextBox text="회원가입이 완료되었습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push("/login");
          close();
        },
      });
    },
    onError: (error) => {
      open({
        width: "300px",
        height: "200px",
        title: "회원가입 실패",
        main: <AlertMainTextBox text={error.message} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
        },
      });
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data, event) => {
    event?.preventDefault();
    registerMutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing margin="40px" />
        <InputField<RegisterFormData> label="아이디" name="email" />
        <InputField<RegisterFormData> type="password" label="비밀번호" name="password" />
        <InputField<RegisterFormData>
          type="password"
          label="비밀번호 확인"
          name="confirmPassword"
        />
        <InputField<RegisterFormData> label="이름" name="name" />
        <InputField<RegisterFormData> label="휴대폰 번호" name="phone" />
        <Spacing margin="20px" />
      </form>
    </FormProvider>
  );
};

export default RegisterMain;

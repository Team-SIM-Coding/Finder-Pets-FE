"use client";
import * as cs from "@/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import InputField from "@/shared/components/auth/InputField";

import useAlertContext from "@/hooks/useAlertContext";

import authState from "@/recoil/authAtom";
import { useRecoilState } from "recoil";

import { LogInFormData, loginSchema } from "@/utils/validation/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { User } from "@/models/user";

const LogInMain = () => {
  const router = useRouter();
  const [authStateValue, setAuthStateValue] = useRecoilState(authState);

  const { open, close } = useAlertContext();

  const methods = useForm<LogInFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<LogInFormData> = async (data, event) => {
    event?.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      setAuthStateValue((prev) => ({ ...prev, isLoggedIn: true, userId: data.user_id }));

      open({
        width: "300px",
        height: "200px",
        title: "로그인",
        main: <AlertMainTextBox text="로그인에 성공했습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
          router.push("/");
        },
        onBackDropClick: () => {
          close();
        },
      });
    } else {
      const error = await response.json();
      const errorStatus = response.status;

      if (errorStatus === 401) {
        open({
          width: "300px",
          height: "200px",
          title: "로그인 실패",
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
    }
  };

  useEffect(() => {
    if (authStateValue.isLoggedIn === true) {
      router.push("/");
    }
  }, []);

  return (
    <FormProvider {...methods}>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing margin="40px" />
        <InputField<LogInFormData> name="email" label="아이디" />
        <InputField<LogInFormData> name="password" label="비밀번호" type="password" />
        <Spacing margin="20px" />
      </form>
    </FormProvider>
  );
};

export default LogInMain;

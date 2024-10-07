"use client";
import * as cs from "@/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import InputField from "@/shared/components/auth/InputField";

import useAlertContext from "@/hooks/useAlertContext";

import authState from "@/recoil/authAtom";
import { useRecoilState } from "recoil";

import { LogInFormData, loginSchema } from "@/utils/validation/auth";

import { requestLogin } from "@/api/auth/requestLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { setLocalToken, setRefreshLocalToken } from "@/utils/localToken";

const LogInMain = () => {
  const [authStateValue, setAuthStateValue] = useRecoilState(authState);
  const router = useRouter();

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

  const loginMutation = useMutation({
    mutationFn: (data: LogInFormData) => requestLogin(data),
    onSuccess: (data) => {
      setLocalToken(data.accessToken);
      setRefreshLocalToken(data.refreshToken);
      setAuthStateValue((prev) => ({ ...prev, isLoggedIn: true }));

      open({
        width: "300px",
        height: "200px",
        title: "로그인",
        main: <AlertMainTextBox text="로그인에 성공했습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push("/");
          close();
        },
        onBackDropClick: () => {
          close();
        },
      });
    },
    onError: (error) => {
      console.log(error);
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
    },
  });

  const onSubmit: SubmitHandler<LogInFormData> = async (data, event) => {
    event?.preventDefault();

    loginMutation.mutate(data);
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

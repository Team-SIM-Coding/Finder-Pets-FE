"use client";

import Spacing from "@/shared/components/Spacing";
import InputField from "@/shared/components/auth/InputField";
import { v4 as uuid } from "uuid";

import { RegisterFormData, registerSchema } from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

const RegisterMain = () => {
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

  const onSubmit: SubmitHandler<RegisterFormData> = async (data, event) => {
    event?.preventDefault();

    const userData = {
      user_id: uuid(),
      ...data,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("회원가입 성공:", data);
      } else {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const error = await response.json();
          console.error("회원가입 실패:", error.message);
        } else {
          const errorText = await response.text();
          console.error("회원가입 실패 - HTML 오류 페이지:", errorText);
        }
      }
    } catch (networkError) {
      console.error("회원가입 실패 - 네트워크 오류:", networkError);
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="40px" />
        <InputField<RegisterFormData> label="아이디" name="email" />
        <InputField<RegisterFormData> type="password" label="비밀번호" name="password" />
        <InputField<RegisterFormData>
          type="password"
          label="비밀번호 확인"
          name="confirmPassword"
        />
        <InputField<RegisterFormData> label="이름" name="name" />
        <InputField<RegisterFormData> label="휴대폰 번호" name="phone" />
        <Spacing height="20px" />
      </form>
    </FormProvider>
  );
};

export default RegisterMain;

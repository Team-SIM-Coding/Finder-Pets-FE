"use client";

import authState from "@/recoil/authAtom";
import Spacing from "@/shared/components/Spacing";
import InputField from "@/shared/components/auth/InputField";
import { LogInFormData, loginSchema } from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

const LogInMain = () => {
  const router = useRouter();
  const setAuthState = useSetRecoilState(authState);

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
      console.log("로그인 성공:", data);
      setAuthState({ isLoggedIn: true });
      router.push("/");
    } else {
      const error = await response.json();
      console.error("로그인 실패:", error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="40px" />
        <InputField<LogInFormData> name="email" label="아이디" />
        <InputField<LogInFormData> name="password" label="비밀번호" type="password" />
        <Spacing height="20px" />
      </form>
    </FormProvider>
  );
};

export default LogInMain;

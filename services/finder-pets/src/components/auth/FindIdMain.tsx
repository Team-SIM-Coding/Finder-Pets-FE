"use client";
import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";
import InputField from "@/shared/components/auth/InputField";
import FindIdResult from "./FindIdResult";

import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FindIdFormData, findIdSchema } from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import useAlertContext from "@/hooks/useAlertContext";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import { useRouter } from "next/navigation";

const FindIdMain = () => {
  const [isFoundId, setIsFoundId] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();
  const { open, close } = useAlertContext();

  const methods = useForm<FindIdFormData>({
    resolver: zodResolver(findIdSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FindIdFormData> = async (data, event) => {
    event?.preventDefault();

    const response = await fetch("/api/find-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      setEmail(data.email);
      setIsFoundId(true);
      console.log("아이디 찾기 성공:", data.email);
    } else {
      const error = await response.json();
      const errorStatus = response.status;
      open({
        width: "300px",
        height: "220px",
        title: "아이디 찾기 실패",
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
      console.error("아이디 찾기 실패:", error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="find-id-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="40px" />
        {!isFoundId && (
          <>
            <InputField<FindIdFormData> name="name" label="이름" />
            <InputField<FindIdFormData> name="phone" label="휴대폰 번호" />
          </>
        )}
        {isFoundId && <FindIdResult email={email} />}
      </form>
    </FormProvider>
  );
};

export default FindIdMain;

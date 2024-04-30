import InputField from "@/shared/components/auth/InputField";

const LogInMain = () => {
  return (
    <>
      <InputField label="아이디" validationMessages={["이메일을 형식에 맞게 입력해주세요."]} />
      <InputField label="비밀번호" />
    </>
  );
};

export default LogInMain;

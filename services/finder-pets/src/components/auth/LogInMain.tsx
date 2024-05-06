import Spacing from "@/shared/components/Spacing";
import InputField from "@/shared/components/auth/InputField";

const LogInMain = () => {
  return (
    <>
      <Spacing height="40px" />
      <InputField label="아이디" validationMessages={["이메일을 형식에 맞게 입력해주세요."]} />
      <InputField label="비밀번호" />
      <Spacing height="20px" />
    </>
  );
};

export default LogInMain;

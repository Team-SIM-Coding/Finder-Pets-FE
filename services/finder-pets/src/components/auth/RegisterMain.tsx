import InputField from "@/shared/components/auth/InputField";
import RegisterButton from "./RegisterButton";

const RegisterMain = () => {
  return (
    <>
      <InputField label="아이디" validationMessages={["이메일을 형식에 맞게 입력해주세요."]} />
      <InputField
        label="비밀번호"
        validationMessages={[
          "영문/숫자/특수문자 2가지 이상 조합 (8~20자)",
          "3개 이상 연속하거나 동일한 문자/숫자 제외",
        ]}
      />
      <InputField label="비밀번호 확인" validationMessages={["비밀번호가 일치하지 않습니다."]} />
      <InputField
        label="이름"
        validationMessages={["이름을 정확히 입력해주세요. (2글자 이상, 숫자 제외)"]}
      />
      <InputField
        label="휴대폰 번호"
        validationMessages={["휴대폰 번호를 정확하게 입력해주세요. (- 포함)"]}
      />
      <RegisterButton />
    </>
  );
};

export default RegisterMain;

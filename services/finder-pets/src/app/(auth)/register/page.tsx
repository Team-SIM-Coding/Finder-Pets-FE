import AuthHeader from "@/shared/components/auth/AuthHeader";
import AuthSection from "@/shared/components/auth/AuthSection";
import RegisterButton from "@/components/auth/RegisterButton";
import RegisterMain from "@/components/auth/RegisterMain";

const Register = () => {
  return (
    <AuthSection
      header={<AuthHeader title="회원가입" />}
      main={<RegisterMain />}
      footer={<RegisterButton />}
    />
  );
};

export default Register;

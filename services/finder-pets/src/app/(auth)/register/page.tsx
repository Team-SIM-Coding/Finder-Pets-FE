import RegisterMain from "@/components/auth/RegisterMain";
import AuthHeader from "@/shared/components/auth/AuthHeader";
import AuthSection from "@/shared/components/auth/AuthSection";

const Register = () => {
  return (
    <AuthSection
      header={<AuthHeader title="회원가입" />}
      main={<RegisterMain />}
      footer={<div></div>}
    />
  );
};

export default Register;

import AuthHeader from "@/shared/components/auth/AuthHeader";
import AuthSection from "@/shared/components/auth/AuthSection";
import LogInButtons from "@/components/auth/LogInButtons";
import LogInMain from "@/components/auth/LogInMain";

const LogIn = () => {
  return (
    <AuthSection
      header={<AuthHeader title="로그인" />}
      main={<LogInMain />}
      footer={<LogInButtons />}
    />
  );
};

export default LogIn;

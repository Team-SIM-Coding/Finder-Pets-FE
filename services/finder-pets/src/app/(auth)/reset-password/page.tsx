import ResetPasswordButtons from "@/components/auth/ResetPasswordButtons";
import ResetPasswordMain from "@/components/auth/ResetPasswordMain";
import AuthHeader from "@/shared/components/auth/AuthHeader";
import AuthSection from "@/shared/components/auth/AuthSection";

const ResetPassword = () => {
  return (
    <AuthSection
      header={<AuthHeader title="비밀번호 제설정" />}
      main={<ResetPasswordMain />}
      footer={<ResetPasswordButtons />}
    />
  );
};

export default ResetPassword;

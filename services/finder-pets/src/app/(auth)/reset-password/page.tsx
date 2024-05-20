import AuthHeader from "@/shared/components/auth/AuthHeader";
import AuthSection from "@/shared/components/auth/AuthSection";
import ResetPasswordButtons from "@/components/auth/ResetPasswordButtons";
import ResetPasswordMain from "@/components/auth/ResetPasswordMain";

const ResetPassword = () => {
  return (
    <AuthSection
      header={<AuthHeader title="비밀번호 재설정" />}
      main={<ResetPasswordMain />}
      footer={<ResetPasswordButtons />}
    />
  );
};

export default ResetPassword;

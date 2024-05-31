import AuthHeader from "@/shared/components/auth/AuthHeader";
import AuthSection from "@/shared/components/auth/AuthSection";
import FindPasswordButtons from "@/components/auth/FindPasswordButtons";
import FindPasswordMain from "@/components/auth/FindPasswordMain";

const FindPassword = () => {
  return (
    <AuthSection
      header={<AuthHeader title="비밀번호 찾기" />}
      main={<FindPasswordMain />}
      footer={<FindPasswordButtons />}
    />
  );
};

export default FindPassword;

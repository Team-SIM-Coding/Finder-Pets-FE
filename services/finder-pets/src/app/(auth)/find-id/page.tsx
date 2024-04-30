import FindIdButtons from "@/components/auth/FindIdButtons";
import FindIdMain from "@/components/auth/FindIdMain";
import AuthHeader from "@/shared/components/auth/AuthHeader";
import AuthSection from "@/shared/components/auth/AuthSection";

const FindId = () => {
  return (
    <AuthSection
      header={<AuthHeader title="아이디 찾기" />}
      main={<FindIdMain />}
      footer={<FindIdButtons />}
    />
  );
};

export default FindId;

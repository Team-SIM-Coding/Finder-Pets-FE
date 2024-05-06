import EditorSection from "@/shared/components/editor/EditorSection";
import CommunityRegisterMain from "./CommunityRegisterMain";
import CommunityRegisterButton from "./CommunityRegisterButton";

const CommunityRegisterForm = () => {
  return (
    <EditorSection
      title="커뮤니티 글쓰기"
      main={<CommunityRegisterMain />}
      footer={<CommunityRegisterButton />}
    />
  );
};

export default CommunityRegisterForm;

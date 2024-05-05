import ProfileButtons from "@/components/profile/ProfileButtons";
import ProfileMain from "@/components/profile/ProfileMain";
import EditorSection from "@/shared/components/editor/EditorSection";

const Profile = () => {
  return <EditorSection title="프로필" main={<ProfileMain />} footer={<ProfileButtons />} />;
};

export default Profile;

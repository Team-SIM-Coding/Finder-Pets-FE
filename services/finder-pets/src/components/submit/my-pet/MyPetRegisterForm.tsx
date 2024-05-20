"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import MyPetRegisterButton from "@/components/submit/my-pet/MyPetRegisterButton";
import MyPetRegisterMain from "@/components/submit/my-pet/MyPetRegisterMain";

const MyPetRegisterForm = () => {
  return (
    <EditorSection
      title="반려동물 등록"
      main={<MyPetRegisterMain />}
      footer={<MyPetRegisterButton />}
    />
  );
};

export default MyPetRegisterForm;

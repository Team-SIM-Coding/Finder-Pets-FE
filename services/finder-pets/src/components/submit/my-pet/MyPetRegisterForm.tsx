"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import MyPetRegisterButton from "./MyPetRegisterButton";
import MyPetRegisterMain from "./MyPetRegisterMain";

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

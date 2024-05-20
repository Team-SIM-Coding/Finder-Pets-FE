"use client";

import { Pet } from "@/models/pet";
import EditorSection from "@/shared/components/editor/EditorSection";
import FinderRegisterButton from "./FinderRegisterButton";
import FinderRegisterMain from "./FinderRegisterMain";

const FinderRegisterForm = () => {
  return (
    <EditorSection
      title="실종/목격 동물 등록"
      main={<FinderRegisterMain pet_info={{} as Pet} />}
      footer={<FinderRegisterButton />}
    />
  );
};

export default FinderRegisterForm;

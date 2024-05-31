"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import FinderRegisterButton from "@/components/submit/finder/FinderRegisterButton";
import FinderRegisterMain from "@/components/submit/finder/FinderRegisterMain";

import { Pet } from "@/models/pet";

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

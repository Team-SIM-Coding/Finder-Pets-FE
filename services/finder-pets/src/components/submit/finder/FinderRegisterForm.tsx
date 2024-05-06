"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import FinderRegisterMain from "./FinderRegisterMain";
import FinderRegisterButton from "./FinderRegisterButton";
import { useEffect, useState } from "react";
import { LostPets } from "@/shared/types/pet";

const FinderRegisterForm = () => {
  const [item, setItem] = useState<LostPets>({} as LostPets);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItem(data[0]));
  }, []);

  return (
    <EditorSection
      title="실종/목격 동물 등록"
      main={<FinderRegisterMain pet_info={item} />}
      footer={<FinderRegisterButton />}
    />
  );
};

export default FinderRegisterForm;

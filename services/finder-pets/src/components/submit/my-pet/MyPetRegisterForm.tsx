"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import MyPetRegisterMain from "./MyPetRegisterMain";
import { useEffect, useState } from "react";
import { LostPets } from "@/shared/types/pet";

const MyPetRegisterForm = () => {
  const [item, setItem] = useState<LostPets>({} as LostPets);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItem(data[0]));
  }, []);

  return (
    <EditorSection
      title="반려동물 등록"
      main={<MyPetRegisterMain pet_info={item} />}
      footer={<></>}
    />
  );
};

export default MyPetRegisterForm;

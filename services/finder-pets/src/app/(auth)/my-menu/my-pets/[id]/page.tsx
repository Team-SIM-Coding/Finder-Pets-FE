"use client";
import MyPetProfileMain from "@/components/my-pets/MyPetProfileMain";
import EditorSection from "@/shared/components/editor/EditorSection";
import { LostPets } from "@/shared/types/pet";
import { useEffect, useState } from "react";

const MyPetDetail = () => {
  const [item, setItem] = useState<LostPets>({} as LostPets);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItem(data[0]));
  }, []);

  return (
    <EditorSection
      title={item?.pet_id ? `${item?.pet_id}의 프로필` : "반려동물 프로필"}
      main={<MyPetProfileMain pet_info={item} />}
      footer={<></>}
    />
  );
};

export default MyPetDetail;

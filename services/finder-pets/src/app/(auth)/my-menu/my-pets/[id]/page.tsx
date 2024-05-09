"use client";
import MyPetProfileButton from "@/components/my-pets/MyPetProfileButton";
import MyPetProfileMain from "@/components/my-pets/MyPetProfileMain";
import MyPetProfileTitle from "@/components/my-pets/MyPetProfileTitle";
import { MyPet } from "@/models/pet";
import EditorSection from "@/shared/components/editor/EditorSection";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useEffect, useState } from "react";

const MyPetDetail = () => {
  const [item, setItem] = useState<MyPet>({} as MyPet);

  const fetchMyPet = async (id: string) => {
    const response = await fetch(`/api/my-pets/${id}`);

    if (response.ok) {
      const data = await response.json();
      setItem(data);
      console.log("내 반려동물 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("내 반려동물 조회 실패 : ", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      fetchMyPet("1");
    })();
  }, []);

  return (
    <EditorSection
      title={<MyPetProfileTitle name={item.name} />}
      main={<MyPetProfileMain pet_info={item} />}
      footer={<MyPetProfileButton />}
    />
  );
};

export default MyPetDetail;

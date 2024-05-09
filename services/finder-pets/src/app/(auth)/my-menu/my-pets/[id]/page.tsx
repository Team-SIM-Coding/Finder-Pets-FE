"use client";
import MyPetProfileMain from "@/components/my-pets/MyPetProfileMain";
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
      title={item?.my_pet_id ? `${item?.my_pet_id}의 프로필` : "반려동물 프로필"}
      main={<MyPetProfileMain pet_info={item} />}
      footer={<></>}
    />
  );
};

export default MyPetDetail;

"use client";
import MyPetProfileButton from "@/components/my-pets/MyPetProfileButton";
import MyPetProfileMain from "@/components/my-pets/MyPetProfileMain";
import MyPetProfileTitle from "@/components/my-pets/MyPetProfileTitle";
import { MyPet } from "@/models/pet";
import EditorSection from "@/shared/components/editor/EditorSection";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MyPetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [petInfo, setPetInfo] = useState<MyPet>({} as MyPet);

  const fetchMyPet = async (id: string | undefined) => {
    const response = await fetch(`/api/my-pets/${id}`);

    if (response.ok) {
      const data = await response.json();
      setPetInfo(data);
      console.log("내 반려동물 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("내 반려동물 조회 실패 : ", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      fetchMyPet(id);
    })();
  }, []);

  return (
    <EditorSection
      title={<MyPetProfileTitle id={petInfo.my_pet_id} name={petInfo.name} />}
      main={<MyPetProfileMain pet_info={petInfo} />}
      footer={<MyPetProfileButton />}
    />
  );
};

export default MyPetDetail;

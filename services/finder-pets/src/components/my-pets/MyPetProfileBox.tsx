"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import MyPetProfileButton from "@/components/my-pets/MyPetProfileButton";
import MyPetProfileMain from "@/components/my-pets/MyPetProfileMain";
import MyPetProfileTitle from "@/components/my-pets/MyPetProfileTitle";

import { fetchMyPet } from "@/api/mocks/getMyPet";

import { MyPet } from "@/models/pet";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

const MyPetProfileBox = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSuspenseQuery<MyPet, Error>({
    queryKey: ["my-pet", id],
    queryFn: () => fetchMyPet(id),
  });

  return (
    <EditorSection
      title={<MyPetProfileTitle id={data.my_pet_id} name={data.name} />}
      main={<MyPetProfileMain pet_info={data} />}
      footer={<MyPetProfileButton />}
    />
  );
};

export default MyPetProfileBox;

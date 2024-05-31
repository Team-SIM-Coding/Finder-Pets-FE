"use client";

import ListBox from "@/components/list/ListBox";

import { fetchLostPets } from "@/api/mocks/getLostPet";

import { useSuspenseQuery } from "@tanstack/react-query";

const LostPetList = () => {
  const { data } = useSuspenseQuery({ queryKey: ["lost-pets"], queryFn: fetchLostPets });
  return (
    <ul>
      {data.map((lost) => (
        <ListBox key={lost.pet_id} list_info={lost} />
      ))}
    </ul>
  );
};

export default LostPetList;

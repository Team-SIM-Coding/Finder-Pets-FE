"use client";

import { fetchLostPets } from "@/app/api/mocks/getLostPet";
import { useSuspenseQuery } from "@tanstack/react-query";
import ListBox from "../list/ListBox";

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

"use client";

import { fetchSightedPets } from "@/app/api/mocks/getSightedPet";
import { useSuspenseQuery } from "@tanstack/react-query";
import ListBox from "../list/ListBox";

const SightedPetList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["sighted-pets"],
    queryFn: fetchSightedPets,
  });

  return (
    <ul>
      {data.map((sighted) => (
        <ListBox key={sighted.pet_id} list_info={sighted} />
      ))}
    </ul>
  );
};

export default SightedPetList;

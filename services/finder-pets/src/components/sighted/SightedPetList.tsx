"use client";

import ListBox from "@/components/list/ListBox";

import { fetchSightedPets } from "@/api/mocks/getSightedPet";

import { useSuspenseQuery } from "@tanstack/react-query";

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

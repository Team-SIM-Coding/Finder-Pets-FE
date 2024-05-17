"use client";

import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useEffect, useState } from "react";
import ListBox from "../list/ListBox";
import { FinderPet } from "@/models/finder";

const SightedPetList = () => {
  const [sightedPets, setSightedPets] = useState<FinderPet[]>([]);

  const fetchLostPets = async () => {
    const response = await fetch("/api/sighted");

    if (response.ok) {
      const data = await response.json();
      setSightedPets(data);
      console.log("목격 동물 리스트 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("목격 동물 리스트 조회 실패 : ", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      fetchLostPets();
    })();
  }, []);

  return (
    <ul>
      {sightedPets.map((sighted) => (
        <ListBox key={sighted.pet_id} list_info={sighted} />
      ))}
    </ul>
  );
};

export default SightedPetList;

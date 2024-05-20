"use client";

import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useEffect, useState } from "react";
import ListBox from "../list/ListBox";
import { FinderPet } from "@/models/finder";

const LostPetList = () => {
  const [lostPets, setLostPets] = useState<FinderPet[]>([]);

  const fetchLostPets = async () => {
    const response = await fetch("/api/lost");

    if (response.ok) {
      const data = await response.json();
      setLostPets(data);
      console.log("실종 동물 리스트 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("실종 동물 리스트 조회 실패 : ", data);
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
      {lostPets.map((lost) => (
        <ListBox key={lost.pet_id} list_info={lost} />
      ))}
    </ul>
  );
};

export default LostPetList;

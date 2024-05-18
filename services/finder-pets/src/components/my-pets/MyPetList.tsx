"use client";
import { Grid } from "@design-system/react-components-layout";

import { useEffect, useState } from "react";
import MyPetBox from "./MyPetBox";
import Spacing from "@/shared/components/Spacing";
import { MyPet } from "@/models/pet";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";

const MyPetList = () => {
  const [myPets, setMyPets] = useState<MyPet[]>([]);

  const fetchMyPets = async () => {
    const response = await fetch("/api/my-pets");

    if (response.ok) {
      const data = await response.json();
      setMyPets(data);
      console.log("내 반려동물 리스트 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("내 반려동물 리스트 조회 실패 : ", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      fetchMyPets();
    })();
  }, []);

  return (
    <div>
      <Spacing height="24px" />
      <Grid templateColumns="repeat(2, 1fr)" gap="8px">
        {myPets.map((pet) => (
          <MyPetBox key={pet.my_pet_id} pet={pet} />
        ))}
      </Grid>
    </div>
  );
};

export default MyPetList;

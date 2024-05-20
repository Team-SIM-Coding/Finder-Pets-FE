"use client";

import { Grid } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import MyPetBox from "@/components/my-pets/MyPetBox";

import { fetchMyPets } from "@/api/mocks/getMyPet";

import { MyPet } from "@/models/pet";

import { useSuspenseQuery } from "@tanstack/react-query";

const MyPetList = () => {
  const { data } = useSuspenseQuery<MyPet[], Error>({
    queryKey: ["my-pets"],
    queryFn: fetchMyPets,
  });

  return (
    <div>
      <Spacing height="24px" />
      <Grid templateColumns="repeat(2, 1fr)" gap="8px">
        {data.map((pet) => (
          <MyPetBox key={pet.my_pet_id} pet={pet} />
        ))}
      </Grid>
    </div>
  );
};

export default MyPetList;

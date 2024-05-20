"use client";
import { Grid } from "@design-system/react-components-layout";

import { fetchMyPets } from "@/app/api/mocks/getMyPet";
import Spacing from "@/shared/components/Spacing";
import { useSuspenseQuery } from "@tanstack/react-query";
import MyPetBox from "./MyPetBox";
import { MyPet } from "@/models/pet";

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

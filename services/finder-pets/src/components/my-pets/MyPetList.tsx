"use client";
import { Grid } from "@design-system/react-components-layout";

import { LostPets } from "@/shared/types/pet";
import { useEffect, useState } from "react";
import MyPetBox from "./MyPetBox";
import Spacing from "@/shared/components/Spacing";

const MyPetList = () => {
  const [items, setItems] = useState<LostPets[]>([]);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <Spacing height="24px" />
      <Grid templateColumns="repeat(2, 1fr)" gap="8px">
        {items.map((item) => (
          <MyPetBox key={item.pet_id} pet={item} />
        ))}
      </Grid>
    </div>
  );
};

export default MyPetList;

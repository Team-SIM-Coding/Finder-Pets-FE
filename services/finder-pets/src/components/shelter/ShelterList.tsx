"use client";

import { getShelterPetList } from "@/app/api/shelter/shelterApi";
import usePetList from "@/hooks/usePetList";
import { ShelterPet, ShelterPetResponseResponse } from "@/models/shelter";
import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import { flattenShelterData } from "@/utils/data/flattenShelterData";
import ListBox from "../list/ListBox";
import { useEffect, useState } from "react";

export interface FetchResponse {
  response: ShelterPetResponseResponse;
  nextPage: number | null;
  nextPageToken?: number;
  prevPageToken?: number;
}

export interface InfiniteData<T> {
  pages: T[];
}

interface Props {
  filter: {
    area: string;
    district: string;
    animal: string;
    kind: string;
  };
}

const ShelterList = ({ filter }: Props) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = usePetList({
    type: "shelter-pets",
    fetchFunction: getShelterPetList,
    maxResults: 10,
    initPageToken: 1,
  });
  const [filteredData, setFilteredData] = useState<ShelterPet[]>([]);

  useEffect(() => {
    const flatData = flattenShelterData(data) as ShelterPet[];

    const filtered = flatData.filter((pet) => {
      return (
        (filter.area === "" || pet.careAddr.includes(filter.area)) &&
        (filter.district === "" || pet.careAddr.includes(filter.district)) &&
        (filter.animal === "" || pet.kindCd.includes(filter.animal)) &&
        (filter.kind === "" || pet.kindCd.includes(filter.kind))
      );
    });

    console.log("filter", filter);

    setFilteredData(filtered);
  }, [filter, data]);

  return (
    <>
      <ul style={{ marginBottom: "30px" }}>
        {filteredData.map((pet: ShelterPet) => (
          <ListBox key={pet?.desertionNo} list_info={pet} />
        ))}
      </ul>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};

export default ShelterList;

"use client";

import { getShelterPetList } from "@/app/api/shelter/shelterApi";
import usePetList from "@/hooks/usePetList";
import { ShelterPet, ShelterPetResponseResponse } from "@/models/shelter";
import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import { flattenShelterData } from "@/utils/data/flattenShelterData";
import ListBox from "../list/ListBox";

export interface FetchResponse {
  response: ShelterPetResponseResponse;
  nextPage: number | null;
  nextPageToken?: number;
  prevPageToken?: number;
}

export interface InfiniteData<T> {
  pages: T[];
}

const ShelterList = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = usePetList({
    type: "shelter-pets",
    fetchFunction: getShelterPetList,
    maxResults: 10,
    initPageToken: 1,
  });
  const flatData = flattenShelterData(data) as ShelterPet[];

  console.log("data", data);

  return (
    <>
      <ul style={{ marginBottom: "30px" }}>
        {flatData.map((pet: ShelterPet) => (
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

"use client";

import { getShelterPetList } from "@/app/api/shelter/shelterApi";
import usePetList from "@/hooks/usePetList";
import { ShelterPet, ShelterPetResponseResponse } from "@/models/shelter";
import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import { flattenShelterData } from "@/utils/data/flattenShelterData";
import { useCallback, useMemo } from "react";
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

  const flatData = useMemo(() => flattenShelterData(data) as ShelterPet[], [data]);

  const filteredData = useMemo(() => {
    return flatData.filter((pet) => {
      return (
        (filter.area === "" || pet.careAddr.includes(filter.area)) &&
        (filter.district === "" || pet.careAddr.includes(filter.district)) &&
        (filter.animal === "" || pet.kindCd.includes(filter.animal)) &&
        (filter.kind === "" || pet.kindCd.includes(filter.kind))
      );
    });
  }, [filter, flatData]);

  const handleFetchNextPage = useCallback(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  return (
    <>
      <ul style={{ marginBottom: "30px" }}>
        {filteredData.map((pet: ShelterPet) => (
          <ListBox key={pet?.desertionNo} list_info={pet} />
        ))}
      </ul>
      {hasNextPage && <VisibilityLoader callback={handleFetchNextPage} />}
    </>
  );
};

export default ShelterList;

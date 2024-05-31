import { FetchResponse } from "@/components/shelter/ShelterList";

import { ShelterPet } from "@/models/shelter";

import { InfiniteData } from "@tanstack/react-query";

export const flattenShelterData = (data: InfiniteData<FetchResponse, unknown>): ShelterPet[] => {
  return data?.pages.flatMap((page) => page?.response?.response?.body?.items?.item);
};

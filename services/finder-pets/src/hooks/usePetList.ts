import { ShelterPetResponseResponse } from "@/models/shelter";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

interface FetchParams {
  pageParam: number;
  maxResults: number;
  pageToken?: number;
}

interface FetchResponse {
  response: ShelterPetResponseResponse;
  prevPage: number | null;
  nextPage: number | null;
  nextPageToken?: number;
  prevPageToken?: number;
}

interface Props {
  type: string;
  fetchFunction: (params: FetchParams) => Promise<FetchResponse>;
  maxResults: number;
  initPageToken?: number;
}

const usePetList = ({ type, fetchFunction, maxResults, initPageToken = 1 }: Props) => {
  return useSuspenseInfiniteQuery({
    queryKey: [type, maxResults, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await fetchFunction({ pageParam, maxResults });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
    getPreviousPageParam: (firstPage) => {
      return firstPage.prevPage;
    },
  });
};

export default usePetList;

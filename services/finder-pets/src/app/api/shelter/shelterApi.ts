import { SHELTER_BASE_URL } from "./constants";

const TODAY = new Date();
TODAY.setDate(TODAY.getDate() - 7);

const BGNDE = "20240101";
const ENDDE = TODAY.toISOString().substring(0, 10).replace(/-/g, "");

export const getShelterPetList = async ({ pageParam = 1, maxResults = 10 }) => {
  const url = `${SHELTER_BASE_URL}?serviceKey=${process.env.NEXT_PUBLIC_SHELTER_API_KEY}&bgnde=${BGNDE}&endde=${ENDDE}&pageNo=${pageParam}&numOfRows=${maxResults}&_type=json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  const currentPage = pageParam;
  const totalPages = Math.ceil(+data?.response?.body?.totalCount / maxResults);

  return {
    response: data,
    currentPage: currentPage,
    totalPages: totalPages,
    prevPage: currentPage > 1 ? currentPage - 1 : null,
    nextPage: currentPage < totalPages ? currentPage + 1 : null,
  };
};

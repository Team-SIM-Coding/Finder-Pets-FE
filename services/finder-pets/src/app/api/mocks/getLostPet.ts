import { FinderPet } from "@/models/finder";
import { HttpHandler, HttpResponse, http } from "msw";

const lostPets: FinderPet[] = JSON.parse(localStorage.getItem("lost-pets") || "[]");

export const getLostPets: HttpHandler = http.get("/api/lost", async () => {
  if (lostPets) {
    return HttpResponse.json(lostPets, { status: 200 });
  } else {
    return HttpResponse.json({ message: "실종 동물 리스트를 찾을 수 없습니다." }, { status: 404 });
  }
});

export const getLostPet: HttpHandler = http.get("/api/lost/:id", async ({ params }) => {
  const lostPetId = params.id;

  const pet = lostPets.find((p) => p.pet_id === lostPetId);

  if (pet) {
    return HttpResponse.json(pet, { status: 200 });
  } else {
    return HttpResponse.json({ message: "실종 동물을 찾을 수 없습니다." }, { status: 404 });
  }
});

export const fetchLostPets = async (): Promise<FinderPet[]> => {
  const response = await fetch("/api/lost");
  if (!response.ok) {
    throw new Error("실종 동물 리스트 조회에 실패했습니다.");
  }
  return response.json();
};

export const fetchLostPet = async (lostPetId: string[] | string): Promise<FinderPet> => {
  const response = await fetch(`/api/lost/${lostPetId}`);
  if (!response.ok) {
    throw new Error("실종 동물 정보 조회에 실패했습니다.");
  }
  return response.json();
};

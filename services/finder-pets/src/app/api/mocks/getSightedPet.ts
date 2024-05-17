import { FinderPet } from "@/models/finder";
import { HttpHandler, HttpResponse, http } from "msw";

const sightedPets: FinderPet[] = JSON.parse(localStorage.getItem("sighted-pets") || "[]");

export const getSightedPets: HttpHandler = http.get("/api/sighted", async () => {
  if (sightedPets) {
    return HttpResponse.json(sightedPets, { status: 200 });
  } else {
    return HttpResponse.json({ message: "목격 동물 리스트를 찾을 수 없습니다." }, { status: 404 });
  }
});

export const getSightedPet: HttpHandler = http.get("/api/sighted/:id", async ({ params }) => {
  const sightedPetId = params.id;

  const pet = sightedPets.find((p) => p.pet_id === sightedPetId);

  if (pet) {
    return HttpResponse.json(pet, { status: 200 });
  } else {
    return HttpResponse.json({ message: "목격 동물을 찾을 수 없습니다." }, { status: 404 });
  }
});

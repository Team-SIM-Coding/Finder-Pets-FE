import { FinderPet } from "@/models/finder";

import { HttpHandler, HttpResponse, http } from "msw";

const sightedPets: FinderPet[] = JSON.parse(localStorage.getItem("sighted-pets") || "[]");

export const deleteSightedPet: HttpHandler = http.delete(
  "/api/sighted/delete/:id",
  async ({ params }) => {
    const SightedId = params.id;

    const sightedPetIndex = sightedPets.findIndex((p) => p.pet_id === SightedId);

    if (sightedPetIndex !== -1) {
      sightedPets.splice(sightedPetIndex, 1);

      localStorage.setItem("sighted-pets", JSON.stringify(sightedPets));

      return HttpResponse.json({ message: `목격 동물이 삭제되었습니다.` }, { status: 200 });
    } else {
      return HttpResponse.json({ message: "목격 동물을 찾을 수 없습니다." }, { status: 404 });
    }
  },
);

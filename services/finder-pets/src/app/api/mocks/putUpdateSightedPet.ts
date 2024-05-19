import { FinderPet } from "@/models/finder";
import { HttpHandler, HttpResponse, http } from "msw";

const sightedPets: FinderPet[] = JSON.parse(localStorage.getItem("sighted-pets") || "[]");

export const putUpdateSightedPet: HttpHandler = http.put(
  "/api/sighted/update/:id",
  async ({ params, request }) => {
    const sightedPetId = params.id;
    const updatedLostPetData = (await request.json()) as Partial<FinderPet>;

    const petIndex = sightedPets.findIndex((p) => p.pet_id === sightedPetId);

    if (petIndex !== -1) {
      sightedPets[petIndex] = { ...sightedPets[petIndex], ...updatedLostPetData };

      localStorage.setItem("sighted-pets", JSON.stringify(sightedPets));

      return HttpResponse.json(sightedPets[petIndex], { status: 200 });
    } else {
      return HttpResponse.json({ message: "목격된 반려동물을 찾을 수 없습니다." }, { status: 404 });
    }
  },
);

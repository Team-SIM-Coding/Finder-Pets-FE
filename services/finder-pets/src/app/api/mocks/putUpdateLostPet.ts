import { FinderPet } from "@/models/finder";
import { HttpHandler, HttpResponse, http } from "msw";

const lostPets: FinderPet[] = JSON.parse(localStorage.getItem("lost-pets") || "[]");

export const putUpdateLostPet: HttpHandler = http.put(
  "/api/lost/update/:id",
  async ({ params, request }) => {
    const lostPetId = params.id;
    const updatedLostPetData = (await request.json()) as Partial<FinderPet>;

    const petIndex = lostPets.findIndex((p) => p.pet_id === lostPetId);

    if (petIndex !== -1) {
      lostPets[petIndex] = { ...lostPets[petIndex], ...updatedLostPetData };

      localStorage.setItem("lost-pets", JSON.stringify(lostPets));

      return HttpResponse.json(lostPets[petIndex], { status: 200 });
    } else {
      return HttpResponse.json({ message: "실종된 반려동물을 찾을 수 없습니다." }, { status: 404 });
    }
  },
);

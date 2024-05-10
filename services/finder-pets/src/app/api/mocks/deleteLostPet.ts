import { LostPet } from "@/models/lost";
import { HttpHandler, HttpResponse, http } from "msw";

const lostPets: LostPet[] = JSON.parse(localStorage.getItem("lost-pets") || "[]");

export const deleteLostPet: HttpHandler = http.delete(
  "/api/lost/delete/:id",
  async ({ params }) => {
    const lostPetId = params.id;

    const lostPetIndex = lostPets.findIndex((p) => p.lost_pet_id === lostPetId);

    if (lostPetIndex !== -1) {
      lostPets.splice(lostPetIndex, 1);

      localStorage.setItem("lost-pets", JSON.stringify(lostPets));

      return HttpResponse.json({ message: `실종 동물이 삭제되었습니다.` }, { status: 200 });
    } else {
      return HttpResponse.json({ message: "실종 동물을 찾을 수 없습니다." }, { status: 404 });
    }
  },
);

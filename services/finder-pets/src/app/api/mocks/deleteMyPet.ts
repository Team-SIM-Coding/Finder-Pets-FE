import { MyPet } from "@/models/pet";
import { HttpHandler, HttpResponse, http } from "msw";

const pets: MyPet[] = JSON.parse(localStorage.getItem("my-pets") || "[]");

export const deleteMyPet: HttpHandler = http.delete(
  "/api/my-pets/delete/:id",
  async ({ params }) => {
    const myPetId = params.id;

    const petIndex = pets.findIndex((p) => p.my_pet_id === myPetId);

    if (petIndex !== -1) {
      const [deletedPet] = pets.splice(petIndex, 1);

      localStorage.setItem("my-pets", JSON.stringify(pets));

      return HttpResponse.json(
        { message: `반려동물 ${deletedPet.name}이 삭제되었습니다.` },
        { status: 200 },
      );
    } else {
      return HttpResponse.json({ message: "나의 반려동물을 찾을 수 없습니다." }, { status: 404 });
    }
  },
);

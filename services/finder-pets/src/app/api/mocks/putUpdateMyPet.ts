import { MyPet } from "@/models/pet";

import { HttpHandler, HttpResponse, http } from "msw";

const pets: MyPet[] = JSON.parse(localStorage.getItem("my-pets") || "[]");

export const putUpdateMyPet: HttpHandler = http.put(
  "/api/my-pets/update/:id",
  async ({ params, request }) => {
    const myPetId = params.id;
    const updatedPetData = (await request.json()) as Partial<MyPet>;

    const petIndex = pets.findIndex((p) => p.my_pet_id === myPetId);

    if (petIndex !== -1) {
      pets[petIndex] = { ...pets[petIndex], ...updatedPetData };

      localStorage.setItem("my-pets", JSON.stringify(pets));

      return HttpResponse.json(pets[petIndex], { status: 200 });
    } else {
      return HttpResponse.json({ message: "나의 반려동물을 찾을 수 없습니다." }, { status: 404 });
    }
  },
);

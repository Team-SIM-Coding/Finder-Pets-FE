import { MyPet } from "@/models/pet";
import { HttpHandler, HttpResponse, http } from "msw";

const pets: MyPet[] = JSON.parse(localStorage.getItem("pets") || "[]");

export const getMyPets: HttpHandler = http.get("/api/my-pets", async () => {
  if (pets) {
    return HttpResponse.json(pets, { status: 200 });
  } else {
    return HttpResponse.json(
      { message: "나의 반려동물 리스트를 찾을 수 없습니다." },
      { status: 404 },
    );
  }
});

export const getMyPet: HttpHandler = http.get("/api/my-pets/:id", async ({ params }) => {
  const myPetId = params.id;

  const pet = pets.find((p) => p.my_pet_id === myPetId);

  if (pet) {
    return HttpResponse.json(pet, { status: 200 });
  } else {
    return HttpResponse.json({ message: "나의 반려동물을 찾을 수 없습니다." }, { status: 404 });
  }
});

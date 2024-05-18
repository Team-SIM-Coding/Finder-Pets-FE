import { MyPet } from "@/models/pet";
import { HttpHandler, HttpResponse, http } from "msw";

const pets: MyPet[] = JSON.parse(localStorage.getItem("my-pets") || "[]");

export const postMyPet: HttpHandler = http.post("/api/my-pet/register", async ({ request }) => {
  const newMyPet = (await request.json()) as MyPet;

  const isDuplicate = pets.some((pet) => pet.name === newMyPet.name);

  if (isDuplicate) {
    return HttpResponse.json(
      { message: `이미 등록된 이름 '${newMyPet.name}'이 있습니다.` },
      { status: 409 },
    );
  }

  pets.push(newMyPet);

  localStorage.setItem("my-pets", JSON.stringify(pets));

  return HttpResponse.json(newMyPet, { status: 201 });
});

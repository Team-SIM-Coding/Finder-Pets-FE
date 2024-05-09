import { Pet } from "@/models/pet";
import { HttpHandler, HttpResponse, http } from "msw";

const pets: Pet[] = JSON.parse(localStorage.getItem("my-pets") || "[]");

export const postMyPet: HttpHandler = http.post("/api/my-pet/register", async ({ request }) => {
  const newMyPet = (await request.json()) as Pet;

  pets.push(newMyPet);

  localStorage.setItem("pets", JSON.stringify(pets));

  return HttpResponse.json(newMyPet, { status: 201 });
});

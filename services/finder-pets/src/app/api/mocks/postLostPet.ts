import { LostPet } from "@/models/lost";
import { HttpHandler, HttpResponse, http } from "msw";

const lostPets: LostPet[] = JSON.parse(localStorage.getItem("lost-pets") || "[]");

export const postLostPet: HttpHandler = http.post("/api/lost/register", async ({ request }) => {
  const newLostPet = (await request.json()) as LostPet;

  lostPets.push(newLostPet);

  localStorage.setItem("lost-pets", JSON.stringify(lostPets));

  return HttpResponse.json(newLostPet, { status: 201 });
});

import { FinderPet } from "@/models/finder";
import { HttpHandler, HttpResponse, http } from "msw";

const lostPets: FinderPet[] = JSON.parse(localStorage.getItem("lost-pets") || "[]");

export const postLostPet: HttpHandler = http.post("/api/lost/register", async ({ request }) => {
  const newLostPet = (await request.json()) as FinderPet;

  lostPets.push(newLostPet);

  localStorage.setItem("lost-pets", JSON.stringify(lostPets));

  return HttpResponse.json(newLostPet, { status: 201 });
});

import { SightedPet } from "@/models/sighted";
import { HttpHandler, HttpResponse, http } from "msw";

const sightedPets: SightedPet[] = JSON.parse(localStorage.getItem("sighted-pets") || "[]");

export const postSightedPet: HttpHandler = http.post(
  "/api/sighted/register",
  async ({ request }) => {
    const newSightedPet = (await request.json()) as SightedPet;

    sightedPets.push(newSightedPet);

    localStorage.setItem("sighted-pets", JSON.stringify(sightedPets));

    return HttpResponse.json(newSightedPet, { status: 201 });
  },
);

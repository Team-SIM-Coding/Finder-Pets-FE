import { FinderPet } from "@/models/finder";

import { HttpHandler, HttpResponse, http } from "msw";

const sightedPets: FinderPet[] = JSON.parse(localStorage.getItem("sighted-pets") || "[]");

export const postSightedPet: HttpHandler = http.post(
  "/api/sighted/register",
  async ({ request }) => {
    const newSightedPet = (await request.json()) as FinderPet;

    sightedPets.push(newSightedPet);

    localStorage.setItem("sighted-pets", JSON.stringify(sightedPets));

    return HttpResponse.json(newSightedPet, { status: 201 });
  },
);

import { PetStory } from "@/models/pet-story";
import { HttpHandler, HttpResponse, http } from "msw";

const petStories: PetStory[] = JSON.parse(localStorage.getItem("pet-stories") || "[]");

export const postPetStory: HttpHandler = http.post(
  "/api/pet-story/register",
  async ({ request }) => {
    const newPetStory = (await request.json()) as PetStory;

    petStories.push(newPetStory);

    localStorage.setItem("pet-stories", JSON.stringify(petStories));

    return HttpResponse.json(newPetStory, { status: 201 });
  },
);

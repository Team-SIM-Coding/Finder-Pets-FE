import { Board } from "@/models/board";
import { HttpHandler, HttpResponse, http } from "msw";

const petStories: Board[] = JSON.parse(localStorage.getItem("pet-stories") || "[]");

export const postPetStory: HttpHandler = http.post(
  "/api/pet-story/register",
  async ({ request }) => {
    const newPetStory = (await request.json()) as Board;

    petStories.push(newPetStory);

    localStorage.setItem("pet-stories", JSON.stringify(petStories));

    return HttpResponse.json(newPetStory, { status: 201 });
  },
);

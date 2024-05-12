import { PetStory } from "@/models/pet-story";
import { HttpHandler, HttpResponse, http } from "msw";

const petStories: PetStory[] = JSON.parse(localStorage.getItem("pet-stories") || "[]");

export const deletePetStory: HttpHandler = http.delete(
  "/api/pet-story/delete/:id",
  async ({ params }) => {
    const petStoryId = params.id;

    const petStoryIndex = petStories.findIndex((p) => p.pet_story_id === petStoryId);

    if (petStoryIndex !== -1) {
      petStories.splice(petStoryIndex, 1);

      localStorage.setItem("pet-stories", JSON.stringify(petStories));

      return HttpResponse.json({ message: `반려이야기가 삭제되었습니다.` }, { status: 200 });
    } else {
      return HttpResponse.json({ message: "반려이야기 삭제가 실패되었습니다." }, { status: 404 });
    }
  },
);

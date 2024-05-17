import { Board } from "@/models/board";
import { HttpHandler, HttpResponse, http } from "msw";

const petStories: Board[] = JSON.parse(localStorage.getItem("pet-stories") || "[]");

export const getPetStories: HttpHandler = http.get("/api/pet-story", async () => {
  if (petStories) {
    return HttpResponse.json(petStories, { status: 200 });
  } else {
    return HttpResponse.json(
      { message: "반려 이야기 리스트를 찾을 수 없습니다." },
      { status: 404 },
    );
  }
});

export const getPetStory: HttpHandler = http.get("/api/pet-story/:id", async ({ params }) => {
  const petStoryId = params.id;

  const petStory = petStories.find((p) => p.board_id === petStoryId);

  if (petStory) {
    return HttpResponse.json(petStory, { status: 200 });
  } else {
    return HttpResponse.json({ message: "반려 이야기를 찾을 수 없습니다." }, { status: 404 });
  }
});

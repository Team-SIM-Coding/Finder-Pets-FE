import { Board } from "@/models/board";

import { HttpHandler, HttpResponse, http } from "msw";

const petStories: Board[] = JSON.parse(localStorage.getItem("pet-stories") || "[]");

export const putUpdatePetStory: HttpHandler = http.put(
  "/api/pet-story/update/:id",
  async ({ params, request }) => {
    const petStoryId = params.id;
    const updatedPetStoryData = (await request.json()) as Partial<Board>;

    const petStoryIndex = petStories.findIndex((p) => p.board_id === petStoryId);

    if (petStoryIndex !== -1) {
      petStories[petStoryIndex] = { ...petStories[petStoryIndex], ...updatedPetStoryData };

      localStorage.setItem("pet-stories", JSON.stringify(petStories));

      return HttpResponse.json(petStories[petStoryIndex], { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "반려이야기 게시글을 찾을 수 없습니다." },
        { status: 404 },
      );
    }
  },
);

export const fetchUpdatePetStory = async (id: string, data: Board) => {
  const response = await fetch(`/api/pet-story/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

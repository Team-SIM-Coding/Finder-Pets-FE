import { Board } from "@/models/board";

import { HttpHandler, HttpResponse, http } from "msw";

const reviews: Board[] = JSON.parse(localStorage.getItem("reviews") || "[]");

export const putUpdateReview: HttpHandler = http.put(
  "/api/review/update/:id",
  async ({ params, request }) => {
    const reviewId = params.id;
    const updatedPetStoryData = (await request.json()) as Partial<Board>;

    const reviewIndex = reviews.findIndex((p) => p.board_id === reviewId);

    if (reviewIndex !== -1) {
      reviews[reviewIndex] = { ...reviews[reviewIndex], ...updatedPetStoryData };

      localStorage.setItem("reviews", JSON.stringify(reviews));

      return HttpResponse.json(reviews[reviewIndex], { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "재회 후기 게시글을 찾을 수 없습니다." },
        { status: 404 },
      );
    }
  },
);

export const fetchUpdateReview = async (id: string, data: Board) => {
  const response = await fetch(`/api/review/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

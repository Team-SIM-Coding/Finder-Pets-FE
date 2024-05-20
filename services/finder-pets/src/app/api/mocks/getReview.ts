import { Board } from "@/models/board";
import { HttpHandler, HttpResponse, http } from "msw";

const reviews: Board[] = JSON.parse(localStorage.getItem("reviews") || "[]");

export const getReviews: HttpHandler = http.get("/api/review", async () => {
  if (reviews) {
    return HttpResponse.json(reviews, { status: 200 });
  } else {
    return HttpResponse.json({ message: "재회 후기 리스트를 찾을 수 없습니다." }, { status: 404 });
  }
});

export const getReview: HttpHandler = http.get("/api/review/:id", async ({ params }) => {
  const reviewId = params.id;

  const review = reviews.find((p) => p.board_id === reviewId);

  if (review) {
    return HttpResponse.json(review, { status: 200 });
  } else {
    return HttpResponse.json({ message: "재회 후기를 찾을 수 없습니다." }, { status: 404 });
  }
});

export const fetchReviews = async () => {
  const response = await fetch("/api/review");

  if (response.ok) {
    console.log("재회 후기 리스트 조회 성공");
  } else {
    console.log("재회 후기 리스트 조회 실패");
  }

  return response.json();
};

export const fetchReview = async (reviewId: string[] | string): Promise<Board> => {
  const response = await fetch(`/api/review/${reviewId}`);
  if (!response.ok) {
    throw new Error("재회 후기 게시물 정보 조회에 실패했습니다.");
  }
  return response.json();
};

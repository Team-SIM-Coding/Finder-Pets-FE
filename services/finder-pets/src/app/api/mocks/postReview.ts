import { Board } from "@/models/board";
import { HttpHandler, HttpResponse, http } from "msw";

const reviews: Board[] = JSON.parse(localStorage.getItem("reviews") || "[]");

export const postReview: HttpHandler = http.post("/api/review/register", async ({ request }) => {
  const newReview = (await request.json()) as Board;

  reviews.push(newReview);

  localStorage.setItem("reviews", JSON.stringify(reviews));

  return HttpResponse.json(newReview, { status: 201 });
});

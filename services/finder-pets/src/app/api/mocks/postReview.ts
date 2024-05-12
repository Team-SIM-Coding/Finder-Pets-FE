import { Review } from "@/models/review";
import { HttpHandler, HttpResponse, http } from "msw";

const reviews: Review[] = JSON.parse(localStorage.getItem("reviews") || "[]");

export const postReview: HttpHandler = http.post("/api/review/register", async ({ request }) => {
  const newReview = (await request.json()) as Review;

  reviews.push(newReview);

  localStorage.setItem("reviews", JSON.stringify(reviews));

  return HttpResponse.json(newReview, { status: 201 });
});

import { Board } from "@/models/board";
import { HttpHandler, HttpResponse, http } from "msw";

const reviews: Board[] = JSON.parse(localStorage.getItem("reviews") || "[]");

export const deleteReview: HttpHandler = http.delete(
  "/api/review/delete/:id",
  async ({ params }) => {
    const reviewId = params.id;

    const reviewIndex = reviews.findIndex((p) => p.board_id === reviewId);

    if (reviewIndex !== -1) {
      reviews.splice(reviewIndex, 1);

      localStorage.setItem("reviews", JSON.stringify(reviews));

      return HttpResponse.json({ message: `재회 후기가 삭제되었습니다.` }, { status: 200 });
    } else {
      return HttpResponse.json({ message: "재회 후기 삭제가 실패되었습니다." }, { status: 404 });
    }
  },
);

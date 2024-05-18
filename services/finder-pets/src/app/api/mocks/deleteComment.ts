import { HttpHandler, HttpResponse, http } from "msw";
import { AnyPost, isBoard, isFinderPet, storagePaths } from "./postComment";

const createDeleteCommentHandler = (storageKey: string): HttpHandler => {
  return http.delete(`/api/${storageKey}/:id/comment/delete`, async ({ request, params }) => {
    const { id } = params;
    const { comment_id } = (await request.json()) as { comment_id: string };
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const postIndex = posts.findIndex((post) => {
      if (isFinderPet(post) && storageKey === "lost") return post.pet_id === id;
      if (isFinderPet(post) && storageKey === "sighted") return post.pet_id === id;
      if (isBoard(post) && storageKey === "review") return post.board_id === id;
      if (isBoard(post) && storageKey === "pet-story") return post.board_id === id;
      return false;
    });

    if (postIndex !== -1) {
      const commentIndex = posts[postIndex].comments?.findIndex((c) => c.comment_id === comment_id);

      if (commentIndex !== -1 && commentIndex !== undefined) {
        posts[postIndex].comments!.splice(commentIndex, 1);
        localStorage.setItem(storagePaths[storageKey], JSON.stringify(posts));
        return HttpResponse.json({ message: "댓글 삭제 성공" }, { status: 200 });
      }
    }

    return HttpResponse.json({ message: "댓글을 찾을 수 없습니다." }, { status: 404 });
  });
};

export const deleteLostComment: HttpHandler = createDeleteCommentHandler("lost");
export const deleteSightedComment: HttpHandler = createDeleteCommentHandler("sighted");
export const deleteReviewComment: HttpHandler = createDeleteCommentHandler("review");
export const deleteStoryComment: HttpHandler = createDeleteCommentHandler("pet-story");

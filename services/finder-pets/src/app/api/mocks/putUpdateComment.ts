import { AnyPost, isBoard, isFinderPet, storagePaths } from "@/api/mocks/postComment";

import { IComment } from "@/models/comment";

import { HttpHandler, HttpResponse, http } from "msw";

const createUpdateCommentHandler = (storageKey: string): HttpHandler => {
  return http.put(`/api/${storageKey}/:id/comment/update`, async ({ request, params }) => {
    const { id } = params;
    const updatedCommentData = (await request.json()) as IComment;
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const postIndex = posts.findIndex((post) => {
      if (isFinderPet(post) && storageKey === "lost") return post.pet_id === id;
      if (isFinderPet(post) && storageKey === "sighted") return post.pet_id === id;
      if (isBoard(post) && storageKey === "review") return post.board_id === id;
      if (isBoard(post) && storageKey === "pet-story") return post.board_id === id;
      return false;
    });

    if (postIndex !== -1) {
      const commentId = updatedCommentData.comment_id;
      const commentIndex = posts[postIndex].comments?.findIndex((c) => c.comment_id === commentId);

      if (commentIndex !== -1 && commentIndex !== undefined) {
        posts[postIndex].comments![commentIndex] = updatedCommentData;
        localStorage.setItem(storagePaths[storageKey], JSON.stringify(posts));
        return HttpResponse.json({ message: "댓글 수정 성공" }, { status: 200 });
      }
    }

    return HttpResponse.json({ message: "댓글을 찾을 수 없습니다." }, { status: 404 });
  });
};

export const putUpdateLostComment: HttpHandler = createUpdateCommentHandler("lost");
export const putUpdateSightedComment: HttpHandler = createUpdateCommentHandler("sighted");
export const putUpdateReviewComment: HttpHandler = createUpdateCommentHandler("review");
export const putUpdateStoryComment: HttpHandler = createUpdateCommentHandler("pet-story");

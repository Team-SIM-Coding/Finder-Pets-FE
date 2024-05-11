import { HttpHandler, HttpResponse, http } from "msw";
import {
  AnyPost,
  isLostPet,
  isPetStory,
  isReview,
  isSightedPet,
  storagePaths,
} from "./postComment";
import { IComment } from "@/models/comment";

const createUpdateCommentHandler = (storageKey: string): HttpHandler => {
  return http.put(`/api/${storageKey}/:id/comment/update`, async ({ request, params }) => {
    const { id } = params;
    const updatedCommentData = (await request.json()) as IComment;
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const postIndex = posts.findIndex((post) => {
      if (isLostPet(post) && storageKey === "lost") return post.lost_pet_id === id;
      if (isSightedPet(post) && storageKey === "sighted") return post.sighted_pet_id === id;
      if (isReview(post) && storageKey === "review") return post.review_id === id;
      if (isPetStory(post) && storageKey === "pet-story") return post.pet_story_id === id;
      return false;
    });

    if (postIndex !== -1) {
      const commentId = updatedCommentData.comment_id;
      const commentIndex = posts[postIndex].comments?.findIndex((c) => c.comment_id === commentId);

      if (commentIndex !== -1 && commentIndex !== undefined) {
        posts[postIndex].comments![commentIndex] = updatedCommentData;
        localStorage.setItem(storagePaths[storageKey], JSON.stringify(posts));
        return HttpResponse.json({ message: "Comment updated successfully." }, { status: 200 });
      }
    }

    return HttpResponse.json({ message: "Post or comment not found." }, { status: 404 });
  });
};

export const putUpdateLostComment: HttpHandler = createUpdateCommentHandler("lost");
export const putUpdateSightedComment: HttpHandler = createUpdateCommentHandler("sighted");
export const putUpdateReviewComment: HttpHandler = createUpdateCommentHandler("review");
export const putUpdateStoryComment: HttpHandler = createUpdateCommentHandler("pet-story");

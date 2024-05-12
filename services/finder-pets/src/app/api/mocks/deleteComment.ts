import { HttpHandler, HttpResponse, http } from "msw";
import {
  AnyPost,
  isLostPet,
  isPetStory,
  isReview,
  isSightedPet,
  storagePaths,
} from "./postComment";

const createDeleteCommentHandler = (storageKey: string): HttpHandler => {
  return http.delete(`/api/${storageKey}/:id/comment/delete`, async ({ request, params }) => {
    const { id } = params;
    const { comment_id } = (await request.json()) as { comment_id: string };
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const postIndex = posts.findIndex((post) => {
      if (isLostPet(post) && storageKey === "lost") return post.lost_pet_id === id;
      if (isSightedPet(post) && storageKey === "sighted") return post.sighted_pet_id === id;
      if (isReview(post) && storageKey === "review") return post.review_id === id;
      if (isPetStory(post) && storageKey === "pet-story") return post.pet_story_id === id;
      return false;
    });

    if (postIndex !== -1) {
      const commentIndex = posts[postIndex].comments?.findIndex((c) => c.comment_id === comment_id);

      if (commentIndex !== -1 && commentIndex !== undefined) {
        posts[postIndex].comments!.splice(commentIndex, 1);
        localStorage.setItem(storagePaths[storageKey], JSON.stringify(posts));
        return HttpResponse.json({ message: "Comment deleted successfully." }, { status: 200 });
      }
    }

    return HttpResponse.json({ message: "Post or comment not found." }, { status: 404 });
  });
};

export const deleteLostComment: HttpHandler = createDeleteCommentHandler("lost");
export const deleteSightedComment: HttpHandler = createDeleteCommentHandler("sighted");
export const deleteReviewComment: HttpHandler = createDeleteCommentHandler("review");
export const deleteStoryComment: HttpHandler = createDeleteCommentHandler("pet-story");

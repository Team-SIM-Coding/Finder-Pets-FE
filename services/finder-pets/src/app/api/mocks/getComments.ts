import { HttpHandler, HttpResponse, http } from "msw";
import {
  AnyPost,
  isLostPet,
  isPetStory,
  isReview,
  isSightedPet,
  storagePaths,
} from "./postComment";

const createGetCommentsHandler = (storageKey: string): HttpHandler => {
  return http.get(`/api/${storageKey}/:id/comments`, async ({ params }) => {
    const id = params.id;
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const post = posts.find((post) => {
      if (isLostPet(post) && storageKey === "lost") return post.lost_pet_id === id;
      if (isSightedPet(post) && storageKey === "sighted") return post.sighted_pet_id === id;
      if (isReview(post) && storageKey === "review") return post.review_id === id;
      if (isPetStory(post) && storageKey === "pet-story") return post.pet_story_id === id;
      return false;
    });

    if (post && post.comments) {
      return HttpResponse.json(post.comments, { status: 200 });
    }

    return HttpResponse.json(
      { message: "Comments not found or post does not exist." },
      { status: 404 },
    );
  });
};

export const getLostComments: HttpHandler = createGetCommentsHandler("lost");
export const getSightedComments: HttpHandler = createGetCommentsHandler("sighted");
export const getReviewComments: HttpHandler = createGetCommentsHandler("review");
export const getStoryComments: HttpHandler = createGetCommentsHandler("pet-story");

import { HttpHandler, HttpResponse, http } from "msw";

import { IComment } from "@/models/comment";
import { LostPet } from "@/models/lost";
import { PetStory } from "@/models/pet-story";
import { Review } from "@/models/review";
import { SightedPet } from "@/models/sighted";

export type AnyPost = LostPet | SightedPet | Review | PetStory;

export const storagePaths: Record<string, string> = {
  lost: "lost-pets",
  sighted: "sighted-pets",
  review: "reviews",
  "pet-story": "pet-stories",
};

export const isLostPet = (post: AnyPost): post is LostPet => {
  return (post as LostPet).lost_pet_id !== undefined;
};

export const isSightedPet = (post: AnyPost): post is SightedPet => {
  return (post as SightedPet).sighted_pet_id !== undefined;
};

export const isReview = (post: AnyPost): post is Review => {
  return (post as Review).review_id !== undefined;
};

export const isPetStory = (post: AnyPost): post is PetStory => {
  return (post as PetStory).pet_story_id !== undefined;
};

const createCommentHandler = (storageKey: string): HttpHandler => {
  return http.post(`/api/${storageKey}/:id/comment/register`, async ({ request, params }) => {
    const id = params.id;
    const newComment = (await request.json()) as IComment;
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const postIndex = posts.findIndex((post) => {
      if (isLostPet(post) && storageKey === "lost") return post.lost_pet_id === id;
      if (isSightedPet(post) && storageKey === "sighted") return post.sighted_pet_id === id;
      if (isReview(post) && storageKey === "review") return post.review_id === id;
      if (isPetStory(post) && storageKey === "pet-story") return post.pet_story_id === id;
      return false;
    });

    if (postIndex !== -1) {
      const targetPost = posts[postIndex];
      targetPost.comments = targetPost.comments || [];
      targetPost.comments.push(newComment);
      localStorage.setItem(storagePaths[storageKey], JSON.stringify(posts));
      return HttpResponse.json({ message: "Comment added successfully." }, { status: 201 });
    }

    return HttpResponse.json({ message: "Post not found." }, { status: 404 });
  });
};

export const postLostComment: HttpHandler = createCommentHandler("lost");
export const postSightedComment: HttpHandler = createCommentHandler("sighted");
export const postReviewComment: HttpHandler = createCommentHandler("review");
export const postStoryComment: HttpHandler = createCommentHandler("pet-story");

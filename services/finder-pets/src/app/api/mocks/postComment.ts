import { HttpHandler, HttpResponse, http } from "msw";

import { Board } from "@/models/board";
import { IComment } from "@/models/comment";
import { FinderPet } from "@/models/finder";

export type AnyPost = FinderPet | Board;

export const storagePaths: Record<string, string> = {
  lost: "lost-pets",
  sighted: "sighted-pets",
  review: "reviews",
  "pet-story": "pet-stories",
};

export const isFinderPet = (post: AnyPost): post is FinderPet => {
  return (post as FinderPet).pet_id !== undefined;
};

export const isBoard = (post: AnyPost): post is Board => {
  return (post as Board).board_id !== undefined;
};

const createCommentHandler = (storageKey: string): HttpHandler => {
  return http.post(`/api/${storageKey}/:id/comment/register`, async ({ request, params }) => {
    const id = params.id;
    const newComment = (await request.json()) as IComment;
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const postIndex = posts.findIndex((post) => {
      if (isFinderPet(post) && storageKey === "lost") return post.pet_id === id;
      if (isBoard(post) && storageKey === "review") return post.board_id === id;
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

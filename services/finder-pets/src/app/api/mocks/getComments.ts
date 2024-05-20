import { HttpHandler, HttpResponse, http } from "msw";
import { AnyPost, isBoard, isFinderPet, storagePaths } from "./postComment";
import { IComment } from "@/models/comment";

const createGetCommentsHandler = (storageKey: string): HttpHandler => {
  return http.get(`/api/${storageKey}/:id/comments`, async ({ params }) => {
    const id = params.id;
    const posts = JSON.parse(localStorage.getItem(storagePaths[storageKey]) || "[]") as AnyPost[];

    const post = posts.find((post) => {
      if (isFinderPet(post) && storageKey === "lost") return post.pet_id === id;
      if (isFinderPet(post) && storageKey === "sighted") return post.pet_id === id;
      if (isBoard(post) && storageKey === "review") return post.board_id === id;
      if (isBoard(post) && storageKey === "pet-story") return post.board_id === id;
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

export const fetchComments = async (
  storageKey: string | null,
  id: string | string[],
): Promise<IComment[]> => {
  const response = await fetch(`/api/${storageKey}/${id}/comments`);
  if (!response.ok) {
    throw new Error("댓글 리스트 조회에 실패했습니다.");
  }
  return response.json();
};

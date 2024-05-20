"use client";

import * as s from "./CommentsStyle.css";

import Comment from "./Comment";

import { fetchComments } from "@/api/mocks/getComments";

import { IComment } from "@/models/comment";

import { useQuery } from "@tanstack/react-query";

import { useParams, usePathname } from "next/navigation";

const pathStorageKey: Record<string, string> = {
  "/finder/lost": "lost",
  "/finder/sighted": "sighted",
  "/community/reunion-reviews": "review",
  "/community/pet-stories": "pet-story",
};

const CommentsList = () => {
  const { id } = useParams();
  const path = usePathname();

  const matchedKey = Object.keys(pathStorageKey).find((key) => new RegExp(key).test(path));
  const storageKey = matchedKey ? pathStorageKey[matchedKey] : null;

  const { data } = useQuery<IComment[], Error>({
    queryKey: ["comments", id],
    queryFn: () => fetchComments(storageKey, id),
  });

  return (
    <div className={s.commentsSection}>
      {data?.map((comment) => (
        <Comment
          key={comment.comment_id}
          user_image={{ img_id: "user1", url: "/images/user_profile.jpeg" }}
          user_name="이종현"
          comment_id={comment.comment_id}
          created_at={comment.created_at}
          comment={comment.comment}
        />
      ))}
    </div>
  );
};

export default CommentsList;

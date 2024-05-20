"use client";

import { fetchReviews } from "@/app/api/mocks/getReview";
import { Board } from "@/models/board";
import { useSuspenseQuery } from "@tanstack/react-query";
import ListBox from "../list/ListBox";

const ReUnionReviewsList = () => {
  const { data } = useSuspenseQuery<Board[], Error>({
    queryKey: ["reunion-reviews"],
    queryFn: fetchReviews,
  });

  return (
    <ul>
      {data.map((review) => (
        <ListBox key={review.board_id} list_info={review} />
      ))}
    </ul>
  );
};

export default ReUnionReviewsList;

"use client";

import ListBox from "@/components/list/ListBox";

import { fetchReviews } from "@/api/mocks/getReview";

import { Board } from "@/models/board";

import { useSuspenseQuery } from "@tanstack/react-query";

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

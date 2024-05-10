"use client";

import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useEffect, useState } from "react";
import ListBox from "../list/ListBox";
import { Review } from "@/models/review";

const ReUnionReviewsList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    const response = await fetch("/api/review");

    if (response.ok) {
      const data = await response.json();
      setReviews(data);
      console.log("재회 후기 리스트 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("재회 후기 리스트 조회 실패 : ", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      fetchReviews();
    })();
  }, []);

  return (
    <ul>
      {reviews.map((review) => (
        <ListBox key={review.review_id} list_info={review} />
      ))}
    </ul>
  );
};

export default ReUnionReviewsList;

import DetailSkeleton from "@/shared/c/skeleton/DetailSkeleton";
import ReUnionReviewsDetailBox from "@/components/reviews/ReUnionReviewsDetailBox";

import { Suspense } from "react";

const ReUnionReviewsDetail = () => {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <ReUnionReviewsDetailBox />
    </Suspense>
  );
};

export default ReUnionReviewsDetail;

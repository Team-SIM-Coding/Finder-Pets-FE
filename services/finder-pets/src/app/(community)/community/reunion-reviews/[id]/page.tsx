import ReUnionReviewsDetailBox from "@/components/reviews/ReUnionReviewsDetailBox";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";

const ReUnionReviewsDetail = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="재회 후기 상세 정보 로딩 중.." height="90vh" />}>
      <ReUnionReviewsDetailBox />
    </Suspense>
  );
};

export default ReUnionReviewsDetail;

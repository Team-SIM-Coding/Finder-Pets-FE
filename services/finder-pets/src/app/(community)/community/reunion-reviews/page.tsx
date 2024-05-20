import Spacing from "@/shared/components/Spacing";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import ReUnionReviewsList from "@/components/reviews/ReUnionReviewsList";

import { Suspense } from "react";

const ReUnionReviews = () => {
  return (
    <section>
      <Spacing height="142px" />
      <Suspense fallback={<LoadingSpinner text="재회 후기 리스트 로딩 중.." height="70vh" />}>
        <ReUnionReviewsList />
      </Suspense>
    </section>
  );
};

export default ReUnionReviews;

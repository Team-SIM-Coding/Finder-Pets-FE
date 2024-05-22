import ListBoxSkeletonList from "@/shared/c/skeleton/ListBoxSkeletonList";
import Spacing from "@/shared/c/spacing/Spacing";
import ReUnionReviewsList from "@/components/reviews/ReUnionReviewsList";

import { Suspense } from "react";

const ReUnionReviews = () => {
  return (
    <section>
      <Spacing height="142px" />
      <Suspense fallback={<ListBoxSkeletonList item_length={7} />}>
        <ReUnionReviewsList />
      </Suspense>
    </section>
  );
};

export default ReUnionReviews;

import Spacing from "@/shared/components/Spacing";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import PetStoryList from "@/components/pet-stories/PetStoryList";

import { Suspense } from "react";

const PetStories = () => {
  return (
    <section>
      <Spacing height="142px" />
      <Suspense fallback={<LoadingSpinner text="반려 이야기 리스트 로딩 중.." height="70vh" />}>
        <PetStoryList />
      </Suspense>
    </section>
  );
};

export default PetStories;

import ListBoxSkeletonList from "@/shared/c/skeleton/ListBoxSkeletonList";
import Spacing from "@/shared/c/spacing/Spacing";
import PetStoryList from "@/components/pet-stories/PetStoryList";

import { Suspense } from "react";

const PetStories = () => {
  return (
    <section>
      <Spacing margin="142px" />
      <Suspense fallback={<ListBoxSkeletonList item_length={7} />}>
        <PetStoryList />
      </Suspense>
    </section>
  );
};

export default PetStories;

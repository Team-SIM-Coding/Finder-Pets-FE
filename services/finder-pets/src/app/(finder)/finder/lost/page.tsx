import ListBoxSkeletonList from "@/shared/c/skeleton/ListBoxSkeletonList";
import LostPetList from "@/components/lost/LostPetList";
import Spacing from "@/shared/c/spacing/Spacing";

import { Suspense } from "react";

const Lost = () => {
  return (
    <section>
      <Spacing height="142px" />
      <Suspense fallback={<ListBoxSkeletonList item_length={7} />}>
        <LostPetList />
      </Suspense>
      <Spacing height="60px" />
    </section>
  );
};

export default Lost;

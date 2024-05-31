import ListBoxSkeletonList from "@/shared/c/skeleton/ListBoxSkeletonList";
import Spacing from "@/shared/c/spacing/Spacing";
import SightedPetList from "@/components/sighted/SightedPetList";

import { Suspense } from "react";

const Sighted = () => {
  return (
    <section>
      <Spacing margin="142px" />
      <Suspense fallback={<ListBoxSkeletonList item_length={7} />}>
        <SightedPetList />
      </Suspense>
      <Spacing margin="60px" />
    </section>
  );
};

export default Sighted;

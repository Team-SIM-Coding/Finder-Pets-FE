import Spacing from "@/shared/components/Spacing";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import LostPetList from "@/components/lost/LostPetList";

import { Suspense } from "react";

const Lost = () => {
  return (
    <section>
      <Spacing height="142px" />
      <Suspense fallback={<LoadingSpinner text="실종 동물 리스트 로딩 중.." height="70vh" />}>
        <LostPetList />
      </Suspense>
      <Spacing height="60px" />
    </section>
  );
};

export default Lost;

import SightedPetList from "@/components/sighted/SightedPetList";
import Spacing from "@/shared/components/Spacing";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";

const Sighted = () => {
  return (
    <section>
      <Spacing height="142px" />
      <Suspense fallback={<LoadingSpinner text="목격 동물 리스트 로딩 중.." height="70vh" />}>
        <SightedPetList />
      </Suspense>
      <Spacing height="60px" />
    </section>
  );
};

export default Sighted;

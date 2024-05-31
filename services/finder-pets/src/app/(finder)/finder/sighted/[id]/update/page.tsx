import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import FinderUpdateForm from "@/components/submit/finder/FinderUpdateForm";

import { Suspense } from "react";

const SightedUpdate = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="목격 동물 상세 정보 로딩 중.." height="90vh" />}>
      <FinderUpdateForm type="sighted" />
    </Suspense>
  );
};

export default SightedUpdate;

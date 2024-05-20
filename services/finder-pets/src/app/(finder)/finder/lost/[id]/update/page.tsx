import FinderUpdateForm from "@/components/submit/finder/FinderUpdateForm";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";

const LostUpdate = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="실종 동물 상세 정보 로딩 중.." height="70vh" />}>
      <FinderUpdateForm type="lost" />
    </Suspense>
  );
};

export default LostUpdate;

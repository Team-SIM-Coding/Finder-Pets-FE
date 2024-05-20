import CommunityUpdateForm from "@/components/submit/community/CommunityUpdateForm";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";

const PetStoryUpdate = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="재회 후기 상세 정보 로딩 중.." height="90vh" />}>
      <CommunityUpdateForm type="review" />
    </Suspense>
  );
};

export default PetStoryUpdate;

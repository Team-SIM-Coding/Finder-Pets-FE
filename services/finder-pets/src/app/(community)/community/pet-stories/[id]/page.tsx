"use client";

import PetStoriesDetailBox from "@/components/pet-stories/PetStoriesDetailBox";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";

const PetStoriesDetail = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="반려 이야기 상세 정보 로딩 중.." height="90vh" />}>
      <PetStoriesDetailBox />
    </Suspense>
  );
};

export default PetStoriesDetail;

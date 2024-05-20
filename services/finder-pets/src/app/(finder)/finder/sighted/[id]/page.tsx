"use client";

import SightedDetailBox from "@/components/sighted/SightedDetailBox";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";

const SightedDetail = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="목격 동물 상세 정보 로딩 중.." height="90vh" />}>
      <SightedDetailBox />;
    </Suspense>
  );
};

export default SightedDetail;

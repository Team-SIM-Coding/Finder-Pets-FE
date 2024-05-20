"use client";

import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import LostDetailBox from "@/components/lost/LostDetailBox";

import { Suspense } from "react";

const LostDetail = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="실종 동물 상세 정보 로딩 중.." height="70vh" />}>
      <LostDetailBox />
    </Suspense>
  );
};

export default LostDetail;

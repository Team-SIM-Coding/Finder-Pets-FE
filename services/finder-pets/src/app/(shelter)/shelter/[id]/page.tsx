"use client";

import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import ShelterDetailBox from "@/components/shelter/ShelterDetailBox";

import { Suspense } from "react";

const ShelterDetail = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="보호 동물 상세 정보 로딩 중.." height="90vh" />}>
      <ShelterDetailBox />;
    </Suspense>
  );
};

export default ShelterDetail;

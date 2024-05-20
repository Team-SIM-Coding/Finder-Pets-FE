"use client";

import ShelterDetailBox from "@/components/shelter/ShelterDetailBox";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";

const ShelterDetail = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="보호 동물 상세 정보 로딩 중.." height="90vh" />}>
      <ShelterDetailBox />;
    </Suspense>
  );
};

export default ShelterDetail;

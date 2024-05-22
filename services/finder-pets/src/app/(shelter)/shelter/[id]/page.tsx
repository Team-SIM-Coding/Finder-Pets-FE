"use client";

import DetailSkeleton from "@/shared/c/skeleton/DetailSkeleton";
import ShelterDetailBox from "@/components/shelter/ShelterDetailBox";

import { Suspense } from "react";

const ShelterDetail = () => {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <ShelterDetailBox />;
    </Suspense>
  );
};

export default ShelterDetail;

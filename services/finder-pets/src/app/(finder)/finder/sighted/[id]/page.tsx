"use client";

import DetailSkeleton from "@/shared/c/skeleton/DetailSkeleton";
import SightedDetailBox from "@/components/sighted/SightedDetailBox";

import { Suspense } from "react";

const SightedDetail = () => {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <SightedDetailBox />;
    </Suspense>
  );
};

export default SightedDetail;

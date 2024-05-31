"use client";

import DetailSkeleton from "@/shared/c/skeleton/DetailSkeleton";
import LostDetailBox from "@/components/lost/LostDetailBox";

import { Suspense } from "react";

const LostDetail = () => {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <LostDetailBox />
    </Suspense>
  );
};

export default LostDetail;

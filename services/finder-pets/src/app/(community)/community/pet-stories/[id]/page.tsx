"use client";

import DetailSkeleton from "@/shared/c/skeleton/DetailSkeleton";
import PetStoriesDetailBox from "@/components/pet-stories/PetStoriesDetailBox";

import { Suspense } from "react";

const PetStoriesDetail = () => {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <PetStoriesDetailBox />
    </Suspense>
  );
};

export default PetStoriesDetail;

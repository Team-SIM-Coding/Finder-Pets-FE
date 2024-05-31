"use client";

import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import MyPetProfileBox from "@/components/my-pets/MyPetProfileBox";

import { Suspense } from "react";

const MyPetDetail = () => {
  return (
    <Suspense fallback={<LoadingSpinner text="나의 반려동물 상세 정보 로딩 중.." height="90vh" />}>
      <MyPetProfileBox />
    </Suspense>
  );
};

export default MyPetDetail;

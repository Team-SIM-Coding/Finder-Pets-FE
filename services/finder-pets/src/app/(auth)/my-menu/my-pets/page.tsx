import * as cs from "@/styles/common.css";

import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import MyPetList from "@/components/my-pets/MyPetList";

import { Suspense } from "react";

const MyPets = () => {
  return (
    <section className={cs.sectionStyle}>
      <h1 className={cs.headerStyle}>나의 반려동물</h1>
      <Suspense fallback={<LoadingSpinner text="나의 반려동물 리스트 로딩 중.." height="90vh" />}>
        <MyPetList />
      </Suspense>
    </section>
  );
};

export default MyPets;

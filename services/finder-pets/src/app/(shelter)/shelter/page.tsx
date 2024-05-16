import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";
import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import ShelterList from "@/components/shelter/ShelterList";
import { Suspense } from "react";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";

const Shelter = () => {
  return (
    <section className={cs.sectionStyle}>
      <Spacing height="30px" />
      <FilterMenuBar />
      <Suspense fallback={<LoadingSpinner text="보호소 유기동물 리스트 로딩 중.." />}>
        <ShelterList />
      </Suspense>
      <Spacing height="12px" />
    </section>
  );
};

export default Shelter;

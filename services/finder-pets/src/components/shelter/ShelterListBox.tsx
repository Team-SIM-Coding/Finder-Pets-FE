"use client";

import { useFilter } from "@/contexts/FilterContext";
import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense } from "react";
import ShelterList from "./ShelterList";

const ShelterListBox = () => {
  const { filter, setFilter } = useFilter();

  return (
    <>
      <FilterMenuBar onFilterChange={setFilter} />
      <Suspense fallback={<LoadingSpinner text="보호소 유기동물 리스트 로딩 중.." />}>
        <ShelterList filter={filter} />
      </Suspense>
    </>
  );
};

export default ShelterListBox;

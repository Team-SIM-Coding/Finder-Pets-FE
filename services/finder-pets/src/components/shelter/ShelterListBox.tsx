"use client";

import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { Suspense, useCallback, useState } from "react";
import ShelterList from "./ShelterList";
import { FilterMenuFormData } from "@/utils/validation/filter";

const ShelterListBox = () => {
  const [filter, setFilter] = useState<FilterMenuFormData>({
    area: "",
    district: "",
    animal: "",
    kind: "",
  });

  const handleFilterChange = useCallback((newFilter: Partial<FilterMenuFormData>) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...newFilter,
    }));
  }, []);

  return (
    <>
      <FilterMenuBar onFilterChange={handleFilterChange} />
      <Suspense fallback={<LoadingSpinner text="보호소 유기동물 리스트 로딩 중.." />}>
        <ShelterList filter={filter} />
      </Suspense>
    </>
  );
};

export default ShelterListBox;

"use client";

import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import TabMenuBar from "@/shared/components/tab/TabMenuBar";

import { useFilter } from "@/contexts/FilterContext";

const FinderMenuBar = () => {
  const { setFilter } = useFilter();

  return (
    <>
      <FilterMenuBar onFilterChange={setFilter} />
      <TabMenuBar
        firstTab="기다림의 끝에서"
        secondTab="안전한 품으로"
        firstPath="/finder/lost"
        secondPath="/finder/sighted"
      />
    </>
  );
};

export default FinderMenuBar;

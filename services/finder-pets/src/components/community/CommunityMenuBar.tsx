"use client";

import { useFilter } from "@/contexts/FilterContext";
import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import TabMenuBar from "@/shared/components/tab/TabMenuBar";

const CommunityMenuBar = () => {
  const { setFilter } = useFilter();

  return (
    <>
      <FilterMenuBar onFilterChange={setFilter} />
      <TabMenuBar
        firstTab="재회 후기"
        secondTab="반려 이야기"
        firstPath="/community/reunion-reviews"
        secondPath="/community/pet-stories"
      />
    </>
  );
};

export default CommunityMenuBar;

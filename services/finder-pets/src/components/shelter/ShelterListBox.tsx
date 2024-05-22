"use client";

import ListBoxSkeletonList from "@/shared/c/skeleton/ListBoxSkeletonList";
import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import ShelterList from "@/components/shelter/ShelterList";

import { useFilter } from "@/contexts/FilterContext";

import { Suspense } from "react";

const ShelterListBox = () => {
  const { filter, setFilter } = useFilter();

  return (
    <>
      <FilterMenuBar onFilterChange={setFilter} />
      <Suspense fallback={<ListBoxSkeletonList item_length={7} />}>
        <ShelterList filter={filter} />
      </Suspense>
    </>
  );
};

export default ShelterListBox;

"use client";

import { FilterMenuFormData } from "@/utils/validation/filter";

import { createContext, useContext, useState, useCallback } from "react";

interface FilterContextType {
  filter: FilterMenuFormData;
  setFilter: (newFilter: Partial<FilterMenuFormData>) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter는 FilterProvider 내에서 사용해야 합니다.");
  }
  return context;
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilterState] = useState<FilterMenuFormData>({
    area: "",
    district: "",
    animal: "",
    kind: "",
  });

  const setFilter = useCallback((newFilter: Partial<FilterMenuFormData>) => {
    setFilterState((prevFilter) => ({
      ...prevFilter,
      ...newFilter,
    }));
  }, []);

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
};

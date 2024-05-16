"use client";
import * as s from "./FilterStyle.css";

import { useEffect, useState } from "react";
import { Flex } from "@design-system/react-components-layout";
import { LuListFilter } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import SelectTab from "./SelectTab";
import { FilterMenuFormData, filterMenuSchema } from "@/utils/validation/filter";
import { zodResolver } from "@hookform/resolvers/zod";

const FILTER_MENU_BAR_INCLUDES_PATHS = [
  "/shelter",
  "/finder/lost",
  "/finder/sighted",
  "/community/reunion-reviews",
  "/community/pet-stories",
];

interface Props {
  onFilterChange: (filter: Partial<FilterMenuFormData>) => void;
}

const FilterMenuBar = ({ onFilterChange }: Props) => {
  const path = usePathname();
  const [regions, setRegions] = useState<{ [key: string]: string[] }>({});
  const [cities, setCities] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch("/address/regions.json");
      const data = await response.json();
      setRegions(data);
      setCities(Object.keys(data));
    };

    fetchRegions();
  }, []);

  const methods = useForm<FilterMenuFormData>({
    resolver: zodResolver(filterMenuSchema),
    mode: "onChange",
    defaultValues: {
      area: "",
      district: "",
      animal: "",
      kind: "",
    },
  });

  const selectedCity = useWatch({ name: "area", control: methods.control });

  useEffect(() => {
    if (selectedCity && selectedCity !== "all" && regions[selectedCity]) {
      setDistricts(regions[selectedCity]);
    } else {
      setDistricts([]);
    }
  }, [selectedCity, regions]);

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    methods.setValue("area", value);
    onFilterChange({ area: value });
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    methods.setValue("district", value);
    onFilterChange({ district: value });
  };

  if (!FILTER_MENU_BAR_INCLUDES_PATHS.includes(path)) return null;

  return (
    <Flex justify="space-between" align="center" className={s.filterMenuWrap}>
      <FormProvider {...methods}>
        <form id="filter-menu-form">
          {selectedCity && selectedCity !== "all" ? (
            <SelectTab name="district" onChange={handleDistrictChange}>
              <option value="all">{selectedCity}</option>
              {districts?.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
              <option value="all">모든 지역</option>
            </SelectTab>
          ) : (
            <SelectTab name="area" onChange={handleAreaChange}>
              <option value="all">모든 지역</option>
              {cities?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </SelectTab>
          )}
          <SelectTab name="animal">
            <option value="all">모든 동물</option>
          </SelectTab>
          <SelectTab name="kind">
            <option value="all">모든 품종</option>
          </SelectTab>
        </form>
        <LuListFilter className={s.filterIconStyle} />
      </FormProvider>
    </Flex>
  );
};

export default FilterMenuBar;

"use client";
import * as s from "./FilterStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { LuListFilter } from "react-icons/lu";

import { usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
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

const FilterMenuBar = () => {
  const path = usePathname();

  const methods = useForm<FilterMenuFormData>({
    resolver: zodResolver(filterMenuSchema),
    mode: "onChange",
    defaultValues: {
      area: "",
      animal: "",
      kind: "",
    },
  });

  if (!FILTER_MENU_BAR_INCLUDES_PATHS.includes(path)) return null;

  return (
    <Flex justify="space-between" align="center" className={s.filterMenuWrap}>
      <FormProvider {...methods}>
        <form id="filter-menu-form">
          <SelectTab name="area">
            <option value="all">모든 지역</option>
          </SelectTab>
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

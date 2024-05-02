import * as s from "./FilterStyle.css";

import { LuListFilter } from "react-icons/lu";
import { Flex } from "@design-system/react-components-layout";

import SelectTab from "./SelectTab";

const FilterMenuBar = () => {
  return (
    <Flex justify="space-between" align="center" className={s.filterMenuWrap}>
      <div>
        <SelectTab>
          <option value="all" selected>
            모든 지역
          </option>
        </SelectTab>
        <SelectTab>
          <option value="all" selected>
            모든 동물
          </option>
        </SelectTab>
        <SelectTab>
          <option value="all" selected>
            모든 품종
          </option>
        </SelectTab>
      </div>
      <LuListFilter className={s.filterIconStyle} />
    </Flex>
  );
};

export default FilterMenuBar;

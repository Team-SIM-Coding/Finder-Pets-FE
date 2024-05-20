import * as cs from "@/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import ShelterListBox from "@/components/shelter/ShelterListBox";

import { FilterProvider } from "@/contexts/FilterContext";

const Shelter = () => {
  return (
    <section className={cs.sectionStyle}>
      <FilterProvider>
        <Spacing height="30px" />
        <ShelterListBox />
        <Spacing height="12px" />
      </FilterProvider>
    </section>
  );
};

export default Shelter;

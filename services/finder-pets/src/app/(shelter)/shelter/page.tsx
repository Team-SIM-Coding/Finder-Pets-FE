import * as cs from "@/shared/styles/common.css";

import ShelterListBox from "@/components/shelter/ShelterListBox";
import Spacing from "@/shared/components/Spacing";
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

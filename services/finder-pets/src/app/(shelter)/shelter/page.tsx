import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";
import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";

const Shelter = () => {
  return (
    <section className={cs.sectionStyle}>
      <Spacing height="20px" />
      <FilterMenuBar />
      <Spacing height="12px" />
    </section>
  );
};

export default Shelter;

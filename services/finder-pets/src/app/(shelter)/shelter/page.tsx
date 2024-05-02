import * as cs from "@/shared/styles/common.css";

import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import Spacing from "@/shared/components/Spacing";

const Shelter = () => {
  return (
    <section className={cs.sectionStyle}>
      <Spacing height="20px" />
      <FilterMenuBar />
    </section>
  );
};

export default Shelter;

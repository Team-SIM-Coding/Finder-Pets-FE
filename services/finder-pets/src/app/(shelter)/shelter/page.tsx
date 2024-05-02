import * as cs from "@/shared/styles/common.css";

import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import Spacing from "@/shared/components/Spacing";
import ListBox from "@/components/list/ListBox";

const Shelter = () => {
  return (
    <section className={cs.sectionStyle}>
      <Spacing height="20px" />
      <FilterMenuBar />
      <Spacing height="12px" />
      <ListBox />
      <ListBox />
      <ListBox />
      <ListBox />
    </section>
  );
};

export default Shelter;

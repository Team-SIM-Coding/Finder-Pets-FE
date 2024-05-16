import * as cs from "@/shared/styles/common.css";

import ShelterListBox from "@/components/shelter/ShelterListBox";
import Spacing from "@/shared/components/Spacing";

const Shelter = () => {
  return (
    <section className={cs.sectionStyle}>
      <Spacing height="30px" />
      <ShelterListBox />
      <Spacing height="12px" />
    </section>
  );
};

export default Shelter;

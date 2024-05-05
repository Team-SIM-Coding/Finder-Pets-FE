import * as cs from "@/shared/styles/common.css";

import MyPetList from "@/components/my-pets/MyPetList";

const MyPets = () => {
  return (
    <section className={cs.sectionStyle}>
      <h1 className={cs.headerStyle}>나의 반려동물</h1>
      <MyPetList />
    </section>
  );
};

export default MyPets;

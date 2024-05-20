import * as cs from "@/styles/common.css";

import Spacing from "@/shared/c/spacing/Spacing";
import MyMenuList from "@/components/my-menu/MyMenuList";

const MyMenu = () => {
  return (
    <section className={cs.sectionStyle}>
      <Spacing height="30px" />
      <MyMenuList />
    </section>
  );
};

export default MyMenu;

import * as cs from "@/styles/common.css";

import Spacing from "@/shared/components/Spacing";
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

import Spacing from "@/shared/components/Spacing";
import MyMenuLink from "@/shared/components/auth/MyMenuLink";
import * as cs from "@/shared/styles/common.css";

const MyMenu = () => {
  return (
    <section className={cs.sectionStyle}>
      <Spacing height="30px" />
      <MyMenuLink href="/my-menu/profile" label="프로필" />
      <Spacing height="12px" />
      <MyMenuLink href="/my-menu/my-pets" label="나의 반려동물" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="문의하기" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="건의하기" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="후원하기" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="공지사항" />
    </section>
  );
};

export default MyMenu;

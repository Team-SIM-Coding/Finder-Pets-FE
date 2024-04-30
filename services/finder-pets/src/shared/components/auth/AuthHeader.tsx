import * as s from "./AuthStyle.css";

import Image from "next/image";

interface Props {
  title: string;
}

const AuthHeader = ({ title }: Props) => {
  return (
    <>
      <Image src="/images/finder-pets-logo.png" width={200} height={50} alt="로고 이미지" />
      <h1 className={s.headerTitle}>{title}</h1>
    </>
  );
};

export default AuthHeader;

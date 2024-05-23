import * as s from "./AuthStyle.css";

import Spacing from "@/shared/c/spacing/Spacing";

import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
}

const AuthHeader = ({ title }: Props) => {
  return (
    <>
      <Link href="/">
        <Image src="/images/finder-pets-logo.png" width={200} height={50} alt="로고 이미지" />
      </Link>
      <Spacing margin="20px" />
      <h1 className={s.headerTitle}>{title}</h1>
    </>
  );
};

export default AuthHeader;

import * as s from "@/shared/styles/common.css";

import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const LinkTextButton = ({ href, text }: Props) => {
  return (
    <Link href={href} className={s.linkTextButton}>
      {text}
    </Link>
  );
};

export default LinkTextButton;

import * as cs from "@/styles/common.css";

import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const LinkTextButton = ({ href, text }: Props) => {
  return (
    <Link href={href} className={cs.linkTextButton}>
      {text}
    </Link>
  );
};

export default LinkTextButton;

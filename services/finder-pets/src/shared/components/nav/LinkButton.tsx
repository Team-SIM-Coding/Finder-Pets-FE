import Link from "next/link";

interface Props {
  href: string;
  text: string;
  className?: string;
}

const LinkButton = ({ href, text, className }: Props) => {
  return (
    <Link href={href}>
      <button className={className}>{text}</button>
    </Link>
  );
};

export default LinkButton;

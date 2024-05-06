import * as s from "./DetailStyle.css";

interface Props {
  text: string;
}

const DetailHeader = ({ text }: Props) => {
  return <h1 className={s.detailHeader}>{text}</h1>;
};

export default DetailHeader;

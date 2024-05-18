import * as s from "./DetailStyle.css";

interface Props {
  text: string | undefined;
}

const DetailSubHeader = ({ text }: Props) => {
  return <h2 className={s.detailSubHeader}>{text}</h2>;
};

export default DetailSubHeader;

import * as s from "./AuthStyle.css";

interface Props {
  text: string;
}

const ValidationMessage = ({ text }: Props) => {
  return <p className={s.ValidationMessageStyle}>{text}</p>;
};

export default ValidationMessage;

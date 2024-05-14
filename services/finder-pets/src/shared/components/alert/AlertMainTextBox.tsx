import * as s from "./AlertStyle.css";

interface Props {
  text: string;
}
const AlertMainTextBox = ({ text }: Props) => {
  return (
    <div>
      <p className={s.AlertMainText}>{text}</p>
    </div>
  );
};

export default AlertMainTextBox;

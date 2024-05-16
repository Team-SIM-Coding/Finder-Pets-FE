import * as s from "./Loading.css";

interface Props {
  text: string;
}

const LoadingSpinner = ({ text }: Props) => {
  return (
    <div className={s.centered}>
      <div className={s.spinner}></div>
      <p>{text}</p>
    </div>
  );
};

export default LoadingSpinner;

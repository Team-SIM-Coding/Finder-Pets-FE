import * as s from "./Loading.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  text: string;
  height: string;
}

const LoadingSpinner = ({ text, height }: Props) => {
  return (
    <div className={s.centered} style={assignInlineVars({ [s.loadingBoxHeight]: height })}>
      <div className={s.spinner}></div>
      <p>{text}</p>
    </div>
  );
};

export default LoadingSpinner;

import * as s from "./Loading.css";

const LoadingSpinner = () => {
  return (
    <div className={s.centered}>
      <div className={s.spinner}></div>
      <p>Mock Server 로딩 중...</p>
    </div>
  );
};

export default LoadingSpinner;

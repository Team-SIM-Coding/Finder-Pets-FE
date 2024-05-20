import Spacing from "@/shared/components/Spacing";
import MainInfoBox from "@/components/home/MainInfoBox";

const MainInfoList = () => {
  return (
    <>
      <MainInfoBox title="기다림의 끝에서" type="lost" />
      <Spacing height="20px" />
      <MainInfoBox title="안전한 품으로" type="sighted" />
    </>
  );
};

export default MainInfoList;

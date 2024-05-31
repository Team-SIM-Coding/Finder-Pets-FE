import Spacing from "@/shared/c/spacing/Spacing";
import MainInfoBox from "@/components/home/MainInfoBox";

const MainInfoList = () => {
  return (
    <>
      <MainInfoBox title="기다림의 끝에서" type="lost" />
      <Spacing margin="20px" />
      <MainInfoBox title="안전한 품으로" type="sighted" />
    </>
  );
};

export default MainInfoList;

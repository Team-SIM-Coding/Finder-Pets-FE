import { useState } from "react";
import * as s from "./NavBarStyle.css";
import { IoMdShare } from "react-icons/io";

const ShareButton = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const handleOpenPopUp = () => {
    setIsOpenPopUp((prev) => !prev);
  };

  return (
    <div className={s.shareButtonWrap}>
      <IoMdShare className={s.shareButtonIcon} onClick={handleOpenPopUp} />
      {isOpenPopUp && (
        <div className={s.shareButtonsBox}>
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            alt="카카오톡 공유 보내기 버튼"
            className={s.kakaoButtonIcon}
          />
        </div>
      )}
    </div>
  );
};

export default ShareButton;

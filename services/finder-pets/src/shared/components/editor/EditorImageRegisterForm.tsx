"use client";

import * as s from "./EditorStyle.css";

import { Input } from "@design-system/react-components-input";

import Image from "next/image";

const EditorImageRegisterForm = () => {
  return (
    <div className={s.imageRegisterFormWrap}>
      <div>
        <Image
          src="/images/user_profile.jpeg"
          alt="이미지 등록"
          width={150}
          height={150}
          className={s.imageRegisterFormImage}
        />
      </div>
      <div className={s.imageRegisterFormFileInputWrap}>
        <Input type="file" className={s.imageRegisterFormFileInput} />
      </div>
    </div>
  );
};

export default EditorImageRegisterForm;

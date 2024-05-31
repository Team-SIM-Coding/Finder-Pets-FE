"use client";

import * as s from "./EditorStyle.css";

import { Input } from "@design-system/react-components-input";

import Spacing from "@/shared/c/spacing/Spacing";

import { Image as ImageType } from "@/models/image";

import Image from "next/image";

interface Props {
  pet_image?: ImageType;
}

const EditorImageRegisterForm = ({ pet_image }: Props) => {
  return (
    <div className={s.imageRegisterFormWrap}>
      {pet_image ? (
        <>
          <Image
            src={pet_image.url}
            alt="나의 반려동물 프로필 이미지"
            width={200}
            height={200}
            className={s.imageRegisterMyPetImage}
          />
          <Spacing margin="12px" />
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default EditorImageRegisterForm;

"use client";

import * as s from "./EditorStyle.css";

import Spacing from "@/shared/c/spacing/Spacing";

import { Image as ImageType } from "@/models/image";

import Image from "next/image";

interface Props {
  images?: File[];
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditorImageRegisterForm = ({ images, onFileChange }: Props) => {
  return (
    <div className={s.imageRegisterFormWrap}>
      {images && images?.length > 0 ? (
        images.map((image, index) => (
          <div key={index}>
            <Image
              src={URL.createObjectURL(image)}
              alt="나의 반려동물 프로필 이미지"
              width={200}
              height={200}
              className={s.imageRegisterMyPetImage}
            />
            <Spacing margin="12px" />
          </div>
        ))
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
            <input
              type="file"
              className={s.imageRegisterFormFileInput}
              multiple
              onChange={onFileChange} // 파일 선택 시 handleFileChange 함수 호출
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EditorImageRegisterForm;

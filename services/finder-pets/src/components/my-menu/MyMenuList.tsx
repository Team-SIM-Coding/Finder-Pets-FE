"use client";

import authState from "@/recoil/authAtom";
import Spacing from "@/shared/components/Spacing";
import MyMenuLink from "@/shared/components/auth/MyMenuLink";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

const MyMenuList = () => {
  const { isLoggedIn } = useRecoilValue(authState);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <MyMenuLink href="/my-menu/profile" label="프로필" />
      <Spacing height="12px" />
      <MyMenuLink href="/my-menu/my-pets" label="나의 반려동물" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="문의하기" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="건의하기" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="후원하기" />
      <Spacing height="12px" />
      <MyMenuLink href="/" label="공지사항" />
    </>
  );
};

export default MyMenuList;

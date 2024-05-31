"use client";

import Spacing from "@/shared/c/spacing/Spacing";
import MyMenuLink from "@/shared/components/auth/MyMenuLink";

import authState from "@/recoil/authAtom";
import { useRecoilValue } from "recoil";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MyMenuList = () => {
  const authStateValue = useRecoilValue(authState);
  const router = useRouter();

  useEffect(() => {
    if (!authStateValue.isLoggedIn) {
      router.push("/login");
    }
  }, [authStateValue.isLoggedIn, router]);

  return (
    <>
      <MyMenuLink href={`/my-menu/profile?id=${authStateValue.userId}`} label="프로필" />
      <Spacing margin="12px" />
      <MyMenuLink href="/my-menu/my-pets" label="나의 반려동물" />
      <Spacing margin="12px" />
      <MyMenuLink href="/" label="문의하기" />
      <Spacing margin="12px" />
      <MyMenuLink href="/" label="건의하기" />
      <Spacing margin="12px" />
      <MyMenuLink href="/" label="후원하기" />
      <Spacing margin="12px" />
      <MyMenuLink href="/" label="공지사항" />
    </>
  );
};

export default MyMenuList;

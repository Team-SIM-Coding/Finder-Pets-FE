"use client";

import authState from "@/recoil/authAtom";
import { useRecoilValue } from "recoil";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const path = usePathname();
  const { isLoggedIn } = useRecoilValue(authState);

  const router = useRouter();

  if (!isLoggedIn && path.includes("/my-menu")) router.push("/login");

  return <div>{children}</div>;
};

export default ProtectedRoute;

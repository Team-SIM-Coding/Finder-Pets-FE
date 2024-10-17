import "@/shared/styles";

import NavBarBottom from "@/shared/c/nav/NavBarBottom";
import NavBarTop from "@/shared/c/nav/NavBarTop";
import ProtectedRoute from "@/shared/c/protected/ProtectedRoute";
import { MSWProvider } from "@/shared/components/MSWProvider";

import { AlertContextProvider } from "@/contexts/AlertContext";

import Providers from "@/react-query/Providers";
import RecoilRootProvider from "@/recoil/RecoilRootProvider";

import type { Metadata } from "next";
import React from "react";
import KakaoScript from "@/shared/c/kakao-share/KakaoScript";
import ProtectedProvider from "@/components/protected/ProtectedProvider";

export const metadata: Metadata = {
  title: "찾아줄개",
  description: "길 잃은 반려동물 찾기 플랫폼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ProtectedProvider>
            <RecoilRootProvider>
              <AlertContextProvider>
                <NavBarTop />
                <ProtectedRoute>{children}</ProtectedRoute>
              </AlertContextProvider>
            </RecoilRootProvider>
            <NavBarBottom />
          </ProtectedProvider>
        </Providers>
      </body>
      <KakaoScript />
    </html>
  );
}

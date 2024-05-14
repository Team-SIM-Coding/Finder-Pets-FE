import "@/shared/styles";

import React from "react";

import type { Metadata } from "next";
import NavBarTop from "@/shared/components/NavBarTop";
import NavBarBottom from "@/shared/components/NavBarBottom";
import { MSWProvider } from "@/shared/components/MSWProvider";
import RecoilRootProvider from "@/recoil/RecoilRootProvider";

export const metadata: Metadata = {
  title: "찾아줄개",
  description: "길 잃은 반려동물 찾기 플랫폼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MSWProvider>
          <RecoilRootProvider>
            <NavBarTop />
            {children}
          </RecoilRootProvider>
          <NavBarBottom />
        </MSWProvider>
      </body>
    </html>
  );
}

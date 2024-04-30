import "@/shared/styles";

import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "찾아줄개",
  description: "길 잃은 반려동물 찾기 플랫폼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

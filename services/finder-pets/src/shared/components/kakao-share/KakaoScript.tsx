"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
    kakao: Kakao;
  }
}

function KakaoScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://developers.kakao.com/sdk/js/kakao.js`;
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
        console.log("Kakao SDK initialized", window.Kakao);
      }
    };
    script.onerror = () => {
      console.error("Failed to load the Kakao SDK script.");
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export default KakaoScript;

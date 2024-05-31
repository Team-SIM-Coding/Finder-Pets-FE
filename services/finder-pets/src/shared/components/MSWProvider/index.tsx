"use client";

import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";

import { initMocking } from "../../mocks";
import { isMocking } from "../../constants";

import { useEffect, useState } from "react";

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(!isMocking());

  useEffect(() => {
    if (!isReady) {
      (async () => {
        await initMocking();

        setIsReady(true);
      })();
    }
  }, [isReady]);

  if (!isReady) return <LoadingSpinner text="Mock Sever 실행 중.." height="100vh" />;

  return children;
};

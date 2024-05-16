"use client";

import { useEffect, useState } from "react";
import { isMocking } from "../../constants";
import { initMocking } from "../../mocks";
import LoadingSpinner from "../loading/LoadingSpinner";

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

  if (!isReady) return <LoadingSpinner text="Mock Sever 실행 중.." />;

  return children;
};

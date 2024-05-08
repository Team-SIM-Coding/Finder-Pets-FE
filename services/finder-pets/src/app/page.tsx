"use client";

import * as cs from "@/shared/styles/common.css";

import MainInfoBox from "@/components/home/MainInfoBox";
import Spacing from "@/shared/components/Spacing";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useEffect } from "react";

export default function Home() {
  const fetchUser = async () => {
    const response = await fetch("/api/user");

    if (response.ok) {
      const data = await response.json();
      console.log("User data:", data);
    } else {
      console.error("Error fetching user data:", response.status);
    }
  };

  useEffect(() => {
    (async () => {
      await waitForMSWActivation();
      fetchUser();
    })();
  }, []);

  return (
    <main>
      <section className={cs.sectionStyle}>
        <MainInfoBox title="기다림의 끝에서" />
        <Spacing height="20px" />
        <MainInfoBox title="안전한 품으로" />
      </section>
    </main>
  );
}

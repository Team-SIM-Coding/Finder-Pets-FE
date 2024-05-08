"use client";

import * as cs from "@/shared/styles/common.css";

import MainInfoBox from "@/components/home/MainInfoBox";
import Spacing from "@/shared/components/Spacing";

export default function Home() {
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

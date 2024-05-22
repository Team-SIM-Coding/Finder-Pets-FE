import * as cs from "@/styles/common.css";

import MainInfoList from "@/components/home/MainInfoList";

import MainSkeletonList from "@/shared/c/skeleton/MainSkeletonList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <section className={cs.sectionStyle}>
        <Suspense fallback={<MainSkeletonList item_length={2} />}>
          <MainInfoList />
        </Suspense>
      </section>
    </main>
  );
}

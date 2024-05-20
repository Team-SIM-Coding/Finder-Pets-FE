import MainInfoList from "@/components/home/MainInfoList";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import * as cs from "@/shared/styles/common.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <section className={cs.sectionStyle}>
        <Suspense fallback={<LoadingSpinner text="데이터 로딩 중.." height="90vh" />}>
          <MainInfoList />
        </Suspense>
      </section>
    </main>
  );
}

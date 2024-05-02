import * as s from "@/components/home/MainStyle.css";

import MainInfoBox from "@/components/home/MainInfoBox";
import Spacing from "@/shared/components/Spacing";

export default function Home() {
  return (
    <main>
      <section className={s.mainSection}>
        <MainInfoBox title="기다림의 끝에서" />
        <Spacing height="20px" />
        <MainInfoBox title="안전한 품으로" />
      </section>
    </main>
  );
}

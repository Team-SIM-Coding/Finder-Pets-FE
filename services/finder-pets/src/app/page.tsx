import MainInfoList from "@/components/home/MainInfoList";
import * as cs from "@/shared/styles/common.css";

export default function Home() {
  return (
    <main>
      <section className={cs.sectionStyle}>
        <MainInfoList />
      </section>
    </main>
  );
}

import * as cs from "@/shared/styles/common.css";

import TabMenuBar from "@/shared/components/tab/TabMenuBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={cs.sectionStyle}>
      <TabMenuBar
        firstTab="기다림의 끝에서"
        secondTab="안전한 품으로"
        firstPath="/finder/lost"
        secondPath="/finder/sighted"
      />
      {children}
    </section>
  );
}

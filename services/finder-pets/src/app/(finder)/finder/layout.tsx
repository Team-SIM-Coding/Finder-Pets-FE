import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";
import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import TabMenuBar from "@/shared/components/tab/TabMenuBar";
import WriterButton from "@/shared/components/writer/WriterButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={cs.layoutSectionStyle}>
      <FilterMenuBar />
      <Spacing height="12px" />
      <TabMenuBar
        firstTab="기다림의 끝에서"
        secondTab="안전한 품으로"
        firstPath="/finder/lost"
        secondPath="/finder/sighted"
      />
      {children}
      <WriterButton />
    </section>
  );
}

import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";
import TabMenuBar from "@/shared/components/tab/TabMenuBar";
import WriterButton from "@/shared/components/writer/WriterButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <FilterMenuBar />
      <TabMenuBar
        firstTab="재회 후기"
        secondTab="반려 이야기"
        firstPath="/community/reunion-reviews"
        secondPath="/community/pet-stories"
      />
      {children}
      <WriterButton />
    </section>
  );
}

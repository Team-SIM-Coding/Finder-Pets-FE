import FinderMenuBar from "@/components/finder/FinderMenuBar";
import { FilterProvider } from "@/contexts/FilterContext";
import WriterButton from "@/shared/components/writer/WriterButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <FilterProvider>
        <FinderMenuBar />
        {children}
        <WriterButton />
      </FilterProvider>
    </section>
  );
}

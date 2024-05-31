import WriterButton from "@/shared/components/writer/WriterButton";
import FinderMenuBar from "@/components/finder/FinderMenuBar";

import { FilterProvider } from "@/contexts/FilterContext";

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

import WriterButton from "@/shared/components/writer/WriterButton";
import CommunityMenuBar from "@/components/community/CommunityMenuBar";

import { FilterProvider } from "@/contexts/FilterContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FilterProvider>
      <CommunityMenuBar />
      {children}
      <WriterButton />
    </FilterProvider>
  );
}

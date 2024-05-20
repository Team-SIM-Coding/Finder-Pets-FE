import CommunityMenuBar from "@/components/community/CommunityMenuBar";
import { FilterProvider } from "@/contexts/FilterContext";
import WriterButton from "@/shared/components/writer/WriterButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FilterProvider>
      <CommunityMenuBar />
      {children}
      <WriterButton />
    </FilterProvider>
  );
}

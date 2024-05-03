import ListBox from "@/components/list/ListBox";
import Spacing from "@/shared/components/Spacing";
import FilterMenuBar from "@/shared/components/filter/FilterMenuBar";

const Sighted = () => {
  return (
    <section>
      <Spacing height="20px" />
      <FilterMenuBar />
      <Spacing height="12px" />
      <ListBox />
      <ListBox />
      <ListBox />
      <ListBox />
      <ListBox />
    </section>
  );
};

export default Sighted;

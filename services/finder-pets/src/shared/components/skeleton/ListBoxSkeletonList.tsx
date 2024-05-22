import * as s from "./SkeletonStyle.css";

import { Flex } from "@design-system/react-components-layout";

import ListBoxSkeleton from "@/shared/c/skeleton/ListBoxSkeleton";

interface Props {
  item_length: number;
}

const ListBoxSkeletonList = ({ item_length }: Props) => {
  const items = Array.from({ length: item_length }, (_, i) => <ListBoxSkeleton key={i} />);

  return (
    <Flex direction="column" className={s.listBoxSkeletonListWrap}>
      {items}
    </Flex>
  );
};

export default ListBoxSkeletonList;

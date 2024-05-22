import { Flex } from "@design-system/react-components-layout";

import MainSkeleton from "@/components/home/MainSkeleton";

interface Props {
  item_length: number;
}

const MainSkeletonList = ({ item_length }: Props) => {
  const items = Array.from({ length: item_length }, (_, i) => <MainSkeleton key={i} />);

  return <Flex direction="column">{items}</Flex>;
};

export default MainSkeletonList;

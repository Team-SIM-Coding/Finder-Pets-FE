import * as s from "./MainStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Skeleton from "@/shared/c/skeleton/Skeleton";
import Spacing from "@/shared/c/spacing/Spacing";

const MainSkeleton = () => {
  return (
    <div className={s.skeletonBoxWrap}>
      <Flex justify="space-between">
        <Skeleton width="75%" height="20px" />
        <Skeleton width="25%" height="20px" />
      </Flex>
      <Spacing height="4px" />
      <Flex direction="column" className={s.skeletonInfoBoxWrap}>
        <Skeleton height="200px" />
        <Skeleton height="18px" />
        <Flex>
          <Skeleton width="25%" height="16px" />
          <Skeleton width="75%" height="16px" />
        </Flex>
        <Flex>
          <Skeleton width="25%" height="16px" />
          <Skeleton width="75%" height="16px" />
        </Flex>
      </Flex>
    </div>
  );
};

export default MainSkeleton;

import * as s from "./SkeletonStyle.css";

import { Flex, Divider } from "@design-system/react-components-layout";

import Skeleton from "@/shared/c/skeleton/Skeleton";
import Spacing from "@/shared/c/spacing/Spacing";

const DetailSkeleton = () => {
  return (
    <div className={s.skeletonBoxWrap}>
      <Spacing margin="60px" />
      <Skeleton width="25%" height="40px" />
      <Spacing margin="20px" />
      <Flex justify="space-between">
        <Skeleton width="75%" height="20px" />
        <Skeleton width="25%" height="20px" />
      </Flex>
      <Spacing margin="4px" />
      <Flex direction="column" className={s.skeletonInfoBoxWrap}>
        <Skeleton height="200px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Divider size={6} />
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <Skeleton width="25%" height="10px" />
          <Skeleton width="75%" height="10px" />
        </Flex>
        <Spacing margin="12px" />
        <Divider size={6} />
        <Spacing margin="12px" />
        <Skeleton width="25%" height="10px" />
        <Skeleton width="100%" height="150px" />
        <Skeleton width="25%" height="10px" />
        <Skeleton width="100%" height="300px" />
        <Spacing margin="60px" />
      </Flex>
    </div>
  );
};

export default DetailSkeleton;

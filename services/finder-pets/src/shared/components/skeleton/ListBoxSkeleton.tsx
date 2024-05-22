import * as s from "./SkeletonStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Skeleton from "@/shared/c/skeleton/Skeleton";

const ListBoxSkeleton = () => {
  return (
    <Flex>
      <div>
        <Skeleton width="100px" height="100px" className={s.listBoxImageWrap} />
      </div>
      <div>
        <Flex>
          <Skeleton width="55px" height="20px" className={s.listBoxTagStyle} />
          <Skeleton width="55px" height="20px" className={s.listBoxTagStyle} />
          <Skeleton width="55px" height="20px" className={s.listBoxTagStyle} />
          <Skeleton width="55px" height="20px" className={s.listBoxTagStyle} />
        </Flex>
        <Flex>
          <Skeleton width="80px" height="10px" />
          <Skeleton width="150px" height="10px" />
        </Flex>
        <Flex>
          <Skeleton width="80px" height="10px" />
          <Skeleton width="150px" height="10px" />
        </Flex>
        <Flex>
          <Skeleton width="80px" height="10px" />
          <Skeleton width="150px" height="10px" />
        </Flex>
        <Flex>
          <Skeleton width="80px" height="10px" />
          <Skeleton width="150px" height="10px" />
        </Flex>
      </div>
    </Flex>
  );
};

export default ListBoxSkeleton;

import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Image from "next/image";
import ListInfoBox from "./ListInfoBox";

const ListBox = () => {
  return (
    <article className={s.listBoxWrap}>
      <Flex>
        <Image
          src="/images/pet1.jpeg"
          alt="반려동물 이미지"
          width={100}
          height={100}
          className={s.listBoxImage}
        />
        <ListInfoBox />
      </Flex>
    </article>
  );
};

export default ListBox;

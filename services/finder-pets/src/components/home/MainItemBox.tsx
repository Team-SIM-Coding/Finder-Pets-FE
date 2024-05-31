import * as cs from "@/styles/common.css";
import * as s from "./MainStyle.css";

import { Flex, Text } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";

import { FinderPet } from "@/models/finder";
import { Image } from "@/models/image";

import Link from "next/link";
import { trimText } from "@/utils/trimText";

interface Props {
  item: FinderPet;
  type: string;
}

const MainItemBox = ({ item, type }: Props) => {
  const thumnail = item.images && (item.images[0] as Image);

  return (
    <Link
      href={type === "lost" ? `/finder/lost/${item.pet_id}` : `/finder/sighted/${item.pet_id}`}
      className={s.mainItemBox}
    >
      <div>
        <img
          key={thumnail ? thumnail.img_id : ""}
          src={thumnail ? thumnail.url : "/images/pet1.jpeg"}
          alt="반려동물 이미지"
          className={s.mainItemImage}
        />
      </div>
      <div className={s.mainItemDescriptionWrap}>
        <Flex>
          <h3 className={cs.thirdHeader}>
            {item.kind} / {item.color} / {item.age} / {item.weight}
          </h3>
        </Flex>
        <Spacing margin="8px" />
        <Text fontSize="sm">실종 장소 : {trimText(item?.area, 20)}</Text>
        <Spacing margin="8px" />
        <Text fontSize="sm">실종 날짜 : {item?.date?.toString()}</Text>
      </div>
    </Link>
  );
};

export default MainItemBox;

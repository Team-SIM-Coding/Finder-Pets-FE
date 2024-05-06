import * as cs from "@/shared/styles/common.css";
import * as s from "./MainStyle.css";

import { Flex, Text } from "@design-system/react-components-layout";

import { LostPets } from "@/shared/types/pet";
import Spacing from "@/shared/components/Spacing";

interface Props {
  item: LostPets;
}

const MainItemBox = ({ item }: Props) => {
  return (
    <div className={s.mainItemBox}>
      <div>
        <img
          key={item.images[0].image_id}
          src={item.images[0].image_url}
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
        <Spacing height="8px" />
        <Text fontSize="sm">실종 장소 : {item.lost_price}</Text>
        <Spacing height="8px" />
        <Text fontSize="sm">실종 날짜 : {item.lost_date.toString()}</Text>
      </div>
    </div>
  );
};

export default MainItemBox;

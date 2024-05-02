import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";

import HighLightTag from "./HighLightTag";
import ListInfoDescription from "./ListInfoDescription";

const ListInfoBox = () => {
  return (
    <div className={s.listInfoBoxWrap}>
      <Flex justify="space-around">
        <HighLightTag text="충남 공주" color="#FDD78D" />
        <HighLightTag text="개" color="#7C80E4" />
        <HighLightTag text="믹스견" color="#F18FE2" />
        <HighLightTag text="수컷" color="#52FF00" />
      </Flex>
      <div className={s.infoDescriptionWrap}>
        <ListInfoDescription label="체중" text="3kg" />
        <ListInfoDescription
          label="특징"
          text="파란색목줄착용, 겁이 많음,진드기, 털엉킴, 치석 있음"
        />
        <ListInfoDescription label="구조장소" text="공주시 우금리 터널" />
        <ListInfoDescription label="공고기간" text="2024.04.13 ~ 2024.04.30" />
      </div>
    </div>
  );
};

export default ListInfoBox;

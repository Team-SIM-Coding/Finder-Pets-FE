"use client";

import * as cs from "@/shared/styles/common.css";
import * as s from "./MainStyle.css";

import { IoIosArrowForward } from "react-icons/io";
import { Flex } from "@design-system/react-components-layout";
import MainSwiperBox from "@/shared/components/swiper/MainSwiperBox";
import { useEffect, useState } from "react";
import { LostPets } from "@/shared/types/pet";

interface Props {
  title: string;
}

const MainInfoBox = ({ title }: Props) => {
  const [items, setItems] = useState<LostPets[]>([]);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <article>
      <Flex justify="space-between" className={s.titleWrap}>
        <h2 className={cs.subHeader}>{title}</h2>
        <Flex justify="center" align="center" className={s.textAndIconWrap}>
          <span>더보기</span>
          <IoIosArrowForward className={s.iconStyle} />
        </Flex>
      </Flex>
      <MainSwiperBox items={items} />
    </article>
  );
};

export default MainInfoBox;

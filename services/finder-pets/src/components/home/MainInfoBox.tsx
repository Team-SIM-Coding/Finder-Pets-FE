"use client";

import * as cs from "@/styles/common.css";
import * as s from "./MainStyle.css";

import { Flex } from "@design-system/react-components-layout";

import MainSwiperBox from "@/shared/components/swiper/MainSwiperBox";

import { fetchLostPets } from "@/api/mocks/getLostPet";
import { fetchSightedPets } from "@/api/mocks/getSightedPet";

import { FinderPet } from "@/models/finder";

import { useSuspenseQuery } from "@tanstack/react-query";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  title: string;
  type: string;
}

const MainInfoBox = ({ title, type }: Props) => {
  const { data } = useSuspenseQuery<FinderPet[], Error>({
    queryKey: [type === "lost" ? "lost-pets" : "sighted-pets"],
    queryFn: type === "lost" ? fetchLostPets : fetchSightedPets,
  });

  return (
    <article>
      <Flex justify="space-between" className={s.titleWrap}>
        <h2 className={cs.subHeader}>{title}</h2>
        <Flex justify="center" align="center" className={s.textAndIconWrap}>
          <Link
            href={title === "기다림의 끝에서" ? "/finder/lost" : "/finder/sighted"}
            className={s.linkStyle}
          >
            <span>더보기</span>
          </Link>
          <IoIosArrowForward className={s.iconStyle} />
        </Flex>
      </Flex>
      <MainSwiperBox items={data} type={type} />
    </article>
  );
};

export default MainInfoBox;

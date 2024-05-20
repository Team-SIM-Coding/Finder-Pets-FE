"use client";

import Spacing from "@/shared/components/Spacing";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import ShelterDetailDescription from "@/components/shelter/ShelterDetailDescription";
import ShelterDetailMainHeaderLeft from "@/components/shelter/ShelterDetailMainHeaderLeft";
import ShelterDetailMainHeaderRight from "@/components/shelter/ShelterDetailMainHeaderRight";

import { getShelterPetList } from "@/api/shelter/shelterApi";

import usePetList from "@/hooks/usePetList";

import { Image } from "@/models/image";
import { ShelterPet } from "@/models/shelter";

import { flattenShelterData } from "@/utils/data/flattenShelterData";
import { formatDate } from "@/utils/format/formatDate";

import { useParams } from "next/navigation";
import { v4 as uuid } from "uuid";

const ShelterDetailBox = () => {
  const { id } = useParams();
  const randomId = uuid();

  const { data } = usePetList({
    type: "shelter-pets",
    fetchFunction: getShelterPetList,
    maxResults: 10,
    initPageToken: 1,
  });

  const flatData = flattenShelterData(data) as ShelterPet[];
  const filterData = flatData.filter((data) => data.desertionNo === id)[0];

  const imageUrls: Image[] = [];
  if (filterData.filename) imageUrls.push({ img_id: randomId, url: filterData.filename });

  return (
    <DetailSection
      header={<DetailHeader text="가족을 기다리며" />}
      main={
        <DetailMain
          header={
            <>
              <DetailMainHeader
                left={<ShelterDetailMainHeaderLeft info={filterData.careNm} />}
                right={
                  <ShelterDetailMainHeaderRight info={formatDate(filterData.noticeSdt) as string} />
                }
              />
              <Spacing height="12px" />
            </>
          }
          images={<ImageSwiperBox images={imageUrls} width={330} height={214} />}
          description={<ShelterDetailDescription pet_info={filterData} />}
        />
      }
    />
  );
};

export default ShelterDetailBox;

"use client";

import ShelterDetailDescription from "@/components/shelter/ShelterDetailDescription";
import ShelterDetailMainHeaderLeft from "@/components/shelter/ShelterDetailMainHeaderLeft";
import ShelterDetailMainHeaderRight from "@/components/shelter/ShelterDetailMainHeaderRight";
import Spacing from "@/shared/components/Spacing";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import { LostPets } from "@/shared/types/pet";
import { useEffect, useState } from "react";

const ShelterDetail = () => {
  const [items, setItems] = useState<LostPets[]>([]);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <DetailSection
      header={<DetailHeader text="가족을 기다리며" />}
      main={
        <DetailMain
          header={
            <>
              <DetailMainHeader
                left={<ShelterDetailMainHeaderLeft info="이기영 수의과 병원" />}
                right={<ShelterDetailMainHeaderRight info="2024.04.03" />}
              />
              <Spacing height="12px" />
            </>
          }
          images={<ImageSwiperBox images={items[0]?.images} />}
          description={<ShelterDetailDescription />}
        />
      }
    />
  );
};

export default ShelterDetail;

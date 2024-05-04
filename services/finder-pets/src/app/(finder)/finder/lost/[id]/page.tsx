"use client";

import LostDetailDescription from "@/components/lost/LostDetailDescription";
import LostDetailMainHeaderLeft from "@/components/lost/LostDetailMainHeaderLeft";
import LostDetailMainHeaderRight from "@/components/lost/LostDetailMainHeaderRight";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import { LostPets } from "@/shared/types/pet";
import { useEffect, useState } from "react";

const LostDetail = () => {
  const [items, setItems] = useState<LostPets[]>([]);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <DetailSection
      header={<DetailHeader text="기다림의 끝에서" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <LostDetailMainHeaderLeft
                  user_image="/images/user_profile.jpeg"
                  user_name="이종현"
                  create_at="4시간 전"
                />
              }
              right={<LostDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={items[0]?.images} />}
          description={<LostDetailDescription />}
        />
      }
    />
  );
};

export default LostDetail;

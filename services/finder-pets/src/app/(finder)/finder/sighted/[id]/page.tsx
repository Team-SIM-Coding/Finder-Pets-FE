"use client";

import SightedDetailDescription from "@/components/sighted/SightedDetailDescription";
import SightedDetailMainHeaderLeft from "@/components/sighted/SightedDetailMainHeaderLeft";
import SightedDetailMainHeaderRight from "@/components/sighted/SightedDetailMainHeaderRight";
import CommentWriter from "@/shared/components/comments/CommentWriter";
import CommentsList from "@/shared/components/comments/CommentsList";
import CommentsSection from "@/shared/components/comments/CommentsSection";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import { LostPets } from "@/shared/types/pet";
import { useEffect, useState } from "react";

const SightedDetail = () => {
  const [items, setItems] = useState<LostPets[]>([]);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <DetailSection
      header={<DetailHeader text="안전한 품으로" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <SightedDetailMainHeaderLeft
                  user_image="/images/user_profile.jpeg"
                  user_name="이종현"
                  create_at="4시간 전"
                />
              }
              right={<SightedDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={items[0]?.images} width={330} height={214} />}
          description={<SightedDetailDescription />}
        />
      }
      comments={
        <CommentsSection comment_count={2} comments={<CommentsList />} writer={<CommentWriter />} />
      }
    />
  );
};

export default SightedDetail;

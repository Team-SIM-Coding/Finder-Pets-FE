"use client";

import PetStoriesDetailDescription from "@/components/pet-stories/PetStoriesDetailDescription";
import PetStoriesDetailMainHeaderLeft from "@/components/pet-stories/PetStoriesDetailMainHeaderLeft";
import PetStoriesDetailMainHeaderRight from "@/components/pet-stories/PetStoriesDetailMainHeaderRight";
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

const PetStoriesDetail = () => {
  const [items, setItems] = useState<LostPets[]>([]);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <DetailSection
      header={<DetailHeader text="반려 이야기" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <PetStoriesDetailMainHeaderLeft
                  user_image="/images/user_profile.jpeg"
                  user_name="이종현"
                  create_at="4시간 전"
                />
              }
              right={<PetStoriesDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={items[0]?.images} />}
          description={<PetStoriesDetailDescription />}
        />
      }
      comments={
        <CommentsSection comment_count={2} comments={<CommentsList />} writer={<CommentWriter />} />
      }
    />
  );
};

export default PetStoriesDetail;

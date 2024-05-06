"use client";

import ReUnionReviewsDetailDescription from "@/components/reviews/ReUnionReviewsDetailDescription";
import ReUnionReviewsDetailMainHeaderLeft from "@/components/reviews/ReUnionReviewsDetailMainHeaderLeft";
import ReUnionReviewsDetailMainHeaderRight from "@/components/reviews/ReUnionReviewsDetailMainHeaderRight";
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

const ReUnionReviewsDetail = () => {
  const [items, setItems] = useState<LostPets[]>([]);

  useEffect(() => {
    fetch("/mocks/lost_mock_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <DetailSection
      header={<DetailHeader text="재회 후기" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <ReUnionReviewsDetailMainHeaderLeft
                  user_image="/images/user_profile.jpeg"
                  user_name="이종현"
                  create_at="4시간 전"
                />
              }
              right={<ReUnionReviewsDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={items[0]?.images} />}
          description={<ReUnionReviewsDetailDescription />}
        />
      }
      comments={
        <CommentsSection comment_count={2} comments={<CommentsList />} writer={<CommentWriter />} />
      }
    />
  );
};

export default ReUnionReviewsDetail;

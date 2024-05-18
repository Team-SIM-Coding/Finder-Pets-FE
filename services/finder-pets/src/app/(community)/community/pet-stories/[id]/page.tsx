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

const PetStoriesDetail = () => {
  return (
    <DetailSection
      header={<DetailHeader text="반려 이야기" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <PetStoriesDetailMainHeaderLeft
                  user_image={{ img_id: "user1", url: "/images/user_profile.jpeg" }}
                  user_name="이종현"
                  create_at="4시간 전"
                />
              }
              right={<PetStoriesDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={[]} width={330} height={214} />}
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

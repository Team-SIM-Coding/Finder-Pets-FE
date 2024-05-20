"use client";

import CommentWriter from "@/shared/components/comments/CommentWriter";
import CommentsList from "@/shared/components/comments/CommentsList";
import CommentsSection from "@/shared/components/comments/CommentsSection";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import ReUnionReviewsDetailDescription from "@/components/reviews/ReUnionReviewsDetailDescription";
import ReUnionReviewsDetailMainHeaderLeft from "@/components/reviews/ReUnionReviewsDetailMainHeaderLeft";
import ReUnionReviewsDetailMainHeaderRight from "@/components/reviews/ReUnionReviewsDetailMainHeaderRight";

import { fetchReview } from "@/api/mocks/getReview";

import { Board } from "@/models/board";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

const ReUnionReviewsDetailBox = () => {
  const { id } = useParams();

  const { data } = useSuspenseQuery<Board, Error>({
    queryKey: ["review", id],
    queryFn: () => fetchReview(id),
  });

  const createdAt = data?.created_at as string;

  return (
    <DetailSection
      header={<DetailHeader text="재회 후기" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <ReUnionReviewsDetailMainHeaderLeft
                  user_image={{ img_id: "user1", url: "/images/user_profile.jpeg" }}
                  user_name="이종현"
                  create_at={createdAt}
                />
              }
              right={<ReUnionReviewsDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={data?.images} width={330} height={214} />}
          description={<ReUnionReviewsDetailDescription info={data} />}
        />
      }
      comments={
        <CommentsSection comment_count={2} comments={<CommentsList />} writer={<CommentWriter />} />
      }
    />
  );
};

export default ReUnionReviewsDetailBox;

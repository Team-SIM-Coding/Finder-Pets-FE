"use client";

import { Board } from "@/models/board";
import CommentWriter from "@/shared/components/comments/CommentWriter";
import CommentsList from "@/shared/components/comments/CommentsList";
import CommentsSection from "@/shared/components/comments/CommentsSection";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ReUnionReviewsDetailDescription from "./ReUnionReviewsDetailDescription";
import ReUnionReviewsDetailMainHeaderLeft from "./ReUnionReviewsDetailMainHeaderLeft";
import ReUnionReviewsDetailMainHeaderRight from "./ReUnionReviewsDetailMainHeaderRight";
import { fetchReview } from "@/app/api/mocks/getReview";

const ReUnionReviewsDetailBox = () => {
  const { id } = useParams();

  const { data } = useQuery<Board, Error>({
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

"use client";

import CommentWriter from "@/shared/components/comments/CommentWriter";
import CommentsList from "@/shared/components/comments/CommentsList";
import CommentsSection from "@/shared/components/comments/CommentsSection";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import LostDetailDescription from "@/components/lost/LostDetailDescription";
import LostDetailMainHeaderLeft from "@/components/lost/LostDetailMainHeaderLeft";
import LostDetailMainHeaderRight from "@/components/lost/LostDetailMainHeaderRight";

import { fetchLostPet } from "@/api/mocks/getLostPet";

import { FinderPet } from "@/models/finder";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

const LostDetailBox = () => {
  const { id } = useParams();

  const { data } = useQuery<FinderPet, Error>({
    queryKey: ["lost-pet", id],
    queryFn: () => fetchLostPet(id),
  });

  const createdAt = data?.created_at as string;

  return (
    <DetailSection
      header={<DetailHeader text="기다림의 끝에서" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <LostDetailMainHeaderLeft
                  user_image={{ img_id: "user1", url: "/images/user_profile.jpeg" }}
                  user_name="이종현"
                  create_at={createdAt}
                />
              }
              right={<LostDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={data?.images} width={330} height={214} />}
          description={<LostDetailDescription info={data} />}
        />
      }
      comments={
        <CommentsSection comment_count={2} comments={<CommentsList />} writer={<CommentWriter />} />
      }
    />
  );
};

export default LostDetailBox;

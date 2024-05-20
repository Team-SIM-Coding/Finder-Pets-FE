"use client";

import { fetchSightedPet } from "@/app/api/mocks/getSightedPet";
import { FinderPet } from "@/models/finder";
import CommentWriter from "@/shared/components/comments/CommentWriter";
import CommentsList from "@/shared/components/comments/CommentsList";
import CommentsSection from "@/shared/components/comments/CommentsSection";
import DetailHeader from "@/shared/components/detail/DetailHeader";
import DetailMain from "@/shared/components/detail/DetailMain";
import DetailMainHeader from "@/shared/components/detail/DetailMainHeader";
import DetailSection from "@/shared/components/detail/DetailSection";
import ImageSwiperBox from "@/shared/components/swiper/ImageSwiperBox";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import SightedDetailDescription from "./SightedDetailDescription";
import SightedDetailMainHeaderLeft from "./SightedDetailMainHeaderLeft";
import SightedDetailMainHeaderRight from "./SightedDetailMainHeaderRight";

const SightedDetailBox = () => {
  const { id } = useParams();

  const { data } = useSuspenseQuery<FinderPet, Error>({
    queryKey: ["sighted-pet", id],
    queryFn: () => fetchSightedPet(id),
  });

  const createdAt = data?.created_at as string;

  return (
    <DetailSection
      header={<DetailHeader text="안전한 품으로" />}
      main={
        <DetailMain
          header={
            <DetailMainHeader
              left={
                <SightedDetailMainHeaderLeft
                  user_image={{ img_id: "user1", url: "/images/user_profile.jpeg" }}
                  user_name="이종현"
                  create_at={createdAt}
                />
              }
              right={<SightedDetailMainHeaderRight like_count={4} view_count={46} />}
            />
          }
          images={<ImageSwiperBox images={data?.images} width={330} height={214} />}
          description={<SightedDetailDescription info={data} />}
        />
      }
      comments={
        <CommentsSection comment_count={2} comments={<CommentsList />} writer={<CommentWriter />} />
      }
    />
  );
};

export default SightedDetailBox;

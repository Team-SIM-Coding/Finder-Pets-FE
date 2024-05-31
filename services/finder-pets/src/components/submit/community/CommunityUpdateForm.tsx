"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import FinderUpdateButton from "@/components/submit/community/CommunityUpdateButton";
import FinderUpdateMain from "@/components/submit/community/CommunityUpdateMain";

import { fetchPetStory } from "@/api/mocks/getPetStory";
import { fetchReview } from "@/api/mocks/getReview";

import { Board } from "@/models/board";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

interface Props {
  type: string;
}

const CommunityUpdateForm = ({ type }: Props) => {
  const { id } = useParams();

  const queryFn = async (): Promise<Board> => {
    if (type === "pet-story") {
      return fetchPetStory(id);
    } else {
      return fetchReview(id);
    }
  };

  const { data } = useQuery<Board, Error>({
    queryKey: [`${type === "pet-story" ? "pet-story" : "review"}`, id],
    queryFn,
  });

  return (
    <EditorSection
      title={`${type === "pet-story" ? "반려 이야기" : "재회 후기"} 게시글 수정`}
      main={<FinderUpdateMain type={type} community_info={data} />}
      footer={<FinderUpdateButton />}
    />
  );
};

export default CommunityUpdateForm;

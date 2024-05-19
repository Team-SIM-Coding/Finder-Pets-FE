"use client";

import { fetchLostPet } from "@/app/api/mocks/getLostPet";
import { fetchSightedPet } from "@/app/api/mocks/getSightedPet";
import { FinderPet } from "@/models/finder";
import EditorSection from "@/shared/components/editor/EditorSection";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import FinderUpdateButton from "./FinderUpdateButton";
import FinderUpdateMain from "./FinderUpdateMain";

interface Props {
  type: string;
}

const FinderUpdateForm = ({ type }: Props) => {
  const { id } = useParams();

  const queryFn = async (): Promise<FinderPet> => {
    if (type === "lost") {
      return fetchLostPet(id);
    } else {
      return fetchSightedPet(id);
    }
  };

  const { data } = useQuery<FinderPet, Error>({
    queryKey: [`${type === "lost" ? "lost-pet" : "sighted-pet"}`, id],
    queryFn,
  });

  return (
    <EditorSection
      title={`${type === "lost" ? "실종" : "목격"}동물 수정`}
      main={<FinderUpdateMain type={type} pet_info={data} />}
      footer={<FinderUpdateButton type={type} />}
    />
  );
};

export default FinderUpdateForm;

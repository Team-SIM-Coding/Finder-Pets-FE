"use client";

import EditorSection from "@/shared/components/editor/EditorSection";
import FinderUpdateButton from "@/components/submit/finder/FinderUpdateButton";
import FinderUpdateMain from "@/components/submit/finder/FinderUpdateMain";

import { fetchLostPet } from "@/api/mocks/getLostPet";
import { fetchSightedPet } from "@/api/mocks/getSightedPet";

import { FinderPet } from "@/models/finder";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

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

  const { data } = useSuspenseQuery<FinderPet, Error>({
    queryKey: [`${type === "lost" ? "lost-pet" : "sighted-pet"}`, id],
    queryFn,
  });

  return (
    <EditorSection
      title={`${type === "lost" ? "실종" : "목격"}동물 수정`}
      main={<FinderUpdateMain type={type} pet_info={data} />}
      footer={<FinderUpdateButton />}
    />
  );
};

export default FinderUpdateForm;

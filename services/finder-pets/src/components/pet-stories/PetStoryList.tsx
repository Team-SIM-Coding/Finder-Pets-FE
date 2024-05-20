"use client";

import ListBox from "@/components/list/ListBox";

import { fetchPetStories } from "@/api/mocks/getPetStory";

import { Board } from "@/models/board";

import { useSuspenseQuery } from "@tanstack/react-query";

const PetStoryList = () => {
  const { data } = useSuspenseQuery<Board[], Error>({
    queryKey: ["pet-stories"],
    queryFn: fetchPetStories,
  });

  return (
    <ul>
      {data.map((story) => (
        <ListBox key={story.board_id} list_info={story} />
      ))}
    </ul>
  );
};

export default PetStoryList;

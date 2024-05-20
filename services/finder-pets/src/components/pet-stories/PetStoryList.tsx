"use client";

import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";
import { useEffect, useState } from "react";
import ListBox from "../list/ListBox";
import { Board } from "@/models/board";

const PetStoryList = () => {
  const [petStories, setPetStories] = useState<Board[]>([]);

  const fetchPetStories = async () => {
    const response = await fetch("/api/pet-story");

    if (response.ok) {
      const data = await response.json();
      setPetStories(data);
      console.log("반려 이야기 리스트 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("반려 이야기 리스트 조회 실패 : ", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      fetchPetStories();
    })();
  }, []);

  return (
    <ul>
      {petStories.map((story) => (
        <ListBox key={story.board_id} list_info={story} />
      ))}
    </ul>
  );
};

export default PetStoryList;

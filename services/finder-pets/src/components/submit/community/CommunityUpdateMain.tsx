"use client";

import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/styles/common.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";

import useAlertContext from "@/hooks/useAlertContext";

import { Board } from "@/models/board";

import { CommunityBoardRegisterFormData, communityBoardSchema } from "@/utils/validation/community";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";

interface Props {
  type: string;
  community_info: Board | undefined;
}

const CommunityUpdateMain = ({ type, community_info }: Props) => {
  const [regions, setRegions] = useState<{ [key: string]: string[] }>({});
  const [cities, setCities] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [animals, setAnimals] = useState<{ [key: string]: string[] }>({});
  const [kinds, setKinds] = useState<string[]>([]);

  const { open, close } = useAlertContext();
  const router = useRouter();

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch("/address/regions.json");
      const data = await response.json();
      setRegions(data);
      setCities(Object.keys(data));
    };

    const fetchKinds = async () => {
      const response = await fetch("/pet/kind.json");
      const data = await response.json();
      setAnimals(data);
    };

    fetchRegions();
    fetchKinds();
  }, []);

  const methods = useForm<CommunityBoardRegisterFormData>({
    resolver: zodResolver(communityBoardSchema),
    mode: "onChange",
    defaultValues: {
      animal: community_info?.animal || "",
      kind: community_info?.kind || "",
      gender: community_info?.gender || "",
      weight: community_info?.weight?.toString() || "",
      area: community_info?.area || "",
      district: community_info?.district || "",
      title: community_info?.title || "",
      description: community_info?.description || "",
      images: community_info?.images || [],
    },
  });

  const { handleSubmit } = methods;

  const selectedCity = useWatch({ name: "area", control: methods.control });
  const selectedAnimal = useWatch({ name: "animal", control: methods.control });

  useEffect(() => {
    if (selectedAnimal && selectedAnimal !== "all" && animals[selectedAnimal]) {
      setKinds(animals[selectedAnimal]);
    } else {
      setKinds([]);
    }
  }, [selectedAnimal, animals]);

  useEffect(() => {
    if (selectedCity && selectedCity !== "all" && regions[selectedCity]) {
      setDistricts(regions[selectedCity]);
    } else {
      setDistricts([]);
    }
  }, [selectedCity, regions]);

  const onSubmit: SubmitHandler<CommunityBoardRegisterFormData> = async (data, event) => {
    event?.preventDefault();

    const images = [
      { img_id: "img1", url: "/images/pet1.jpeg" },
      { img_id: "img2", url: "/images/pet2.jpeg" },
      { img_id: "img3", url: "/images/pet3.jpeg" },
    ];
    const formData = { ...data, images };

    const response = await fetch(`/api/${type}/update/${community_info?.board_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "200px",
        title: `${type === "pet-story" ? "반려 이야기" : "재회 후기"} 게시글 수정`,
        main: (
          <AlertMainTextBox
            text={`${type === "pet-story" ? "반려 이야기" : "재회 후기"} 게시글 수정이 완료되었습니다.`}
          />
        ),
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push(
            `${type === "pet-story" ? "/community/pet-stories" : "/community/reunion-reviews"}`,
          );
          close();
        },
      });
    } else {
      const data = await response.json();
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="community-update-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing margin="24px" />
        <Flex>
          <EditorSelectTab name="area" label="지역1" className={es.editorSelectStyle}>
            <option value="all">모든 지역</option>
            {cities?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </EditorSelectTab>
          {selectedCity && selectedCity !== "all" && (
            <EditorSelectTab name="district" label="지역2" className={es.editorSelectStyle}>
              <option value="all">모든 지역</option>
              {districts?.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </EditorSelectTab>
          )}
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <EditorSelectTab name="animal" label="동물" className={es.editorSelectStyle}>
            <option value="all">모든 동물</option>
            <option value="개">개</option>
            <option value="고양이">고양이</option>
            <option value="기타">기타</option>
          </EditorSelectTab>
          <EditorSelectTab name="kind" label="품종" className={es.editorSelectStyle}>
            <option value="all">모든 품종</option>
            {kinds.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </EditorSelectTab>
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <EditorSelectTab name="gender" label="성별" className={es.editorSelectStyle}>
            <option value="default">미확인</option>
            <option value="M">수컷</option>
            <option value="F">암컷</option>
          </EditorSelectTab>
          <EditorInputField name="weight" label="몸무게" className={es.editorInputSmallStyle} />
        </Flex>
        <Spacing margin="12px" />
        <EditorInputField name="title" label="제목" className={es.editorInputMediumStyle} />
        <Spacing margin="12px" />
        <EditorTextAreaField
          name="description"
          label="글쓰기"
          className={es.editorTextAreaLargeStyle}
        />
        <Spacing margin="12px" />
        <EditorImageRegisterForm />
      </form>
    </FormProvider>
  );
};

export default CommunityUpdateMain;

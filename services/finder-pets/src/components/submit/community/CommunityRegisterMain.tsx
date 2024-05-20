"use client";
import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/shared/styles/common.css";

import { Flex } from "@design-system/react-components-layout";
import { v4 as uuid } from "uuid";

import Spacing from "@/shared/components/Spacing";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import { useEffect, useState } from "react";
import useAlertContext from "@/hooks/useAlertContext";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { CommunityBoardRegisterFormData, communityBoardSchema } from "@/utils/validation/community";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

const defaultValues = {
  category: "review",
  area: "",
  animal: "",
  kind: "",
  description: "",
  images: [],
};

const CommunityRegisterMain = () => {
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
    defaultValues,
  });

  const selectedCity = useWatch({ name: "area", control: methods.control });
  const selectedAnimal = useWatch({ name: "animal", control: methods.control });

  useEffect(() => {
    if (selectedCity && selectedCity !== "all" && regions[selectedCity]) {
      setDistricts(regions[selectedCity]);
    } else {
      setDistricts([]);
    }
  }, [selectedCity, regions]);

  useEffect(() => {
    if (selectedAnimal && selectedAnimal !== "all" && animals[selectedAnimal]) {
      setKinds(animals[selectedAnimal]);
    } else {
      setKinds([]);
    }
  }, [selectedAnimal, animals]);

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<CommunityBoardRegisterFormData> = async (data, event) => {
    event?.preventDefault();

    const randomId = uuid();
    const today = new Date().toISOString().slice(0, 10);
    const images = [
      { img_id: "img1", url: "/images/pet1.jpeg" },
      { img_id: "img2", url: "/images/pet2.jpeg" },
      { img_id: "img3", url: "/images/pet3.jpeg" },
    ];
    const { category, ...formDataWithoutCategory } = data;
    const formData = { ...formDataWithoutCategory, board_id: randomId, images, create_at: today };

    console.log("data", data);

    const response = await fetch(
      `/api/${category === "review" ? "review" : "pet-story"}/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );

    const categoryName = category === "review" ? "재회 후기" : "반려 이야기";

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "200px",
        title: `${categoryName} 게시물 등록`,
        main: <AlertMainTextBox text={`${categoryName} 게시물 등록이 완료되었습니다.`} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push("/community/reunion-reviews");
          close();
        },
      });
      console.log(`${categoryName} 게시물 등록 완료 : `, data);
    } else {
      const data = await response.json();
      console.log(`${categoryName} 게시물 등록 실패 : `, data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="community-register-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="24px" />
        <EditorSelectTab name="category" label="카테고리" className={es.editorSelectStyle}>
          <option value="lost">재회 후기</option>
          <option value="sighted">반려 이야기</option>
        </EditorSelectTab>
        <Spacing height="12px" />
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
        <Spacing height="12px" />
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
        <Spacing height="12px" />
        <Flex>
          <EditorSelectTab name="gender" label="성별" className={es.editorSelectStyle}>
            <option value="default">미확인</option>
            <option value="M">수컷</option>
            <option value="F">암컷</option>
          </EditorSelectTab>
          <EditorInputField name="weight" label="몸무게" className={es.editorInputSmallStyle} />
        </Flex>
        <Spacing height="12px" />
        <EditorInputField name="title" label="제목" className={es.editorInputMediumStyle} />
        <Spacing height="12px" />
        <EditorTextAreaField
          name="description"
          label="글쓰기"
          className={es.editorTextAreaLargeStyle}
        />
        <Spacing height="12px" />
        <EditorImageRegisterForm />
      </form>
    </FormProvider>
  );
};

export default CommunityRegisterMain;

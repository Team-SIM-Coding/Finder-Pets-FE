"use client";

import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/styles/common.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import EditorCheckBoxField from "@/shared/components/editor/EditorCheckBoxField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";

import useAlertContext from "@/hooks/useAlertContext";

import { FinderPet } from "@/models/finder";

import { FinderPetRegisterFormData, finderPetSchema } from "@/utils/validation/finder";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";

interface Props {
  type: string;
  pet_info: FinderPet | undefined;
}

const FinderUpdateMain = ({ type, pet_info }: Props) => {
  const [animals, setAnimals] = useState<{ [key: string]: string[] }>({});
  const [kinds, setKinds] = useState<string[]>([]);

  const { open, close } = useAlertContext();
  const router = useRouter();

  useEffect(() => {
    const fetchKinds = async () => {
      const response = await fetch("/pet/kind.json");
      const data = await response.json();
      setAnimals(data);
    };

    fetchKinds();
  }, []);

  const methods = useForm<FinderPetRegisterFormData>({
    resolver: zodResolver(finderPetSchema),
    mode: "onChange",
    defaultValues: {
      category: type,
      animal: pet_info?.animal || "",
      kind: pet_info?.kind || "",
      gender: pet_info?.gender || "",
      weight: pet_info?.weight?.toString() || "",
      color: pet_info?.color || "",
      age: pet_info?.age?.toString() || "",
      is_neutering: pet_info?.is_neutering || false,
      character: pet_info?.character || "",
      date: pet_info?.date || "",
      area: pet_info?.area || "",
      created_at: pet_info?.created_at || "",
      like_count: pet_info?.like_count || 0,
      phone: pet_info?.phone || "",
      description: pet_info?.description || "",
      images: pet_info?.images || [],
    },
  });

  const { handleSubmit } = methods;

  const selectedAnimal = useWatch({ name: "animal", control: methods.control });

  useEffect(() => {
    if (selectedAnimal && selectedAnimal !== "all" && animals[selectedAnimal]) {
      setKinds(animals[selectedAnimal]);
    } else {
      setKinds([]);
    }
  }, [selectedAnimal, animals]);

  const onSubmit: SubmitHandler<FinderPetRegisterFormData> = async (data, event) => {
    event?.preventDefault();

    const images = [
      { img_id: "img1", url: "/images/pet1.jpeg" },
      { img_id: "img2", url: "/images/pet2.jpeg" },
      { img_id: "img3", url: "/images/pet3.jpeg" },
    ];
    const formData = { ...data, images };

    const response = await fetch(`/api/${type}/update/${pet_info?.pet_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "200px",
        title: `${type === "lost" ? "실종" : "목격"} 동물 수정`,
        main: (
          <AlertMainTextBox
            text={`${type === "lost" ? "실종" : "목격"} 동물 수정이 완료되었습니다.`}
          />
        ),
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push(`${type === "lost" ? "/finder/lost" : "/finder/sighted"}`);
          close();
        },
      });
      console.log(`${type === "lost" ? "실종" : "목격"} 동물 수정 완료 : `, data);
    } else {
      const data = await response.json();
      console.log(`${type === "lost" ? "실종" : "목격"} 동물 수정 실패`, data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="finder-update-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="24px" />
        <EditorInputField
          name="date"
          label="날짜"
          type="date"
          className={es.editorInputMediumStyle}
        />
        <Spacing height="12px" />
        <EditorInputField name="area" label="장소" className={es.editorInputMediumStyle} />
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
            <option value="수컷">수컷</option>
            <option value="암컷">암컷</option>
          </EditorSelectTab>
          <EditorInputField name="weight" label="몸무게" className={es.editorInputSmallStyle} />
        </Flex>
        <Spacing height="12px" />
        <Flex>
          <EditorInputField name="color" label="털색" className={es.editorInputSmallStyle} />
          <EditorInputField name="age" label="나이" className={es.editorInputSmallStyle} />
        </Flex>
        <Spacing height="12px" />
        <EditorCheckBoxField name="is_neutering" label="중성화 여부" />
        <Spacing height="12px" />
        <EditorInputField name="character" label="특징" className={es.editorInputMediumStyle} />
        <Spacing height="12px" />
        <EditorInputField name="phone" label="연락처" className={es.editorInputMediumStyle} />
        <Spacing height="12px" />
        <EditorTextAreaField
          name="description"
          label="상세설명"
          className={es.editorTextAreaStyle}
        />
        <Spacing height="24px" />
        <EditorImageRegisterForm />
      </form>
    </FormProvider>
  );
};

export default FinderUpdateMain;

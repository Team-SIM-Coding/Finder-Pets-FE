"use client";

import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/shared/styles/common.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import EditorCheckBoxField from "@/shared/components/editor/EditorCheckBoxField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";

import useAlertContext from "@/hooks/useAlertContext";

import { MyPet } from "@/models/pet";

import { MyPetRegisterFormData, myPetSchema } from "@/utils/validation/my-pet";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";

interface Props {
  pet_info: MyPet;
}

const MyPetProfileMain = ({ pet_info }: Props) => {
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

  const methods = useForm<MyPetRegisterFormData>({
    resolver: zodResolver(myPetSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      birth_day: "",
      adoption_day: "",
      animal: "",
      kind: "",
      gender: "",
      weight: "",
      color: "",
      is_neutering: false,
      is_adoption: false,
      intro: "",
    },
  });

  const selectedAnimal = useWatch({ name: "animal", control: methods.control });

  useEffect(() => {
    if (selectedAnimal && selectedAnimal !== "all" && animals[selectedAnimal]) {
      setKinds(animals[selectedAnimal]);
    } else {
      setKinds([]);
    }
  }, [selectedAnimal, animals]);

  const { handleSubmit, setValue } = methods;

  useEffect(() => {
    (Object.keys(pet_info) as (keyof MyPetRegisterFormData)[]).forEach((key) => {
      const value = pet_info[key];
      setValue(key, typeof value === "number" ? value.toString() : value);
    });
  }, [pet_info, setValue]);

  const onSubmit: SubmitHandler<MyPetRegisterFormData> = async (data, event) => {
    event?.preventDefault();

    const formData = {
      ...data,
      my_pet_id: pet_info.my_pet_id,
      pet_image: { img_id: "pet2", url: "/images/pet4.jpeg" },
    };

    const response = await fetch(`/api/my-pets/update/${pet_info.my_pet_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "200px",
        title: "나의 반려 동물 수정",
        main: <AlertMainTextBox text={`나의 반려 동물 수정이 완료되었습니다.`} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push("/my-menu/my-pets");
          close();
        },
      });
    } else {
      const data = await response.json();
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="my-pet-form" onSubmit={handleSubmit(onSubmit)}>
        <EditorImageRegisterForm pet_image={pet_info.pet_image} />
        <EditorInputField<MyPetRegisterFormData>
          name="name"
          label="이름"
          className={es.editorInputMediumStyle}
        />
        <Spacing height="12px" />
        <EditorInputField<MyPetRegisterFormData>
          name="birth_day"
          label="생일"
          className={es.editorInputMediumStyle}
          type="date"
        />
        <Spacing height="12px" />
        <EditorInputField<MyPetRegisterFormData>
          name="adoption_day"
          label="입양일"
          className={es.editorInputMediumStyle}
          type="date"
        />
        <Spacing height="12px" />
        <Flex>
          <EditorSelectTab<MyPetRegisterFormData>
            name="animal"
            label="동물"
            className={es.editorSelectStyle}
          >
            <option value="all">모든 동물</option>
            <option value="개">개</option>
            <option value="고양이">고양이</option>
            <option value="기타">기타</option>
          </EditorSelectTab>
          <EditorSelectTab<MyPetRegisterFormData>
            name="kind"
            label="품종"
            className={es.editorSelectStyle}
          >
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
          <EditorSelectTab<MyPetRegisterFormData>
            name="gender"
            label="성별"
            className={es.editorSelectStyle}
          >
            <option value="default">미확인</option>
            <option value="수컷">수컷</option>
            <option value="암컷">암컷</option>
          </EditorSelectTab>
          <EditorInputField<MyPetRegisterFormData>
            name="weight"
            label="몸무게"
            className={es.editorInputSmallStyle}
            value={pet_info.weight?.toString()}
          />
        </Flex>
        <Spacing height="12px" />
        <EditorInputField<MyPetRegisterFormData>
          name="color"
          label="털색"
          className={es.editorInputSmallStyle}
          value={pet_info.color}
        />
        <Spacing height="12px" />
        <EditorCheckBoxField<MyPetRegisterFormData> name="is_neutering" label="중성화 여부" />
        <Spacing height="12px" />
        <EditorCheckBoxField<MyPetRegisterFormData> name="is_adoption" label="보호소 입양 여부" />
        <Spacing height="12px" />
        <EditorTextAreaField<MyPetRegisterFormData>
          name="intro"
          label="소개"
          className={es.editorTextAreaStyle}
          value={pet_info.intro}
        />
        <Spacing height="12px" />
      </form>
    </FormProvider>
  );
};

export default MyPetProfileMain;

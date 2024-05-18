import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/shared/styles/common.css";

import { Flex } from "@design-system/react-components-layout";
import { v4 as uuid } from "uuid";

import useAlertContext from "@/hooks/useAlertContext";
import { Pet } from "@/models/pet";
import Spacing from "@/shared/components/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import EditorCheckBoxField from "@/shared/components/editor/EditorCheckBoxField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";
import { FinderPetRegisterFormData, finderPetSchema } from "@/utils/validation/finder";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";

interface Props {
  pet_info: Pet;
}

const defaultValues: FinderPetRegisterFormData = {
  category: "lost",
  animal: "",
  kind: "",
  gender: "",
  weight: "",
  color: "",
  age: "",
  is_neutering: false,
  character: "",
  date: "",
  place: "",
  created_at: "",
  like_count: 0,
  phone: "",
  description: "",
  images: [],
};

const FinderRegisterMain = ({ pet_info }: Props) => {
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
    defaultValues,
  });

  const selectedAnimal = useWatch({ name: "animal", control: methods.control });

  useEffect(() => {
    if (selectedAnimal && selectedAnimal !== "all" && animals[selectedAnimal]) {
      setKinds(animals[selectedAnimal]);
    } else {
      setKinds([]);
    }
  }, [selectedAnimal, animals]);

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FinderPetRegisterFormData> = async (data, event) => {
    event?.preventDefault();

    const randomId = uuid();
    const images = [
      { img_id: "img1", url: "/images/pet1.jpeg" },
      { img_id: "img2", url: "/images/pet2.jpeg" },
      { img_id: "img3", url: "/images/pet3.jpeg" },
    ];
    const { category, ...formDataWithoutCategory } = data;
    const formData = { ...formDataWithoutCategory, pet_id: randomId, images };

    console.log("data", data);

    const response = await fetch(`/api/${category === "lost" ? "lost" : "sighted"}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const categoryName = category === "lost" ? "실종" : "목격";

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "200px",
        title: `${categoryName} 동물 등록`,
        main: <AlertMainTextBox text={`${categoryName} 동물 등록이 완료되었습니다.`} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push("/finder/lost");
          close();
        },
      });
      console.log(`${categoryName} 동물 등록 완료 : `, data);
    } else {
      const data = await response.json();
      console.log(`${categoryName} 동물 등록 실패 : `, data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="finder-register-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing height="24px" />
        <EditorSelectTab name="category" label="카테고리" className={es.editorSelectStyle}>
          <option value="lost">실종</option>
          <option value="sighted">목격</option>
        </EditorSelectTab>
        <Spacing height="12px" />
        <EditorInputField
          name="date"
          label="날짜"
          type="date"
          className={es.editorInputMediumStyle}
        />
        <Spacing height="12px" />
        <EditorInputField name="place" label="장소" className={es.editorInputMediumStyle} />
        <Spacing height="12px" />
        <Flex>
          {pet_info.animal ? (
            <EditorInputField name="animal" label="동물" className={es.editorInputSmallStyle} />
          ) : (
            <EditorSelectTab name="animal" label="동물" className={es.editorSelectStyle}>
              <option value="all">모든 동물</option>
              <option value="개">개</option>
              <option value="고양이">고양이</option>
              <option value="기타">기타</option>
            </EditorSelectTab>
          )}
          {pet_info.kind ? (
            <EditorInputField name="kind" label="품종" className={es.editorInputSmallStyle} />
          ) : (
            <EditorSelectTab name="kind" label="품종" className={es.editorSelectStyle}>
              <option value="all">모든 품종</option>
              {kinds.map((kind) => (
                <option key={kind} value={kind}>
                  {kind}
                </option>
              ))}
            </EditorSelectTab>
          )}
        </Flex>
        <Spacing height="12px" />
        <Flex>
          {pet_info.gender ? (
            <EditorInputField name="gender" label="성별" className={es.editorInputSmallStyle} />
          ) : (
            <EditorSelectTab name="gender" label="성별" className={es.editorSelectStyle}>
              <option value="default">미확인</option>
              <option value="M">수컷</option>
              <option value="F">암컷</option>
            </EditorSelectTab>
          )}
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
        <Spacing height="12px" />
        <EditorImageRegisterForm />
        <Spacing height="12px" />
      </form>
    </FormProvider>
  );
};

export default FinderRegisterMain;

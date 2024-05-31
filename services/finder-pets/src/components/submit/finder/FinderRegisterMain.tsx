import * as es from "@/shared/components/editor/EditorStyle.css";
import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import EditorCheckBoxField from "@/shared/components/editor/EditorCheckBoxField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";

import useAlertContext from "@/hooks/useAlertContext";

import { Pet } from "@/models/pet";

import { FinderPetRegisterFormData, finderPetSchema } from "@/utils/validation/finder";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPostPet } from "@/api/mocks/postLostPet";

interface Props {
  pet_info: Pet;
  scriptUrl?: string;
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
  zonecode: "",
  address: "",
  detail_address: "",
  created_at: "",
  like_count: 0,
  phone: "",
  description: "",
  images: [],
};

const FinderRegisterMain = ({ pet_info, scriptUrl }: Props) => {
  const [animals, setAnimals] = useState<{ [key: string]: string[] }>({});
  const [kinds, setKinds] = useState<string[]>([]);

  const { open, close } = useAlertContext();
  const router = useRouter();

  const openModal = useDaumPostcodePopup(scriptUrl);

  const queryClient = useQueryClient();

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

  const { handleSubmit, setValue } = methods;

  const { mutate } = useMutation({
    mutationFn: fetchPostPet,
    onSuccess: (data) => {
      console.log(data);
      const categoryName = data.category === "lost" ? "실종" : "목격";

      queryClient.refetchQueries({
        queryKey: [`${data.category === "lost" ? "lost-pets" : "sighted-pets"}`],
      });

      open({
        width: "300px",
        height: "200px",
        title: `${categoryName} 동물 등록`,
        main: <AlertMainTextBox text={`${categoryName} 동물 등록이 완료되었습니다.`} />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push(`/finder/${data.category === "lost" ? "lost" : "sighted"}`);
          close();
        },
      });
    },
  });

  const onSubmit: SubmitHandler<FinderPetRegisterFormData> = async (data, event) => {
    event?.preventDefault();

    const randomId = uuid();
    const images = [
      { img_id: "img1", url: "/images/pet1.jpeg" },
      { img_id: "img2", url: "/images/pet2.jpeg" },
      { img_id: "img3", url: "/images/pet3.jpeg" },
    ];
    const area = data.address + " " + data.detail_address;

    const formData = { ...data, pet_id: randomId, images, area };
    const { category } = formData;

    mutate({ formData, category });
  };

  const handleZipCodeButtonClick = () => {
    openModal({
      onComplete: (data) => {
        setValue("zonecode", data.zonecode);
        setValue("address", data.address);
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form id="finder-register-form" onSubmit={handleSubmit(onSubmit)}>
        <Spacing margin="24px" />
        <EditorSelectTab name="category" label="카테고리" className={es.editorSelectStyle}>
          <option value="lost">실종</option>
          <option value="sighted">목격</option>
        </EditorSelectTab>
        <Spacing margin="12px" />
        <EditorInputField
          name="date"
          label="날짜"
          type="date"
          className={es.editorInputMediumStyle}
        />
        <Spacing margin="12px" />
        <Flex align="center">
          <EditorInputField
            name="zonecode"
            label="장소"
            className={es.editorInputMediumStyle}
            placeholder="우편번호"
          />
          <Button
            className={cs.whiteButton}
            style={{
              width: "100px",
              height: "40px",
              padding: "2px",
              margin: "0 0 0 8px",
              fontSize: "14px",
            }}
            onClick={handleZipCodeButtonClick}
          >
            우편번호 찾기
          </Button>
        </Flex>
        <Spacing margin="12px" />
        <EditorInputField
          name="address"
          label=""
          className={es.editorInputMediumStyle}
          placeholder="주소"
        />
        <Spacing margin="12px" />
        <EditorInputField
          name="detail_address"
          label=""
          className={es.editorInputMediumStyle}
          placeholder="상세주소"
        />
        <Spacing margin="12px" />
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
        <Spacing margin="12px" />
        <Flex>
          {pet_info.gender ? (
            <EditorInputField name="gender" label="성별" className={es.editorInputSmallStyle} />
          ) : (
            <EditorSelectTab name="gender" label="성별" className={es.editorSelectStyle}>
              <option value="default">미확인</option>
              <option value="수컷">수컷</option>
              <option value="암컷">암컷</option>
            </EditorSelectTab>
          )}
          <EditorInputField name="weight" label="몸무게" className={es.editorInputSmallStyle} />
        </Flex>
        <Spacing margin="12px" />
        <Flex>
          <EditorInputField name="color" label="털색" className={es.editorInputSmallStyle} />
          <EditorInputField name="age" label="나이" className={es.editorInputSmallStyle} />
        </Flex>
        <Spacing margin="12px" />
        <EditorCheckBoxField name="is_neutering" label="중성화 여부" />
        <Spacing margin="12px" />
        <EditorInputField name="character" label="특징" className={es.editorInputMediumStyle} />
        <Spacing margin="12px" />
        <EditorInputField name="phone" label="연락처" className={es.editorInputMediumStyle} />
        <Spacing margin="12px" />
        <EditorTextAreaField
          name="description"
          label="상세설명"
          className={es.editorTextAreaStyle}
        />
        <Spacing margin="12px" />
        <EditorImageRegisterForm />
        <Spacing margin="12px" />
      </form>
    </FormProvider>
  );
};

export default FinderRegisterMain;

import * as es from "@/shared/components/editor/EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { MyPet } from "@/models/pet";
import Spacing from "@/shared/components/Spacing";
import EditorCheckBoxField from "@/shared/components/editor/EditorCheckBoxField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";

interface Props {
  pet_info: MyPet;
}

const MyPetProfileMain = ({ pet_info }: Props) => {
  return (
    <div>
      <EditorImageRegisterForm />
      <EditorInputField label="이름" className={es.editorInputMediumStyle} />
      <Spacing height="12px" />
      <Flex>
        <EditorInputField label="성별" className={es.editorInputSmallStyle} />
        <EditorInputField label="입양일" className={es.editorInputSmallStyle} />
      </Flex>
      <Spacing height="12px" />
      <Flex>
        {pet_info.animal ? (
          <EditorInputField label="동물" className={es.editorInputSmallStyle} />
        ) : (
          <EditorSelectTab label="동물" className={es.editorSelectStyle}>
            <option value="all">모든 동물</option>
          </EditorSelectTab>
        )}
        {pet_info.kind ? (
          <EditorInputField label="품종" className={es.editorInputSmallStyle} />
        ) : (
          <EditorSelectTab label="품종" className={es.editorSelectStyle}>
            <option value="all">모든 동물</option>
          </EditorSelectTab>
        )}
      </Flex>
      <Spacing height="12px" />
      <Flex>
        {pet_info.gender ? (
          <EditorInputField label="성별" className={es.editorInputSmallStyle} />
        ) : (
          <EditorSelectTab label="성별" className={es.editorSelectStyle}>
            <option value="default">미확인</option>
          </EditorSelectTab>
        )}
        <EditorInputField label="몸무게" className={es.editorInputSmallStyle} />
      </Flex>
      <Spacing height="12px" />
      <EditorInputField label="털색" className={es.editorInputSmallStyle} />
      <Spacing height="12px" />
      <EditorCheckBoxField label="중성화 여부" />
      <Spacing height="12px" />
      <EditorCheckBoxField label="보호소 입양 여부" />
      <Spacing height="12px" />
      <EditorTextAreaField label="소개" className={es.editorTextAreaStyle} />
      <Spacing height="12px" />
    </div>
  );
};

export default MyPetProfileMain;

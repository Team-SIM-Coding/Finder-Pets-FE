import * as es from "@/shared/components/editor/EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";

import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import Spacing from "@/shared/components/Spacing";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import { LostPets } from "@/shared/types/pet";
import EditorCheckBoxField from "@/shared/components/editor/EditorCheckBoxField";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";

interface Props {
  pet_info: LostPets;
}

const FinderRegisterMain = ({ pet_info }: Props) => {
  return (
    <div>
      <Spacing height="24px" />
      <EditorSelectTab label="카테고리" className={es.editorSelectStyle}>
        <option value="lost">실종</option>
        <option value="sighted">목격</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorInputField label="날짜" className={es.editorInputSmallStyle} />
      <Spacing height="12px" />
      <EditorInputField label="장소" className={es.editorInputMediumStyle} />
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
      <Flex>
        <EditorInputField label="털색" className={es.editorInputSmallStyle} />
        <EditorInputField label="나이" className={es.editorInputSmallStyle} />
      </Flex>
      <Spacing height="12px" />
      <EditorCheckBoxField label="중성화 여부" />
      <Spacing height="12px" />
      <EditorInputField label="특징" className={es.editorInputMediumStyle} />
      <Spacing height="12px" />
      <EditorInputField label="연락처" className={es.editorInputMediumStyle} />
      <Spacing height="12px" />
      <EditorTextAreaField label="상세설명" className={es.editorTextAreaStyle} />
      <Spacing height="12px" />
      <EditorImageRegisterForm />
      <Spacing height="12px" />
    </div>
  );
};

export default FinderRegisterMain;

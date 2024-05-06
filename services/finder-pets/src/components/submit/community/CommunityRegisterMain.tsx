import * as es from "@/shared/components/editor/EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";

const CommunityRegisterMain = () => {
  return (
    <div>
      <Spacing height="24px" />
      <EditorSelectTab label="카테고리" className={es.editorSelectStyle}>
        <option value="lost">재회 후기</option>
        <option value="sighted">반려 이야기</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorSelectTab label="지역" className={es.editorSelectStyle}>
        <option value="all">모든 지역</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <Flex>
        <EditorSelectTab label="동물" className={es.editorSelectStyle}>
          <option value="all">모든 동물</option>
        </EditorSelectTab>
        <EditorSelectTab label="지역" className={es.editorSelectStyle}>
          <option value="all">모든 품종</option>
        </EditorSelectTab>
      </Flex>
      <Spacing height="12px" />
      <Flex>
        <EditorSelectTab label="성별" className={es.editorSelectStyle}>
          <option value="male">수컷</option>
          <option value="female">암컷</option>
        </EditorSelectTab>
        <EditorInputField label="몸무게" className={es.editorInputSmallStyle} />
      </Flex>
      <Spacing height="12px" />
      <EditorInputField label="제목" className={es.editorInputMediumStyle} />
      <Spacing height="12px" />
      <EditorTextAreaField label="글쓰기" className={es.editorTextAreaLargeStyle} />
      <Spacing height="12px" />
      <EditorImageRegisterForm />
    </div>
  );
};

export default CommunityRegisterMain;

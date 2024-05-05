import * as es from "@/shared/components/editor/EditorStyle.css";

import Spacing from "@/shared/components/Spacing";
import EditorImageRegisterForm from "@/shared/components/editor/EditorImageRegisterForm";
import EditorInputField from "@/shared/components/editor/EditorInputField";
import EditorSelectTab from "@/shared/components/editor/EditorSelectTab";
import EditorTextAreaField from "@/shared/components/editor/EditorTextAreaField";

const ProfileMain = () => {
  return (
    <div>
      <EditorImageRegisterForm />
      <EditorInputField label="닉네임" className={es.editorInputMediumStyle} />
      <Spacing height="12px" />
      <EditorInputField label="휴대폰" className={es.editorInputMediumStyle} />
      <Spacing height="12px" />
      <EditorSelectTab label="관심 지역" className={es.editorSelectStyle}>
        <option value="all">모든 지역</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorSelectTab label="관심 동물" className={es.editorSelectStyle}>
        <option value="all">모든 동물</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorSelectTab label="관심 품종" className={es.editorSelectStyle}>
        <option value="all">모든 품종</option>
      </EditorSelectTab>
      <Spacing height="12px" />
      <EditorTextAreaField label="자기소개" className={es.editorTextAreaStyle} />
    </div>
  );
};

export default ProfileMain;

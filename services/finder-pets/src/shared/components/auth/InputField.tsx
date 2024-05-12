"use client";

import * as s from "./AuthStyle.css";

import { Input } from "@design-system/react-components-input";
import { Flex } from "@design-system/react-components-layout";
import ValidationMessages from "./ValidationMessages";

interface Props {
  label: string;
  type?: string;
  validationMessages?: string[];
}

const InputField = ({ label, validationMessages, type }: Props) => {
  return (
    <Flex direction="column" align="start">
      <label htmlFor="">{label}</label>
      <Input className={s.inputStyle} type={type} />
      <ValidationMessages
        firstMessage={validationMessages && validationMessages[0]}
        secondMessage={validationMessages && validationMessages[1]}
      />
    </Flex>
  );
};

export default InputField;

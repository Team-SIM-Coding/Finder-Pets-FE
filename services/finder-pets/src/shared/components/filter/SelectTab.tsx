import * as s from "./FilterStyle.css";

import { Select } from "@design-system/react-components-select";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SelectTab = ({ children }: Props) => {
  return <Select className={s.selectStyle}>{children}</Select>;
};

export default SelectTab;

import * as s from "./FilterStyle.css";

import { Select } from "@design-system/react-components-select";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const SelectTab = ({ children, className }: Props) => {
  return <Select className={className || s.selectStyle}>{children}</Select>;
};

export default SelectTab;

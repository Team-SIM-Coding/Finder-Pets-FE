import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  text: string;
  color: string;
  width?: string;
}

const HighLightTag = ({ text, color, width = "60px" }: Props) => {
  const styleVars = assignInlineVars({
    [s.highLightColor]: color,
    [s.hightLightTagWidth]: width,
  });

  return (
    <Flex justify="center" align="center" style={styleVars} className={s.highLightTagStyle}>
      <span style={styleVars} className={s.highLightTagText}>
        {text}
      </span>
    </Flex>
  );
};

export default HighLightTag;

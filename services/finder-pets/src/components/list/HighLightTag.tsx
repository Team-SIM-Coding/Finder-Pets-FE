import * as s from "./ListStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  text: string;
  color: string;
}

const HighLightTag = ({ text, color }: Props) => {
  const styleVars = assignInlineVars({
    [s.highLightColor]: color,
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

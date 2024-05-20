import * as s from "./AlertStyle.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

import BackDrop from "@/shared/components/back-drop/BackDrop";
import Spacing from "@/shared/c/spacing/Spacing";

import { ReactNode } from "react";

interface AlertProps {
  width: string;
  height: string;
  open?: boolean;
  title?: React.ReactNode;
  leftButtonLabel?: string | undefined;
  rightButtonLabel?: string | undefined;
  leftButtonStyle?: string | undefined;
  rightButtonStyle?: string | undefined;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
  onBackDropClick?: () => void;
  main?: ReactNode;
}

const Alert = ({
  width,
  height,
  open,
  title,
  leftButtonLabel = "",
  rightButtonLabel = "확인",
  leftButtonStyle,
  rightButtonStyle,
  onLeftButtonClick,
  onRightButtonClick,
  onBackDropClick,
  main,
}: AlertProps) => {
  if (open === false) {
    return null;
  }

  const alertBoxStyle = (width: string, height: string) => {
    return assignInlineVars({
      [s.alertWidth]: width,
      [s.alertHeight]: height,
    });
  };

  return (
    <BackDrop onClose={onBackDropClick}>
      <section className={s.alertWrap} style={alertBoxStyle(width, height)}>
        <Flex direction="column" justify="center" align="center" className={s.alertFlexWrap}>
          {title ? <h3 className={s.alertTitle}>{title}</h3> : null}
          <Flex align="center" className={s.alertSubFlexWrap}>
            {main}
          </Flex>
          <Flex justify="center" align="center" className={s.alertSubSecondFlexWrap}>
            {leftButtonLabel !== "" && (
              <>
                <Button className={leftButtonStyle} onClick={onLeftButtonClick}>
                  {leftButtonLabel}
                </Button>
                <Spacing width="12px" />
              </>
            )}
            <Button className={rightButtonStyle} onClick={onRightButtonClick}>
              {rightButtonLabel}
            </Button>
          </Flex>
        </Flex>
        <Spacing height="12px" />
      </section>
    </BackDrop>
  );
};

export default Alert;

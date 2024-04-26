import { forwardRef, Ref } from "react";
import { OrderListProps } from "./types";
import { vars } from "@design-system/themes";
import { Flex } from "./Flex";

const OrderedList = (props: OrderListProps, ref: Ref<HTMLOListElement>) => {
  const { spacing = 3, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      as="ol"
      ref={ref}
      direction="column"
      style={{ gap: vars.box.spacing[spacing], listStyleType: "decimal" }}
    >
      {children}
    </Flex>
  );
};

const _OrderedList = forwardRef(OrderedList);
export { _OrderedList as OrderedList };

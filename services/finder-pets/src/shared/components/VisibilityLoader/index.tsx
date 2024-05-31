"use client";

import * as s from "./style.css";

import { Spinner } from "@/shared/components/Spinner";

import {
  UseIntersectionObserverProps,
  useIntersectionObserver,
} from "@/hooks/useIntersectionObserver";

type Props = {
  children?: React.ReactNode;
} & UseIntersectionObserverProps;

export const VisibilityLoader = ({ children = <Spinner />, ...observerProps }: Props) => {
  const { ref } = useIntersectionObserver(observerProps);

  return (
    <div data-testid="VisibilityLoader" ref={ref} className={s.wrapper}>
      <div>{children}</div>
    </div>
  );
};

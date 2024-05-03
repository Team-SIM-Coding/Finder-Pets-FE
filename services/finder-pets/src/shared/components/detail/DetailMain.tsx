import { ReactNode } from "react";
import Spacing from "../Spacing";

interface Props {
  header: ReactNode;
  images: ReactNode;
  description: ReactNode;
}

const DetailMain = ({ header, images, description }: Props) => {
  return (
    <article>
      <Spacing height="12px" />
      <div>{header}</div>
      <div>{images}</div>
      <div>{description}</div>
    </article>
  );
};

export default DetailMain;

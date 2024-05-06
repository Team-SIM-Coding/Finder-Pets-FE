import * as s from "./DetailStyle.css";

import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  main: ReactNode;
  comments?: ReactNode;
}

const DetailSection = ({ header, main, comments }: Props) => {
  return (
    <section className={s.detailSection}>
      <header>{header}</header>
      <main>{main}</main>
      {comments && <footer>{comments}</footer>}
    </section>
  );
};

export default DetailSection;

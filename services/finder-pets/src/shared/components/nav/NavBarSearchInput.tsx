"use client";

import * as s from "./NavBarStyle.css";
import { IoIosSearch } from "react-icons/io";

import { Input } from "@design-system/react-components-input";

const NavBarSearchInput = () => {
  return (
    <div className={s.navTopInputWrap}>
      <Input className={s.navInput} placeholder="검색어를 입력하세요" />
      <IoIosSearch className={s.searchIcon} />
    </div>
  );
};

export default NavBarSearchInput;

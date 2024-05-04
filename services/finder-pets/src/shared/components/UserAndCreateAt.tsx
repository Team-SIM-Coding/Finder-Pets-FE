import * as s from "./UserAndCreateAtStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Image from "next/image";

interface Props {
  user_image: string;
  user_name: string;
  create_at: string;
}

const UserAndCreateAt = ({ user_image, user_name, create_at }: Props) => {
  return (
    <Flex justify="space-between" align="center">
      <div>
        <Image src={user_image} alt="유저 프로필 이미지" width={48} height={48} />
      </div>
      <Flex direction="column" align="center">
        <span className={s.nameText}>{user_name}</span>
        <span className={s.createdAtText}>{create_at}</span>
      </Flex>
    </Flex>
  );
};

export default UserAndCreateAt;

import * as s from "./UserAndCreateAtStyle.css";

import { Image as ImageType } from "@/models/image";
import { Flex } from "@design-system/react-components-layout";

import Image from "next/image";

interface Props {
  user_image: ImageType;
  user_name: string;
  width: number;
  height: number;
  create_at?: string;
}

const UserAndCreateAt = ({ user_image, user_name, width, height, create_at }: Props) => {
  return (
    <Flex justify="space-between" align="center">
      <div>
        <Image src={user_image.url} alt="유저 프로필 이미지" width={width} height={height} />
      </div>
      <Flex direction="column" align="center">
        <span className={s.nameText}>{user_name}</span>
        {create_at && <span className={s.createdAtText}>{create_at.substring(0, 10)}</span>}
      </Flex>
    </Flex>
  );
};

export default UserAndCreateAt;

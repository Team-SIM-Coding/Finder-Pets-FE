import UserAndCreateAt from "@/shared/c/nav/UserAndCreateAt";

import { Image } from "@/models/image";

interface Props {
  user_image: Image;
  user_name: string;
  create_at: string;
}

const SightedDetailMainHeaderLeft = ({ user_image, user_name, create_at }: Props) => {
  return (
    <UserAndCreateAt
      user_image={user_image}
      user_name={user_name}
      width={48}
      height={48}
      create_at={create_at}
    />
  );
};

export default SightedDetailMainHeaderLeft;

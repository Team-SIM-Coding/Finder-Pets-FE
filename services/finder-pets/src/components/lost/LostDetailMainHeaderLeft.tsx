import UserAndCreateAt from "@/shared/components/UserAndCreateAt";

interface Props {
  user_image: string;
  user_name: string;
  create_at: string;
}

const LostDetailMainHeaderLeft = ({ user_image, user_name, create_at }: Props) => {
  return <UserAndCreateAt user_image={user_image} user_name={user_name} create_at={create_at} />;
};

export default LostDetailMainHeaderLeft;

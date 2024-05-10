import LikeAndViewBar from "@/shared/components/LikeAndViewBar";

interface Props {
  like_count: number;
  view_count: number;
}

const PetStoriesDetailMainHeaderRight = ({ like_count, view_count }: Props) => {
  return <LikeAndViewBar like_count={like_count} view_count={view_count} type="pet-story" />;
};

export default PetStoriesDetailMainHeaderRight;

import LikeAndViewBar from "@/shared/c/nav/LikeAndViewBar";

interface Props {
  like_count: number;
  view_count: number;
}

const ReUnionReviewsDetailMainHeaderRight = ({ like_count, view_count }: Props) => {
  return <LikeAndViewBar like_count={like_count} view_count={view_count} type="review" />;
};

export default ReUnionReviewsDetailMainHeaderRight;

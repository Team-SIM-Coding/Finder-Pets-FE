import * as ds from "@/shared/components/detail/DetailStyle.css";

interface Props {
  info: string;
}

const ShelterDetailMainHeaderLeft = ({ info }: Props) => {
  return <div className={ds.detailText}>{info}</div>;
};

export default ShelterDetailMainHeaderLeft;

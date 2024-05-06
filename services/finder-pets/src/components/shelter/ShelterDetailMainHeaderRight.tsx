import * as ds from "@/shared/components/detail/DetailStyle.css";

interface Props {
  info: string;
}

const ShelterDetailMainHeaderRight = ({ info }: Props) => {
  return <div className={ds.detailDateText}>{info}</div>;
};

export default ShelterDetailMainHeaderRight;

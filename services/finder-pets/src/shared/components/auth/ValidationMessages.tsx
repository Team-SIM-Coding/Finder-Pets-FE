import ValidationMessage from "@/shared/components/auth/ValidationMessage";

interface Props {
  firstMessage?: string;
}

const ValidationMessages = ({ firstMessage }: Props) => {
  return (
    <div>
      <ValidationMessage text={firstMessage} />
    </div>
  );
};

export default ValidationMessages;

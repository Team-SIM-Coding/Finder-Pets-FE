import ValidationMessage from "./ValidationMessage";

interface Props {
  firstMessage?: string | undefined;
  secondMessage?: string | undefined;
}

const ValidationMessages = ({ firstMessage, secondMessage }: Props) => {
  return (
    <div>
      <ValidationMessage text={firstMessage} />
      {secondMessage && <ValidationMessage text={secondMessage} />}
    </div>
  );
};

export default ValidationMessages;

export const trimText = (text: string | undefined, maxLength = 25) => {
  if (text && text?.length <= maxLength) {
    return text;
  } else {
    return text?.substring(0, maxLength).trim() + "...";
  }
};

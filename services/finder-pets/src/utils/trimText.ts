export const trimText = (text: string, maxLength = 25) => {
  if (text?.length <= maxLength) {
    return text;
  } else {
    return text?.substring(0, maxLength).trim() + "...";
  }
};

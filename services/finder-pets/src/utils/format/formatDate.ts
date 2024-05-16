export const formatDate = (dateStr: string | undefined): string | undefined => {
  if (dateStr?.length === 8) {
    return `${dateStr.substring(0, 4)}.${dateStr.substring(4, 6)}.${dateStr.substring(6, 8)}`;
  }
  return dateStr;
};

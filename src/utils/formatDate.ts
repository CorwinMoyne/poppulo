export const formatDate = (date: string) => {
  if (!date.includes("/")) {
    if (date.includes("-")) {
      return `${date} B.C.`;
    } else {
      return `${date} A.D.`;
    }
  }
  const tokens = date.split("/");
  return `${tokens[2]}/${tokens[1]}/${tokens[0]}`;
};

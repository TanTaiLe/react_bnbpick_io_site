export const capitalizeFirstLetter = (string: string) => {
  const splitStr = string?.toLowerCase()?.split(" ");
  for (let i = 0; i < splitStr?.length; i++) {
    splitStr[i] =
      splitStr[i]?.charAt(0)?.toUpperCase() + splitStr[i]?.substring(1);
  }
  return splitStr?.join(" ");
};

export const numberFormat = (value: number | undefined, digits: number) => {
  return value?.toLocaleString("en", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })
}
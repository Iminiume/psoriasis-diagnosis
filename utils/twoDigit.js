export function TwoDigitNumber(number) {
  if (typeof number !== "number") return;
  return number <= 9 ? `0${number}` : number;
}

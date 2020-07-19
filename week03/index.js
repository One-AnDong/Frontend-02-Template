function StringToNumber(val) {
  if (typeof val !== "string") return NaN;
  return +val;
}
function NumberToString(val) {
  if (typeof val !== "number") return val.toString();
  return val + "";
}

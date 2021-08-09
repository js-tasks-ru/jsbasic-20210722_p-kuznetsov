function checkSpam(str) {
  let result = false;
  strLower = str.toLowerCase();
  if (strLower.includes("1xbet")
  || strLower.includes("xxx")) {
    result = true;
  }
  return result;
}

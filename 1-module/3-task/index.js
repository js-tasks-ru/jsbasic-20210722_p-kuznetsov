function ucFirst(str) {
  
  let result = "";
  
  if (str != "") {
    firstLetter = str.slice(0, 1).toUpperCase();
    lastPart = str.slice(1);
    result = firstLetter + lastPart;
  }
 return result; 
}

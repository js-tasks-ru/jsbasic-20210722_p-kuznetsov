function truncate(str, maxlength) {

  if (str.length <= maxlength){
    result = str;
  }
  else{
    result = str.slice(0, maxlength-1) + "…";
  }

  return result;
  
}

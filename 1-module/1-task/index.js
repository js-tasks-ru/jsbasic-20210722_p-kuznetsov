function factorial(n) {
  let i = 1;
  let result = 1;
  while (i < n+1){
    result =  result * i;
    i++; 
  }
  return result;  
}

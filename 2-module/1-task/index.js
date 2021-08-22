function sumSalary(salaries) {
  let result = 0;
  for(let prop in salaries){
    if (typeof salaries[prop] === "number" 
    && ! isNaN(salaries[prop]) 
    && isFinite(salaries[prop])){
      result = result + salaries[prop];
    }
  }
  return result;
}

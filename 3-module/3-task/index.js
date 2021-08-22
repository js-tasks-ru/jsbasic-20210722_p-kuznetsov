function camelize(str) {
  let myArray = str.split('-');
  if (myArray.length > 0){
    let result = myArray[0];

    for (i = 1; i < myArray.length; i++){
      result = result + myArray[i][0].toUpperCase() + myArray[i].slice(1);
    }
    return result;
  }
}

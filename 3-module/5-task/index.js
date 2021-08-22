function getMinMax(str) {
 let array = str.split(' ');
 let filteredArray = array.filter(elem => ! isNaN(Number(elem)));
 filteredArray.sort((a, b) => a - b);
 let result = {
   min : Number(filteredArray[0]),
   max : Number(filteredArray[filteredArray.length - 1])
 }; 
return result;
}

module.exports = {
findMinMax:  function (array){
    min = array[0] ;
    max = array[0];
    for (var i = 0; i < array.length; i++) { 
 if (array[i] > max) {
   max = array[i];
 }
 if (array[i] < min) {
   min = array[i];
 }
}
 var resultsArray = []
 resultsArray.push(min)
 resultsArray.push(max)
 if (min === max){
   return [max]
 }
  return resultsArray
}
}

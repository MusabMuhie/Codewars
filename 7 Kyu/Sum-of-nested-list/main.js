/*
Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/


//My Solution
const sumNested = arr => {
    //
    let sum=0;
    arr.forEach(el=>{
      if(Array.isArray(el)){
        sum+=sumNested(el)
      }else{
        sum+=el
      }
    })
    return sum
  };
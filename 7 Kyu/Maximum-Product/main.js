/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .


*/


//My Solution
function adjacentElementsProduct(array) {
    // max product
    let prod=array[0]*array[1];
    array.forEach((el,index)=>{
      if(el*array[index+1]>=prod){
        prod=el*array[index+1]
      }
    })
    return prod
  }
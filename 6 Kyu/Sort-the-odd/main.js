/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/


//My Solution
function sortArray(array) {
    // Return a sorted array.
    let sortedOdd= array.filter(el=>el%2!=0).sort((a,b)=>a-b)
    let newArr=[]
    array.forEach(el=>{
      el%2==0 ? newArr.push(el) : newArr.push(sortedOdd[0]) && sortedOdd.shift()  
    })
    return newArr
  }
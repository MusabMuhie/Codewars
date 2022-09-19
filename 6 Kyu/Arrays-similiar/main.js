/*
Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false

*/

//My Solution
function arraysSimilar(arr1, arr2) {
    // TODO: Implement your arraysSimilar 
    
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
   
   return arr1.length===arr2.length && arr1.every((val, index) => val === arr2[index]);
   
  }
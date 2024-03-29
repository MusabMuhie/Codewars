/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/



//PREP
//P : A sequence of letters or numbers 
//R : a list of items without the same elements next to each other
//E : uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//P :create new array. loop through sequence plugging in the current element only if the previous element in the new array is not the same


//MY SOLUTION
var uniqueInOrder=function(iterable){
    let arr=[]
    for(i=0;i<iterable.length;i++){
      if(arr[arr.length-1]!=iterable[i]){
        arr.push(iterable[i])
      }
    }
    return arr
  }
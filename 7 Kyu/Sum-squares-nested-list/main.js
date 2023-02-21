/*
Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
Note: your solution must NOT modify the original list
*/


//My Solution
function SumSquares(l){
    let sum=0
    l.forEach(el=>{
      if(Array.isArray(el)){
        sum+=SumSquares(el)
      }else{
        sum+=el*el
      }
    })
  return sum
}
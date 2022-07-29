/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/



//My Solution
function getSumOfDigits(integer) {
    let digits=integer.toString().split('').map(Number)
    return digits.reduce((acc,c)=>acc+c,0)
   }


//Most Voted
function getSumOfDigits(integer) {
    return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
  }
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/



//My Solution
function solution(str, ending){
    // TODO: complete
    let num=ending.length
   if(num>0){
      return str.slice(-num)==ending
   }else{
     return true
   }
   
  }  



//Best Practice
function solution(str, ending){
    return str.endsWith(ending);
  }
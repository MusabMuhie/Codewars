/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/



//My Solution
function removeDuplicateWords (s) {
    // your perfect code...
    let arr=s.split(' ')
   return Array.from(new Set(arr)).join(' ')
    
  }
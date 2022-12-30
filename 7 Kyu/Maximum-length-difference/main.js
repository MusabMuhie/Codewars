/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/


//My Solution
function mxdiflg(a1, a2) {
    // your code
if(a1.length && a2.length){
     let sorted1=a1.sort((a,b)=>a.length-b.length)
     let sorted2=a2.sort((a,b)=>a.length-b.length)
 
    return Math.max(Math.abs(sorted1[0].length-sorted2[sorted2.length-1].length), Math.abs(sorted1[sorted1.length-1].length-sorted2[0].length))  
  }
 return -1
}
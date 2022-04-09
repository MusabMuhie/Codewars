/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/





//My Solution
var isAnagram = function(test, original) {
    let sortedTest=test.toLowerCase().split('').sort((a,b)=>a.localeCompare(b)).join('')
    let sortedOriginal=original.toLowerCase().split('').sort((a,b)=>a.localeCompare(b)).join('')
    return sortedOriginal==sortedTest
  };

  


  //Best Practice
  var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };
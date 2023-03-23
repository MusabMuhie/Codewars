/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/



//My Solution
function longestRepetition(s) {
    let counter = 0;
    let largestLetter = '';
    let largestCount = 0;
    let currChar = '';
    
    for(const char of s) {
      if(char === currChar) {
        counter++;
      } else {
        currChar = char
        counter = 1;
      }
      
      if(counter > largestCount) {
        largestCount = counter;
        largestLetter = char
      }
    }
    return [largestLetter, largestCount];
  }
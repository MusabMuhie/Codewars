/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/



//My Solution
function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    let arr=str.split('')
    arr.forEach(element=>{if(element=='a'|| element=='e' || element=='i' || element=='o' || element=='u')vowelsCount++})
    return vowelsCount;
  }





//Best Practice
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
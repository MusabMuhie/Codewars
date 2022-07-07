/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


//My Solution
function XO(str) {
    //code here
  let oAmt=0
  let xAmt=0
  for(i=0;i<str.length;i++){
    if(str.toLowerCase().charAt(i)=='x'){
      xAmt++
    }
    if(str.toLowerCase().charAt(i)=='o'){
      oAmt++
    }
  }
  return xAmt==oAmt
}



//Most Voted
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }
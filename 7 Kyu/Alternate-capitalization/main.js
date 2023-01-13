/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

//My Solution
function capitalize(s){
    let res=['','']
    
    for(i=0;i<s.length;i++){
      if(i%2==0){
        res[0]+=s[i].toUpperCase()
        res[1]+=s[i].toLowerCase()
      }else{
        res[0]+=s[i].toLowerCase()
        res[1]+=s[i].toUpperCase()
      }
    }
     return res
   };
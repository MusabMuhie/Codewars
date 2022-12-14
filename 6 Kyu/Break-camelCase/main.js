/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/


//My Solution
function solution(string) {
    //string.split('').filter()
  let newStr=''
  string.split('').forEach((el,i,arr)=>{
    if(el==el.toUpperCase()){
      newStr+=' '
    }
    newStr+=el
  })
  return newStr
}
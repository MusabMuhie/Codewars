/* You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

//My Solution
function array(arr){
    let newArr=arr.split(',')
    if(newArr.length<3){
      return null
    }else{
      newArr.shift()
      newArr.pop()
    }
  return newArr.join(' ')
    }



//Voted Best Practice
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}

function squareDigits(num){
  let str=num.toString().split('')
  console.log(str)
  let newNum=str.map(Number)
  console.log(newNum)
  let squared=newNum.forEach(num=>num**2)
  console.log(squared)
  return squared.join('')
  
}

function squareDigits(3214);
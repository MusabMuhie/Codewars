/*
A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

*/




//My Solution
function isNarcissistic(n){
    //your code here
    let newArr=n.toString().split('').map(Number)
    let num=newArr.reduce((acc,c)=>acc+(c**(newArr.length)),0)
    return num==n ? true: false
  }





//Best Practice
function isNarcissistic(n) {
    return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
  }

  
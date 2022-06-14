/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [newNumerator, newDenominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.
*/


//My Solution
function reduce(fraction){
    //simplify me!
  let num=fraction[0]
  let den=fraction[1]
  
   var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(num,den);
  return [num/gcd, den/gcd]
}




//Most Voted
const gcd = (a, b) => b ? gcd(b, a % b) : a;

const reduce = ([a, b]) => {
  let d = gcd(a, b);
  return [a / d, b / d];
};
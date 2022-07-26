/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/



//My Solution
function divCon(x){
    let num=x.filter(el=> typeof el=='number')
    let str=x.filter(el=>typeof el=='string')
    let tot=num.reduce((acc,c)=>acc+c,0)
    let totStr=str.map(Number).reduce((acc,c)=>acc+c,0)
    return tot-totStr
    }



//Most Voted
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }
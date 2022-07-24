/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/




//My Solution
function smallEnough(a, limit){
    return a.every(e=>e<=limit)
    }


//Most Voted
function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }
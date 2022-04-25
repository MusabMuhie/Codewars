/*
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

*/



//My Solution
function howManyGifts(maxBudget, gifts){
    // your code goes here
    gifts.sort((a,b)=>a-b)
    let count=0
    while(maxBudget>=gifts[0]){
      maxBudget-=gifts[0]
      gifts.shift()
      count++
    }
    return count
    
    }



//Best Practice
function howManyGifts(m, g){
    var i = 0;
    g = g.sort(function(a, b){return a - b});
    for(; m - g[i] >= 0; i++){
      m = m - g[i];
    }
    return i;
  }

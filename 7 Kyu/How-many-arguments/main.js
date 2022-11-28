/*
Create a function called args_count that returns the number of arguments provided

EX:
args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/


//My Solution
function args_count(...args) {
    return [...args].length;
    }
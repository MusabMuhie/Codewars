/*
You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. 
Now, from arrSearch extract the third element,
 and from that element select the third letter. 
 If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.
*/




//My Solution
function select (arrSearch, arrTake){
    let sorted=arrSearch.sort((a,b)=>b.localeCompare(a))
    let third=arrSearch[2][2]
    return arrTake.find(element=>element.charAt(0)==third) || 'Nothing here'
    
    }



//Best Practice
function select(arrSearch, arrTake) {
    let char = arrSearch.slice().sort().reverse()[2][2];
    return arrTake.find(x => x[0] == char) || 'Nothing here';
}
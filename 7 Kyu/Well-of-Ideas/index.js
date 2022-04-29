/*

*/



//My Solution
function well(x){
    let count=0
    x.forEach(arr=>arr.forEach(element=>{
     if(typeof element =='string'){
        if(element.toLowerCase()=='good')count++
     }
    }))
      if(count==1 || count==2){
        return 'Publish!'
      }else if(count>2){
        return 'I smell a series!'
      }else{
        return 'Fail!'
      }
    }


//Best Practice
function well(x) {
    let match = (''+x).match(/good/gi) || []
    if (match.length == 0) return 'Fail!'
    if (match.length <= 2) return 'Publish!'
    return 'I smell a series!'
  }
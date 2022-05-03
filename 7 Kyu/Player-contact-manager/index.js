/*
You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.

Examples
player_manager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
player_manager(nil) returns []
player_manager("") returns []
playerManager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
playerManager(null) returns []
playerManager("")   returns []
Have at thee!
*/




//My Solution
function playerManager(players) {
    // your code
    
    if(!players || players==null || players=='nil' ||players=='None' ){
      return []
    }else{
    let playersArr=players.split(', ')
    let names=playersArr.filter((el,i)=>i%2==0)
    let num=playersArr.filter((el,i)=>i%2!=0)
    let res=[]
      names.forEach((el,i)=>res.push({player: el, contact: Number(num[i])}))
      return res
    }
    
  }


//Best Practice
function playerManager(players) {
    // your code
    // array.length / 2, creates empty objects
    if (players === '' || players === null) {
      return []
    }
    else {
    var arr = players.split(', ')
    var result = []
    // for loop of length
    for (i=0; i<arr.length; i++) {
        result.push({'player': arr[i], 'contact': parseInt(arr[i+1])})
        i = i+1
    }
    return result
    //pushes into i%2 == 0  and i%2 === 1 in object
    }
  }
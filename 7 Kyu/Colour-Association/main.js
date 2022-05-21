/*
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

*/



//My Solution
function colourAssociation(array){
    // We <3 colours..
      let newArr=[]
      
      array.forEach(arr=>{
        let pair={}
        pair[arr[0]]=arr[1]
        newArr.push(pair)
      })
      return newArr
    }





//Most Voted
const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))
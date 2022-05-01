Test.assertSimilar(scoreboard("The score is four nil"), [4,0], "Should return: [4,0]");
Test.assertSimilar(scoreboard("new score: two three"), [2,3], "Should return: [2,3]");
Test.assertSimilar(scoreboard("two one"), [2,1], "Should return: [2,1]");
Test.assertSimilar(scoreboard("Arsenal just conceded another goal, two nil"), [2,0], "Should return: [2,0]");

const scores = {'nil': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine':9};

// working solution
function scoreboardCheck(string) {
  let newArr = [];
  let words = string.split(" ");
  
  for(let i=0; i < words.length; i++) {
    if(scores.hasOwnProperty(words[i])){
    newArr.push(scores[words[i]]);
    }
  }
  return newArr;
};

// random function
function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

// get key from value
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


// 20 versions of the test
for(let j=0; j < 20; j++){
  var numberScore = [], wordScore = []
  let firstNum = random(1,9), secondNum = random(0,9);

  numberScore.push(firstNum, secondNum);
  wordScore.push(getKeyByValue(scores, firstNum));
  wordScore.push(getKeyByValue(scores, secondNum));

  let possible = [`The score is ${wordScore[0]} ${wordScore[1]}`, `new score: ${wordScore[0]} ${wordScore[1]}`, `${wordScore[0]} ${wordScore[1]}`, `Arsenal just conceded another goal, ${wordScore[0]} ${wordScore[1]}`, `A cracking goal! ${wordScore[0]} ${wordScore[1]}`, `A beauty! ${wordScore[0]} ${wordScore[1]}`];
  
  Test.assertSimilar(scoreboard(possible[random(0, possible.length-1)]), scoreboardCheck(possible[random(0, possible.length-1)]))
}
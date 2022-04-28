describe("Tests", () => {
    it("test", () => {
  function checkwordscore(word) {
   let wordScore = 0;
  
  let letterValues= {
    "a" : 1,
    "b" : 3,
    "c" : 3,
    "d" : 2,
    "e" : 1,
    "f" : 4,
    "g" : 2,
    "h" : 4,
    "i" : 1,
    "j" : 8,
    "k" : 5,
    "l" : 1,
    "m" : 3,
    "n" : 1,
    "o" : 1,
    "p" : 3,
    "q" : 10,
    "r" : 1,
    "s" : 1,
    "t" : 1,
    "u" : 1,
    "v" : 4,
    "w" : 4,
    "x" : 8,
    "y" : 4,
    "z" : 10
  }; 
  
  let i; 
  
  for (i=0; i<word.length; i++) {
    wordScore= letterValues[word[i]] + wordScore;
  }
  wordScore= wordScore *word.length;
  
  if (word.length==7) {
    wordScore = wordScore + 50; 
  }
  
  return wordScore;
  }
  
  Test.assertEquals(wordscore('great'), 30, "The expected score for 'great' was 30. ")
  Test.assertEquals(wordscore('deceive'), 141, "'deceive' is seven letters, the expected result was 141")
  Test.assertEquals(wordscore('melon'), 35, "The expected score for 'melon' was 35.")
  Test.assertEquals(wordscore('box'), 36, "The expected score for 'box' was 36. ")
  Test.assertEquals(wordscore('fathom'), 84, " The expected score for'fathom' was 84")
  Test.assertEquals(wordscore('badly'), 55, "The expected score for 'badly' was 55.")
  Test.assertEquals(wordscore('hair'), 28, "The expected score for 'hair' was 28.")
  Test.assertEquals(wordscore('mango'), 40, "The expected score for 'mango' was 40.")
  Test.assertEquals(wordscore('volume'), 66, "The expected score for 'volume' was 66.")
  Test.assertEquals(wordscore('repeats'), 113, "repeats' is seven letters, the expected result was 113")
  
  
  
  let array= ["regular", "publish", "poetry", "and", "are", "party", "dressed", "in", "finding", "short", "fiction", "for", "issue", "fun", "that", "you", "the", "best", "person", "write", "this", "story", "does", "it", "shape", "videos", "styled", "shackle", "but", "look", "work", "brave", "light", "emotion", "detail", "we", "also", "welcome", "art", "graph", "mission", "please", "send", "us", "only", "finish", "really", "believe", "grand", "great", "free", "freedom", "travel", "played", "friend", "write", "dancing", "laugh", "swim", "love", "hurt", "learned", "grate", "trouser", "chair", "outside", "screen", "window", "service", "many", "number", "type", "birth", "wind", "animal", "word", "share", "explore", "through", "lens", "core", "stigma", "busted", "tellers", "design", "artists", "healers", "mental", "health", "person", "live", "people", "blue", "green", "yellow", "pink", "number", "head", "body", "foot"];
  
  for(let i = 0; i < 20; i++){ 
  let random1= array[Math.round(Math.random()*100)];
  Test.assertEquals(wordscore(random1),checkwordscore(random1) );
  }
  
  let alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  for (let z=0; z<20; z++){
  let wordLength=1+ Math.round(Math.random()*6);
  let randomWord2='';
  while (wordLength>0) {
  randomWord2 += alphabet[Math.round(Math.random()*25)];
  
  wordLength--;
  }
  Test.assertEquals(wordscore(randomWord2),checkwordscore(randomWord2) );
  
  }
  
  
  
    });
  });
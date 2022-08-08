describe("Example tests", function(){
    Test.assertEquals(duplicateCount(""), 0);
    Test.assertEquals(duplicateCount("abcde"), 0);
    Test.assertEquals(duplicateCount("aabbcde"), 2);
    Test.assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
    Test.assertEquals(duplicateCount("Indivisibility"), 1)
    Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  })
  
  
  describe("More tests", function(){
    let lowers = "abcdefghijklmnopqrstuvwxyz", uppers = lowers.toUpperCase();
    Test.assertEquals(duplicateCount(lowers), 0)
    Test.assertEquals(duplicateCount(lowers + "baaAAB"), 2, "characters may not be adjacent")
  
    Test.assertEquals(duplicateCount(lowers+lowers), 26)
    Test.assertEquals(duplicateCount(lowers+uppers), 26, "should ignore case")
    
    let rnd = function(x){ return ~~(Math.random()*x) };
    
    console.log("Random tests");
    for( let t=0, times=5+rnd(4); t<times; t++ ){
      let len = 3+rnd(5), i=len+1, str = lowers.slice(0,len*2);
      if( rnd(100)<70 ){
        while( i-- ) str += ([lowers,uppers][rnd(2)]).slice(0,i);
      }else{
        str += lowers.slice(-len);
        len = 0;
      }
      console.log("> "+str+" ?")
      Test.assertEquals(duplicateCount(str),len)
    }
  })
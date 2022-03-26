describe("Basic tests", function(){
    it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function(){
      Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    });  
    it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function(){
      Test.assertEquals(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    });
    it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function(){
      Test.assertEquals(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    });
    it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function(){
      Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    });
    it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function(){
      Test.assertEquals(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
    });
  });
  
  describe("Random tests", function(){
    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function pointsSolution(games) {
      sol = 0;
      for (i = 0; i < games.length; i++) { 
        x = games[i].slice(0, 1);
        y = games[i].slice(2);
        if (x > y) {
          sol = sol + 3;
        }
        if (x === y) {
          sol = sol + 1;
        }
      }
      return sol;
    }  
    let games = [];
    let g1, g2;
    for (let i = 0;  i < 50; i++) {
      games = []
      for (let j = 0;  j < 10; j++) {
        g1 = randInt(0, 4);
        g2 = randInt(0, 4);
        games.push(g1.toString() + ":" + g2.toString());
      }
      it("Testing for points = ['" + games[0] + "','" + games[1] + "','" + games[2] + "','" + games[3] + "','" + games[4] + "','" + games[5] + "','" + games[6] + "','" + games[7] + "','" + games[8] + "','" + games[9] + "'] = ", function(){
        Test.assertEquals(points(games.slice()), pointsSolution(games), "It should work for random inputs too");
      });  
    }
  });
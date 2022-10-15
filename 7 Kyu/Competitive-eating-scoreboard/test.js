describe("Basic tests",() =>{
    let whoAteWhat = [
      {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
      {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
      {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
      {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
    ];
    
    result = [
      {name: "Big Bob", score: 134},
      {name: "Billy The Beast", score: 122},
      {name: "Habanero Hillary", score: 98},
      {name: "Joey Jaws", score: 94}
    ]
    
    Test.assertSimilar(scoreboard(whoAteWhat), result);
    Test.assertSimilar(scoreboard([{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]), [{name: "Big Bob", score: 134}]);
    Test.assertSimilar(scoreboard([{name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]), [{name: "Big Bob", score: 134},{name: "Joey Jaws", score: 94}]);
    Test.assertSimilar(scoreboard([{name: "Joey Jaws", chickenwings: 0, hamburgers: 1, hotdogs: 1},{name: "Big Bob" , chickenwings: 1, hamburgers: 0, hotdogs: 0}]), [{name: "Big Bob", score: 5},{name: "Joey Jaws", score: 5}]);
    Test.assertSimilar(scoreboard([]), []);
    })
    
    describe("Random tests",() =>{
      const randint=(a,b)=>~~(Math.random()*(b-a+1)+1);
      const sol=w=>w.map(a=>{return {name: a.name, score: a.chickenwings*5+a.hamburgers*3+a.hotdogs*2}}).sort((a,b)=>b.score-a.score || (a.name>b.name ? 1 : a.name<b.name ? -1 : 0));
      let names=["Pippi the cat", "Sofia the night coder","Giacomo Sorbet", "Alex", "Nelson", "Laura - definitely not a beginner", "Troy Maeder", "Pete Garvin", "Marko Sustarsic", "Rory the kickass developer", "Andrew badass C.", "Daymos", "Gomes", "GFortaine"];
      Array.prototype.shuffle=function(){
        let i=this.length, j, k;
        for (;i;){
          j=~~(Math.random()*this.length);
          k=this[--i];this[i]=this[j];this[j]=k;
        }
        return this;
      }
      
      for (let i=0;i<40;i++){
        names.shuffle();
        let whoAteWhat = [], len = randint(2,10);
        for (let j=0; j<len; j++){
          let item={name: names[j], chickenwings: randint(0,100), hotdogs: randint(0,100), hamburgers: randint(0,100)};
          whoAteWhat.push(item)
        }
        if (randint(0,1)){
          //50% of adding an extra item with the same score of the last
          let extra=JSON.parse(JSON.stringify(whoAteWhat.slice(-1)[0]));
          //giving it the next free name
          extra.name=names[whoAteWhat.length];
          //adding it to the array
          whoAteWhat.push(extra);
          //and finally shuffling it again
          whoAteWhat.shuffle();
        }
        it(`Testing for ${JSON.stringify(whoAteWhat)}`,() =>{
          let expected=sol(whoAteWhat);
          Test.assertSimilar(scoreboard([].concat(whoAteWhat)), expected, "It should work for random inputs too");
        })
      }
    })
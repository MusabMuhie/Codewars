describe("Basic tests",() =>{
    Test.assertEquals(factorial(0), 1);
    Test.assertEquals(factorial(1), 1);
    Test.assertEquals(factorial(4), 24);
    Test.assertEquals(factorial(7), 5040);
    Test.assertEquals(factorial(17), 355687428096000);
    })
    
    describe("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
    const sol=n=>Array.from({length:n},(a,i)=>i+1).reduce((a,b)=>a*b,1);
    
    for (let i=0;i<40;i++){
      let n=randint(0,17);
      it(`Testing for ${n}`,() =>{
      Test.assertEquals(factorial(n), sol(n), "It should work for random inputs too");
      })
    }
    })
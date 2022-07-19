describe("Basic Tests",() =>{
    Test.assertSimilar(findMultiples(5, 25), [5, 10, 15, 20, 25])
    Test.assertSimilar(findMultiples(1, 2), [1, 2])
    Test.assertSimilar(findMultiples(5, 7), [5])
    Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    Test.assertSimilar(findMultiples(11, 54), [11, 22, 33, 44])
    });
    
    describe("Randomt Tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
    const sol=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);
    
    for (let i=0;i<40;i++){
      const n=randint(1,20),l=n+randint(1,Math.pow(10,randint(0,4)));
      it(`Testing for ${n} and ${l}`,() =>{
      Test.assertSimilar(findMultiples(n,l),sol(n,l),"It should work for random inputs too")
      })
    }
    });
    
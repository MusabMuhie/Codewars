describe("Basic tests",() =>{
    Test.assertDeepEquals(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
    Test.assertDeepEquals(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
    Test.assertDeepEquals(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
    Test.assertDeepEquals(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
    Test.assertDeepEquals(convertHashToArray({}),[]);
    });
    
    describe("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
    const sol=h=>Object.keys(h).sort().map(k=>[k,h[k]]);
    const names = ["Lewis", "Rod", "Phil", "Susan", "Doug", "Stewart", "Terrance", "Kyle"],
    roles = ["actor", "janitor", "artist", "therapist", "realtor", "doctor", "comedian", "stunt double"];
    
    for (let i=0;i<40;i++){
      const h={name: names[randint(0,names.length-1)], age: randint(18,90), role: roles[randint(0,roles.length-1)]}
      it(`Testing for ${JSON.stringify(h)}`,() =>{
      Test.assertDeepEquals(convertHashToArray(h),sol(h),"It should work for random inputs too");
      })
    }
    });
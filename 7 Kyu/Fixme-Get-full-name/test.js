describe("Simple tests", () =>{
    Test.assertEquals(new Dinglemouse("Clint", "Eastwood").getFullName(), "Clint Eastwood");
      
    it("No Last Name",  () =>{ Test.assertEquals(new Dinglemouse("Clint", "").getFullName(), "Clint") } );
    it("No First Name", () =>{ Test.assertEquals(new Dinglemouse("", "Eastwood").getFullName(), "Eastwood") } );
    it("No First or Last Name", () =>{Test.assertEquals(new Dinglemouse("", "").getFullName(), "") } );
  });
  
  describe("Random test", () =>{
    let rnd = x => ~~(Math.random()*x), rndOf = xx => xx[rnd(xx.length)], words = s=>s.split(",");
    for (let r = 0; r < 100; r++) {
      let first = rndOf(words(",Clint,Giake,mYjin,Stef,Jake,Matt,")), 
          last  = rndOf(words(",East,North,West,South,"))+rndOf(words(",Wood,Lake,Marsh,River,Mount,Hill,Valley,")),
          exp   = [first,last].filter(x=>x).join(" ");
      it(`Random test #${r+1} = ${exp}`, () =>{ Test.assertEquals(new Dinglemouse(first,last).getFullName(), exp) } );
    }
  });
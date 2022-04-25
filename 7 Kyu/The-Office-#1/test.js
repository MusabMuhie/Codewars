describe("Basic tests",() =>{
    Test.assertEquals(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
    Test.assertEquals(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
    Test.assertEquals(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');
    })
    
    describe("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function myouted(meet, boss){
      let total = 0;
      for (let i = 0; i < Object.keys(meet).length; i++) total += meet[Object.keys(meet)[i]];
      total+=meet[boss];
      return total/Object.keys(meet).length > 5?'Nice Work Champ!':'Get Out Now!';
    }
    let names=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i=0;i<100;i++){
      let team = ['tim','jim','randy','sandy','andy','katie','laura','saajid','alex','john','mr'];
      let boss = team[randint(0,team.length-1)];
      let meet= {'tim':0, 'jim':0,'randy':0, 'sandy':0,'andy':0, 'katie':0,'laura':0, 'saajid':0,'alex':0, 'john':0,'mr':0};
      meet['tim'] = (names[randint(0,names.length-1)]);
      meet['jim'] = (names[randint(0,names.length-1)]);
      meet['randy'] = (names[randint(0,names.length-1)]);
      meet['sandy'] = (names[randint(0,names.length-1)]);
      meet['andy'] = (names[randint(0,names.length-1)]);
      meet['katie'] = (names[randint(0,names.length-1)]);
      meet['laura'] = (names[randint(0,names.length-1)]);
      meet['saajid'] = (names[randint(0,names.length-1)]);
      meet['alex'] = (names[randint(0,names.length-1)]);
      meet['john'] = (names[randint(0,names.length-1)]);
      meet['mr'] = (names[randint(0,names.length-1)]);
      
      it(`Testing... Testing...`,() =>{
      Test.assertEquals(myouted(meet, boss), outed(meet, boss),"It should work for random inputs too");
      })
     }
    })
describe("Basic tests",() =>{
    Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
      randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
      laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
      mr: 'finance' }), 'kill me now');
    Test.assertEquals(boredom({ tim: 'IS', jim: 'finance',
      randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
      katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
      alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
    Test.assertEquals(boredom({ tim: 'accounts', jim: 'accounts',
      randy: 'pissing about', sandy: 'finance', andy: 'change',
      katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
      john: 'retail', mr: 'pissing about' }), 'party time!!');
    })
    
    describe("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function myboredom(staff){
      let total = 0;
      for (let i = 0; i < Object.keys(staff).length; i++) {
        if (staff[Object.keys(staff)[i]] == 'accounts') total+=1;
        else if (staff[Object.keys(staff)[i]] == 'finance') total+=2;
        else if (staff[Object.keys(staff)[i]] == 'regulation') total+=3;
        else if (staff[Object.keys(staff)[i]] == 'cleaning') total+=4;
        else if (staff[Object.keys(staff)[i]] == 'retail') total+=5;
        else if (staff[Object.keys(staff)[i]] == 'change') total+=6;
        else if (staff[Object.keys(staff)[i]] == 'IS') total+=8;
        else if (staff[Object.keys(staff)[i]] == 'trading') total+=6;
        else if (staff[Object.keys(staff)[i]] == 'canteen') total+=10;
        else if (staff[Object.keys(staff)[i]] == 'pissing about') total+=25;
      }
      console.log(staff);
      return total <=80?'kill me now':total<100?'i can handle this':'party time!!'
    }
    let names=['accounts', 'finance', 'canteen', 'regulation', 'trading', 'change', 'IS', 'retail', 'cleaning', 'pissing about'];
    
    for (let i=0;i<70;i++){
      let team = ['tim','jim','randy','sandy','andy','katie','laura','saajid','alex','john','mr'];
      let boss = team[randint(0,team.length-1)];
      let staff= {'tim':0, 'jim':0,'randy':0, 'sandy':0,'andy':0, 'katie':0,'laura':0, 'saajid':0,'alex':0, 'john':0,'mr':0};
      staff['tim'] = (names[randint(0,names.length-1)]);
      staff['jim'] = (names[randint(0,names.length-1)]);
      staff['randy'] = (names[randint(0,names.length-1)]);
      staff['sandy'] = (names[randint(0,names.length-1)]);
      staff['andy'] = (names[randint(0,names.length-1)]);
      staff['katie'] = (names[randint(0,names.length-1)]);
      staff['laura'] = (names[randint(0,names.length-1)]);
      staff['saajid'] = (names[randint(0,names.length-1)]);
      staff['alex'] = (names[randint(0,names.length-1)]);
      staff['john'] = (names[randint(0,names.length-1)]);
      staff['mr'] = (names[randint(0,names.length-1)]);
      
      it(`Testing... Testing...`,() =>{
      Test.assertEquals(boredom(staff), myboredom(staff),"It should work for random inputs too");
      })
     }
    })
const Test = require('@codewars/test-compat');

describe("The basic stuff", function(){
it("Testing gcd(1,3)= 1", function(){
Test.assertEquals(mygcd(1,3),1);
})
it("Testing gcd(60,12)= 12", function(){
Test.assertEquals(mygcd(60,12),12);
})
it("Testing gcd(2672,5678)= 334", function(){
Test.assertEquals(mygcd(2672,5678),334);
})
it("Testing gcd(10927782,6902514)= 846 ", function(){
Test.assertEquals(mygcd(10927782,6902514), 846 );
})
it("Testing gcd(1590771464,1590771620) = 4", function(){
Test.assertEquals(mygcd(1590771464,1590771620),4);
})
})

describe("Some larger values", function(){
function my_gcd(x,y){
    while (y!=0){
      c=y;
      y=x%y;
      x=c;
    }
    return x;
}

function randint(a,b){return Math.ceil(Math.random()*(b-a))+a;};

for (i=0;i<20;i++){
  x = randint(10000,100000);
  y = randint(100,1000);
  ans=my_gcd(x,y);
  x2 = randint(10000,100000);
  ans2=my_gcd(x2*y,x*y);

  it("Testing gcd("+x.toString()+","+y.toString()+")= "+ans.toString(), function(){
    Test.assertEquals(mygcd(x,y), ans);
  })
  it("Testing gcd("+(x2*y).toString()+","+(x*y).toString()+")= "+ans2.toString(), function(){
    Test.assertEquals(mygcd(y*x,x2*y), ans2);
  })
}
})
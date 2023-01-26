const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(factorial(0), 1, "What is '0!' ?");
Test.assertEquals(factorial(1), 1, 'Your math may be incorrect');
Test.assertEquals(factorial(2), 2, 'Your math may be incorrect');
Test.assertEquals(factorial(5), 120, 'Your math may be incorrect');
Test.assertEquals(factorial(-1), null, "Don't forget to check for negatives!");


const fff=function(n) {
  if( n < 0 ) return null;
  return n == 0 ? 1 : n * fff (n-1) ; 
}

for(let i=0;i<20;i++){
    let n=Math.random()*20-5|0;
    let exp = fff(n);
    Test.assertEquals(factorial(n),exp);
}
  });
});
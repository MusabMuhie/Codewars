let block = new Block([3,4,5]),
    other = new Block([1,2,3]);

Test.assertEquals(block.getWidth(),  3)
Test.assertEquals(block.getLength(), 4)
Test.assertEquals(block.getHeight(), 5)
Test.assertEquals(block.getVolume(), 60)
Test.assertEquals(block.getSurfaceArea(), 94)

describe("Random Tests", ()=>{

  let rnd = () => 1+ ~~(Math.random()*100);

  let t = 10;  
  while(t--){
  
    let [a,b,c] = [rnd(), rnd(), rnd()];
    let tst = new Block([a,b,c]), other = new Block([1,2,3]);
    
    it(`Block with dimensions ${a} x ${b} x ${c}`, ()=>{
    
    let v = a*b*c, s = 2*(a*b+a*c+b*c);
    
      Test.assertEquals(tst.getWidth(),  a, "should return width")
      Test.assertEquals(tst.getLength(), b, "should return length")
      Test.assertEquals(tst.getHeight(), c, "should return height")
      Test.assertEquals(tst.getVolume(), v, "should return volume")
      Test.assertEquals(tst.getSurfaceArea(), s, "should return surface area")
    })
  }

})
describe("Example Test Cases", () => {
    Test.assertEquals(datingRange(17), "15-20")
    Test.assertEquals(datingRange(40), "27-66")
    Test.assertEquals(datingRange(15), "14-16")
    Test.assertEquals(datingRange(35), "24-56")
    Test.assertEquals(datingRange(10), "9-11")
  })
  
  describe("Basic Test Cases", () => {
    Test.assertEquals(datingRange(53), "33-92")
    Test.assertEquals(datingRange(19), "16-24")
    Test.assertEquals(datingRange(12), "10-13")
    Test.assertEquals(datingRange(7), "6-7")
    Test.assertEquals(datingRange(33), "23-52")
  })
  
  describe("Random Test Cases", () => {
    function solution(age){
      let min, max;
      if (age <= 14){
        min = ~~(age * 0.9);
        max = ~~(age * 1.1);
      }
      else{
        min = ~~(age/2) + 7;
        max = 2 * (age - 7);
      }
      return `${min}-${max}`;
    }
  
    for (let _ = 0; _ < 50; _++){
      const n = Math.floor(Math.random() * (100 - 1)) + 1
      it(`${n} should give ${solution(n)}`, () => {
        Test.assertEquals(datingRange(n), solution(n), "It should work for random inputs too")
      })
    }
  })
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(stray([1, 1, 2]), 2);
  
  Test.assertEquals(stray([17, 17, 3, 17, 17, 17, 17]), 3);
  
  Test.assertEquals(stray([8, 1, 1, 1, 1, 1, 1]), 8);
  
  Test.assertEquals(stray([1, 1, 1, 1, 1, 1, 0]), 0);
  
  Test.assertEquals(stray([0, 0, 0, 7, 0, 0, 0]), 7);
  
  Test.assertEquals(stray([-21, -21, -21, -21, -6, -21, -21]), -6);
  
  
  function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function validRandomArray(size, strayNumber) {
      let array = Array(size).fill(randomInt(-10000, 10000));
      array[randomInt(0, size)] = strayNumber;
      return array;
  }
  
  let strayNumber;
  for(let i=0 ; i<50 ; i++){
      strayNumber = randomInt(-10000, 10000);
      let arr = validRandomArray(101, strayNumber);
      Test.assertEquals(stray(arr), strayNumber);
      
      strayNumber = randomInt(-10000, 10000);
      arr = validRandomArray(15273, strayNumber)
      Test.assertEquals(stray(arr), strayNumber);
  }
    });
  });
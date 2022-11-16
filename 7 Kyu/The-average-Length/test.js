describe("Basic tests",() => {
    Test.assertDeepEquals(averageLength(['u', 'y']), ['u', 'y']);
    Test.assertDeepEquals(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
    Test.assertDeepEquals(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']);
  });
  
  describe("Random Tests", () => {
      const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
      
      const check = (array) => { 
        let lengthAv = Math.round(array.reduce(((sum, item) => sum + item.length), 0) / array.length);
        return array.map(item => item.slice(0,1).repeat(lengthAv))
      }
      
      const checkUnique = array => { 
        let lengthAv = Math.round(array.reduce(((sum, item) => sum + item.length), 0) / array.length);
        for (let i = 0; i < array.length; i++) {
          array[i] = array[i].slice(0,1).repeat(lengthAv)
        };
        return array;
      }
      
       for (let i = 1; i <= 98; i++){
         const arrayLength = randomInteger(2, 10);
         const array = [];
         const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
         
         for (let i = 1; i <= arrayLength; i++){
           array.push(alphabet[randomInteger(0, 22)].repeat(randomInteger(1, 10)));
         }
      
        it(`Test №${i}`, () => {
          Test.assertDeepEquals(averageLength(array), check(array), `It should work for random tests too`);
          Test.assertNotEquals(averageLength(array), checkUnique(array), `You should return a new array`);
        })
      };
  })
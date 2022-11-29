const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
let array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
            
let array2 = [];
for (let index = 0; index < 500; index++)
  array2.push(true);
for (let index = 0; index < 5; index++)
  array2.push(undefined);
for (let index = 0; index < 100; index++)
  array2.push(false);
              
let array3 = [];
for (let index = 0; index < 500; index++)
  array3.push(null);
for (let index = 0; index < 5; index++)
  array3.push(undefined);
for (let index = 0; index < 100; index++)
  array3.push(false);
  
Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total, not " + countSheeps(array1))
Test.assertEquals(countSheeps(array2), 500, "There are 500 sheeps in total, not " + countSheeps(array2))
Test.assertEquals(countSheeps(array3), 0, "There are no sheeps at all, you counted " + countSheeps(array3))
  });
});
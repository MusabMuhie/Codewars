const Test = require('@codewars/test-compat');

let sol1 = function(list){
    let result = list[0];
        for(let i = 1; i < list.length; i++){
            if(result > list[i]) result = list[i];
        }
    return result;
};

let sol2 = function(list){
    let result = list[0];
        for(let i = 1; i < list.length; i++){
            if(result < list[i]) result = list[i];
        }
    return result;
};


describe("Find Minimum and Maximum Values", function(){
  it("Fixed Min", function(){
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(min([1, 2, 3, 4, 5, 10]), 1);
    Test.assertEquals(min([-1, -2, -3, -4, -5, -10]), -10);
  });
  it("Fixed Max", function(){
    Test.assertEquals(max([-52, 56, 30, 29, -54, 0, -110]), 56);
    Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    Test.assertEquals(max([5]), 5);
    Test.assertEquals(max([534,43,2,1,3,4,5,5,443,443,555,555]), 555);
  });
  it("Random Tests", function(){
    for(let i = 0; i < 10; i++){
      let rand_lng = ~~(Math.random() *13)+1, rand_list = [];
      for(let l = 0;  l < rand_lng; l++){
                rand_list.push(~~(100000 * Math.random() - 20000));
      }
      
      Test.assertEquals(min([].concat(rand_list)), sol1(rand_list));
      Test.assertEquals(max([].concat(rand_list)), sol2(rand_list));
    }
  });
});
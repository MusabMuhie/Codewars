describe("Solution", function(){
    it("basic tests", function(){
      let input = [ 4, 3, 9, 7, 2, 1 ];
      let expected = [ 2, 9, 3, 49, 4, 1 ];
      Test.assertSimilar(squareOrSquareRoot(input), expected);
      
      input = [ 100, 101, 5, 5, 1, 1 ];
      expected = [ 10, 10201, 25, 25, 1, 1 ];
      Test.assertSimilar(squareOrSquareRoot(input), expected);
      
      input = [ 1, 2, 3, 4, 5, 6 ];
      expected = [ 1, 4, 9, 2, 25, 36 ];
      Test.assertSimilar(squareOrSquareRoot(input), expected);
    });
    
    it("random tests", function(){
      for(let r=0;r<30;r++)
      {
        let len = Math.floor(Math.random() * 17 + 3);
        let array = [];
        for(let i=0;i<len;i++)
        {
          array[i] = Math.floor(Math.random() * 100 + 1);
        }
          
        let expected = array.map(a => 
        {
          let sqrt = Math.sqrt(a);
          if(sqrt == Math.floor(sqrt))
            {
              return sqrt;
            }
            return a * a;
        });
        
        Test.assertSimilar(squareOrSquareRoot(array), expected);
      }
    });
  });
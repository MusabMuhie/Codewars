describe('Guesser', () => {
    class Solution {
      constructor(number, lives) {
        this.number = number;
        this.lives = lives;
      }
      
      guess(n) {
        if (this.lives > 0 && this.number === n) {
          return true;
        }
        else if (this.lives === 0) {
          throw new Error('dead');
        }
        this.lives--;
    
        return false;
      }
    }
  
    it('Correct guess should return true', () => {
      let guesser = new Guesser(10, 2);
      guesser.guess(10);
      guesser.guess(10);
      guesser.guess(10);
      guesser.guess(10);
      Test.expect(guesser.guess(10));
    });
    
    it('Wrong guess should return false', () => {
      let guesser = new Guesser(10, 2);
      guesser.guess(1);
      guesser.guess(10);
      guesser.guess(10);
      guesser.guess(10);
      guesser.guess(10);
      Test.expect(!guesser.guess(1));
    });
  
    it('Lives ran out should throw', () => {
      let guesser = new Guesser(10, 2);
      guesser.guess(1);
      guesser.guess(2);
      
      Test.expectError('Expect error already dead', () => { guesser.guess(10); });
    });
  
  
    it('Random tests', () => {
      let rnd = ~~(Math.random() * 15);
      let l = ~~(Math.random() * 20);
      
      for (let i = 0; i < 10; ++i) {
        let solution = new Solution(rnd, l);
        let guesser = new Guesser(rnd, l);
        
        for (let j = 0; j < 20; ++j) {
          let g = ~~(Math.random() * 15);
          try {
            let s = solution.guess(g);
            let r = guesser.guess(g);
            
            Test.assertEquals(s, r);
          }
          catch (ex) {
            Test.expectError('Expecting error', () => guesser.guess(g))
          }
        }
      }
    });
  });
  
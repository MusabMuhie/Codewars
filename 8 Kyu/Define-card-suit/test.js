const assert = require('chai').assert;

describe("Basic tests",() => {
  it('Testing №1 for "3♣"', () => {
    let actualClubs = defineSuit('3♣');
    assertNotPrinting(actualClubs);
    assert.strictEqual(actualClubs, 'clubs');
  });
  it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
  it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
  it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
  
  function assertNotPrinting(actual) {
    assert.isDefined(actual, 'You have to return the suit. Did you print it to the console instead?\n');
  }
});


describe("Random Tests", () => {
    const randomInteger = (a, b) => Math.floor(Math.random() * (b - a) + a);
    const check = (card) => {
      const suit = card.slice(-1);
      return suit === '♣' ? 'clubs' : suit === '♦' ? 'diamonds' : suit === '♥' ? 'hearts': 'spades';
    }
     
     
    const deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
                  '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
                  '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
                  '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
             
    
    for (let i = 5; i <= 100; i++){
      const card = deck[randomInteger(0, deck.length)];
      
      it(`Testing №${i} for ${JSON.stringify(card)}`, () => {
        assert.strictEqual(defineSuit(card), check(card));
      });
    };
})
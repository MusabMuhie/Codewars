class Check {
    constructor(title, artist) {
      this._title = title;
      this._artist = artist;
      this._watched = [];
    }
  
    get title() {
      return this._title;
    }
  
    get artist() {
      return this._artist;
    }
  
    get watched() {
      return this._watched;
    }
  
    howMany(arr) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        let view = arr[i].toLowerCase();
        if (!this.watched.includes(view)) {
          count++;
          this.watched.push(view);
        }
      }
      return count;
    }
  }
  const chai = require('chai');
  const assert = chai.assert;
  
  let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
  
  describe('Fixed Tests', function() {
    it('Test for title and artist', function() {
      assert.strictEqual(mountMoose.title, 'Mount Moose');
      assert.strictEqual(mountMoose.artist, 'The Snazzy Moose');
    });
    it(`Given: 'John', 'Fred', 'Bob', 'Carl', 'RyAn'`, function() {
      assert.strictEqual(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']), 5);
    });
    it(`Given: 'JoHn', 'Luke', 'AmAndA'`, function() {
      assert.strictEqual(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']), 2);
    });
    it(`Given: 'Amanda', 'CalEb', 'CarL', 'Furgus'`, function() {
      assert.strictEqual(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']), 2);
    });
    it(`Given: 'JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE'`, function() {
      assert.strictEqual(mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']), 1);
    });
    it(`Given: 'Jack', 'jacK'`, function() {
      assert.strictEqual(mountMoose.howMany(['Jack', 'jacK']), 1);
    });
  });
  
  function getRandomName() {
    let names = ['ryan', 'luke', 'caleb', 'bob', 'fred', 'joe', 'ben', 'eric', 'amanda', 'jesica', 'syndney', 'melisa'];
    let name = names[Math.floor(Math.random() * names.length)];
    let rand = Math.floor(Math.random() * 4);
    if (rand != 3) {
      name = name.split('');
      for (let i = 0; i < name.length; i++) {
        let randomNum = Math.floor(Math.random() * 3);
        if (randomNum == 0) {
          name[i] = name[i].toUpperCase();
        }
      }
      name = name.join('');
    }
    return name;
  }
  
  function getRandomString() {
    let result = '';
    let options = 'qwertyuiopasdfghjklzxcvbnm';
    for (let i = 0; i < 10; i++) {
      result += options[Math.floor(Math.random() * options.length)];
    }
    return result;
  }
  
  let mySnazzySong = new Song('My Snazzy Song', 'The Snazzy Moose');
  let song = new Check('title', 'artist');
  
  describe('Random Tests', function() {
    for (let i = 0; i < 10; i++) {
      let arr = [getRandomName(), getRandomName(), getRandomName(), getRandomName(), getRandomName()];
      it(`Given: ${arr}`, function() {
        assert.strictEqual(mySnazzySong.howMany(arr), song.howMany(arr));
      });
    }
  });
  describe('Random Tests for artist and title', function() {
    for (let i = 0; i < 10; i++) {
      let string1 = getRandomString();
      let string2 = getRandomString();
      let checker = new Check(string1, string2);
      let newSong = new Song(string1, string2);
      it(`Given: ${string1} & ${string2}`, function() {
        assert.strictEqual(checker.name, newSong.name);
        assert.strictEqual(checker.artist, newSong.artist);
      });
    }
  });
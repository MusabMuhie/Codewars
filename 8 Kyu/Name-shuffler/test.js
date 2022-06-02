if (typeof(nameShuffler) != 'function') {
    if (typeof(nameSuffler) === 'function') nameShuffler = nameSuffler;
    if (typeof(nameShuffle) === 'function') nameShuffler = nameShuffle;
    if (typeof(nameSuffle)  === 'function') nameShuffler = nameSuffle;
  }
  describe("Basic tests",function(){
  Test.assertEquals(nameShuffler('john McClane'),'McClane john');
  Test.assertEquals(nameShuffler('Mary jeggins'),'jeggins Mary');
  Test.assertEquals(nameShuffler('tom jerry'),'jerry tom');
  Test.assertEquals(nameShuffler('Mary Jane'),'Jane Mary');
  Test.assertEquals(nameShuffler('John Doe'),'Doe John');
  Test.assertEquals(nameShuffler('William O\'Brien'),'O\'Brien William');
  Test.assertEquals(nameShuffler('George Huffingquane-McGafferty'),'Huffingquane-McGafferty George');
  })
  
  describe("Basic tests",function(){
  function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}
  function sol_shuffler(str){return str.replace(/([A-Za-z'-]+)(\s)([A-Za-z'-]+)/,"$3$2$1");}
  first_names=["Augustus","Tobias","Vernon","Ryan","Bob","Kareem","Miguel","Cyril","Chris","Simon","Tim"]
  last_names=["Hill","Beecher","Schillinger","O'Reily","Rebadow","Said","Alvarez","O'Reily","Keller","Adebisi","McManus"]
  
  for (let _=0;_<40;_++){
      s=[first_names[randint(0,first_names.length-1)],last_names[randint(0,last_names.length-1)]].join(" ")
      it("Testing for "+s,function(){
      Test.assertEquals(nameShuffler(s),sol_shuffler(s),"It should work for random inputs too")
      })
  }
  })
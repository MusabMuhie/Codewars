describe("Tests", () => {
    it("test", () => {
  const winnerList1 = [
    { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' }, 
    { season: '1997–98', team: 'Real Madrid', country: 'Spain' }, 
    { season: '1998–99', team: 'Manchester United', country: 'England' },
    { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
    { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
    { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
    { season: '2002–03', team: 'Milan', country: 'Italy' },
    { season: '2003–04', team: 'Porto', country: 'Portugal' },
    { season: '2004–05', team: 'Liverpool', country: 'England' },
    { season: '2005–06', team: 'Barcelona', country: 'Spain' },
    { season: '2006–07', team: 'Milan', country: 'Italy' },
    { season: '2007–08', team: 'Manchester United', country: 'England' },
    { season: '2008–09', team: 'Barcelona', country: 'Spain' },
    { season: '2009–10', team: 'Internazionale', country: 'Italy' },
    { season: '2010–11', team: 'Barcelona', country: 'Spain' },
    { season: '2011–12', team: 'Chelsea', country: 'England' },
    { season: '2012–13', team: 'Bayern', country: 'Germany' },
    { season: '2013–14', team: 'Real Madrid', country: 'Spain' },
    { season: '2014–15', team: 'Barcelona', country: 'Spain' },
    { season: '2015–16', team: 'Real Madrid', country: 'Spain' }
  ];
  
  
  Test.assertEquals(countWins(winnerList1, 'Portugal'), 1);
  Test.assertEquals(countWins(winnerList1, 'FootLand'), 0);
  Test.assertEquals(countWins(winnerList1, 'Spain'), 9);
  Test.assertEquals(countWins(winnerList1, 'Italy'), 3);
  Test.assertEquals(countWins(winnerList1, 'England'), 4);
  Test.assertEquals(countWins(winnerList1, 'Germany'), 3);
  
  
  // ========== RANDOM TESTS ============
  function countWinsCheck(winnerList, country) {
    return winnerList.filter(winner => winner.country === country).length;
  }
  
  const countryList = [
    'Germany',
    'Spain',
    'Italy',
    'Sportland',
    'ColdLand'
  ];
  
  const teamList = [
    { team: 'Barcelona', country: 'Spain' },
    { team: 'Internazionale', country: 'Italy' },
    { team: 'Chelsea', country: 'England' },
    { team: 'Bayern', country: 'Germany' },
    { team: 'Real Madrid', country: 'Spain' }
  ];
  
  const seasonList = [
    { season: '2011–12' },
    { season: '2012–13' },
    { season: '2013–14' },
    { season: '2014–15' },
    { season: '2015–16' }
  ];
  
  function makeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  
  // Fuunction generating 10 random tests
  (function runRandomTests() {
    for (let i = 0; i < 10; i++) {
      
      let randomWinners = seasonList.map(function(season) {
        let randomNumber = makeRandomNumber(0, teamList.length-1);
        return Object.assign({}, season, {team: teamList[randomNumber].team, country: teamList[randomNumber].country,});
      });
      
      let randomCountry = countryList[makeRandomNumber(0, countryList.length-1)];
      
      console.log('tested country: ', randomCountry, '\n', 'list of winners:', JSON.stringify(randomWinners));
      Test.assertEquals(countWins(randomWinners, randomCountry), countWinsCheck(randomWinners, randomCountry));
    }
  }());
  
  
  
  
  
    });
  });
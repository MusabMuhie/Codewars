describe("Tests", () => {
    it("test", () => {
  var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
  ];
  
  
  var list2 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'standard' },
    { firstName: 'Noel', lastName: 'O.', country: 'Albania', continent: 'Europe', age: 23, language: 'Python', 
      meal: 'gluten-intolerant' },
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby', 
      meal: 'gluten-intolerant' },
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
      meal: 'diabetic' },
    { firstName: 'Nareh', lastName: 'Q.', country: 'Armenia', continent: 'Europe', age: 30, language: 'Clojure', 
      meal: 'standard' },
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript', 
      meal: 'standard' },
  ];
  
  
  
  console.log('List of developers: ', JSON.stringify(list1));
  Test.assertDeepEquals(orderFood(list1), orderFoodSolution(list1));
  
  console.log('List of developers: ', JSON.stringify(list2));
  Test.assertDeepEquals(orderFood(list2), orderFoodSolution(list2));
  
  
  
  // ========== RANDOM TEST CASES =========
  // Full list of developers
  var listFull = [
    { firstName: 'Noel', lastName: 'O.', country: 'Albania', continent: 'Europe', age: 23, language: 'Python' },
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Nareh', lastName: 'Q.', country: 'Armenia', continent: 'Europe', age: 30, language: 'Clojure' },
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'PHP' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'C' },
    { firstName: 'Zahra', lastName: 'S.', country: 'Azerbaijan', continent: 'Europe', age: 22, language: 'Java' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Emma', lastName: 'U.', country: 'Belgium', continent: 'Europe', age: 39, language: 'Python' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 28, language: 'PHP' },
    { firstName: 'Thomas', lastName: 'L.', country: 'Canada', continent: 'Americas', age: 38, language: 'Java' },
    { firstName: 'Agustin', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Marian', lastName: 'N.', country: 'Colombia', continent: 'Americas', age: 55, language: 'Python' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Jakub', lastName: 'Z.', country: 'Czech Republic', continent: 'Europe', age: 42, language: 'Java' },
    { firstName: 'Sofia', lastName: 'A.', country: 'Denmark', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 21, language: 'C' },
    { firstName: 'Manuel', lastName: 'C.', country: 'Equatorial Guinea', continent: 'Africa', age: 22, language: 'Ruby' },
    { firstName: 'Sofia', lastName: 'C.', country: 'Estonia', continent: 'Europe', age: 29, language: 'PHP' },
    { firstName: 'Liam', lastName: 'D.', country: 'Faroe Islands', continent: 'Europe', age: 28, language: 'Python' },
    { firstName: 'Ellen', lastName: 'E.', country: 'Finland', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Louise', lastName: 'F.', country: 'France', continent: 'Europe', age: 22, language: 'Java' },
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
    { firstName: 'Malik', lastName: 'J.', country: 'Greenland', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 28, language: 'Ruby' },
    { firstName: 'Stevenson', lastName: 'O.', country: 'Haiti', continent: 'Americas', age: 22, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Margret', lastName: 'M.', country: 'Iceland', continent: 'Europe', age: 28, language: 'Java' },
    { firstName: 'Aadya', lastName: 'Y.', country: 'India', continent: 'Asia', age: 29, language: 'PHP' },
    { firstName: 'Fatemeh', lastName: 'Z.', country: 'Iran', continent: 'Asia', age: 29, language: 'Java' },
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 38, language: 'Ruby' },
    { firstName: 'Joshua', lastName: 'O.', country: 'Isle of Man', continent: 'Europe', age: 39, language: 'Clojure' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'PHP' },
    { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' },
    { firstName: 'Yerasyl', lastName: 'D.', country: 'Kazakhstan', continent: 'Asia', age: 22, language: 'Ruby' },
    { firstName: 'Sofija', lastName: 'Q.', country: 'Latvia', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Aya', lastName: 'D.', country: 'Libya', continent: 'Africa', age: 39, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 32, language: 'JavaScript' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Gabriel', lastName: 'T.', country: 'Luxembourg', continent: 'Europe', age: 28, language: 'Java' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 21, language: 'Clojure' },
    { firstName: 'Mamadou', lastName: 'E.', country: 'Mali', continent: 'Africa', age: 22, language: 'Python' },
    { firstName: 'Luke', lastName: 'V.', country: 'Malta', continent: 'Europe', age: 29, language: 'PHP' },
    { firstName: 'Ximena', lastName: 'Q.', country: 'Mexico', continent: 'Americas', age: 28, language: 'Java' },
    { firstName: 'Sofia', lastName: 'W.', country: 'Moldova', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 29, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Sara', lastName: 'Y.', country: 'Montenegro', continent: 'Europe', age: 39, language: 'C' },
    { firstName: 'Mohamed', lastName: 'F.', country: 'Morocco', continent: 'Africa', age: 40, language: 'Ruby' },
    { firstName: 'Krishna', lastName: 'G.', country: 'Nepal', continent: 'Asia', age: 22, language: 'Java' },
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
    { firstName: 'Emily', lastName: 'A.', country: 'Northern Ireland', continent: 'Europe', age: 32, language: 'JavaScript' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
    { firstName: 'Fatima', lastName: 'H.', country: 'Pakistan', continent: 'Asia', age: 28, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    { firstName: 'Althea', lastName: 'I.', country: 'Philippines', continent: 'Asia', age: 31, language: 'Python' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 35, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Marija', lastName: 'U.', country: 'Republic of Macedonia', continent: 'Europe', age: 42, language: 'JavaScript' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
    { firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 21, language: 'Clojure' },
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Nikola', lastName: 'H.', country: 'Serbia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Europe', age: 28, language: 'Java' },
    { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Europe', age: 29, language: 'Clojure' },
    { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
    { firstName: 'Seoyeon', lastName: 'J.', country: 'South Korea', continent: 'Asia', age: 29, language: 'Ruby' },
    { firstName: 'Hugo', lastName: 'K.', country: 'Spain', continent: 'Europe', age: 39, language: 'Python' },
    { firstName: 'William', lastName: 'L.', country: 'Sweden', continent: 'Europe', age: 32, language: 'Java' },
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'Clojure' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'PHP' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'Ruby' },
    { firstName: 'Mehdi', lastName: 'H.', country: 'Tunisia', continent: 'Africa', age: 42, language: 'Python' },
    { firstName: 'Yusuf', lastName: 'N.', country: 'Turkey', continent: 'Europe', age: 22, language: 'Python' },
    { firstName: 'Artem', lastName: 'O.', country: 'Ukraine', continent: 'Europe', age: 29, language: 'Java' },
    { firstName: 'Mohammad', lastName: 'N.', country: 'United Arab Emirates', continent: 'Asia', age: 39, language: 'C' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
    { firstName: 'Sebastian', lastName: 'W.', country: 'Venezuela', continent: 'Americas', age: 28, language: 'Python' },
    { firstName: 'Oliver', lastName: 'P.', country: 'Wales', continent: 'Europe', age: 29, language: 'JavaScript' },
  ];
  
  
  // List of possible languages for this kata
  var possibleMeals = ['standard',  'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'];
  
  
  // Function generating random numbers between min and max
  function makeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  
  
  // Modify the original list of developers
  for (let i = 0; i < listFull.length; i++) {
    listFull[i].meal = possibleMeals[makeRandomNumber(0,possibleMeals.length-1)];
  }
  
  
  // Function shuffling the array (in place)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  
  // Working solution
  function orderFoodSolution(list) {
    const mealCount = {};
    list.forEach(dev => mealCount[dev.meal] = mealCount[dev.meal] ? mealCount[dev.meal]+1 : 1);
    return mealCount;
  }
  
  // Generate random tests using a self-invoking function
  (function() {
    for (let i = 0; i < 30; i++) {
      // Copy the array
      let listFullCopy = listFull.slice();
      
      // Shuffle the array
      shuffleArray(listFullCopy);
      
      // Shorten the array
      listFullCopy = listFullCopy.slice(0,20);
      
      // Log the input for debugging purposes
      console.log(`Random test #${i+1}`);
      console.log(`List of developers: ${JSON.stringify(listFullCopy)}`);
      
      let expected = orderFoodSolution(listFullCopy);
      let actual = orderFood(listFullCopy);
      Test.assertDeepEquals(actual, expected);
    }
  }());
    });
  });
  
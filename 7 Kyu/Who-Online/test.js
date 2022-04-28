const names = [
    "Ms Fluffy",
    "Mrs Insomniacpants",
    "Tigger",
    "Pixie",
    "Miss Raringworth",
    "Miss Watchful",
    "Tiger",
    "Olive",
    "Modigliana",
    "Mrs Softworth",
    "Silhouette",
    "Mousse",
    "Red",
    "Thundercat",
    "Raven",
    "Stevie",
    "Panther",
    "Lioness",
    "Blackie",
    "Ash",
    "Miss Vigilantpants",
    "Ashley",
    "Amber",
    "Licorice",
    "Catalie",
    "Ms Shortlickle",
    "Ms Alert",
    "Mrs Impatient",
    "Stripes",
    "Mrs Downlikelickle",
    "Mrs Flossy of United Kingdom",
    "Soot",
    "Ms Downypop",
    "Batwoman",
    "Ms Restivelickle",
    "Ruth",
    "Oreo",
    "Libby",
    "Chess",
    "Orca",
    "Latte",
    "Panda",
    "Carolyn",
    "Puffins",
    "Minnie",
    "Patch",
    "Sundae",
    "Dorothy",
    "Karen",
    "Barbara",
    "Rebecca",
    "Gracie",
    "Domino",
    "Dice",
    "Suduko",
    "Puffin",
    "Violet",
    "Piano"
  ];
  
  const getResult = friends => {
    let obj = {};
  
    const updateObj = (status, username) => {
      obj[status] ? obj[status].push(username) : (obj[status] = [username]);
    };
  
    for (let i = 0; i < friends.length; i++) {
      const friend = friends[i];
      if (friend.status === "online") {
        friend.lastActivity <= 10
          ? updateObj(friend.status, friend.username)
          : updateObj("away", friend.username);
      } else {
        updateObj(friend.status, friend.username);
      }
    }
    return obj;
  };
  
  const checkResult = (received, expected) => {
    if (received.online) {
      received.online = received.online.sort();
    }
    if (received.offline) {
      received.offline = received.offline.sort();
    }
    if (received.away) {
      received.away = received.away.sort();
    }
  
    if (expected.online) {
      expected.online = expected.online.sort();
    }
    if (expected.offline) {
      expected.offline = expected.offline.sort();
    }
    if (expected.away) {
      expected.away = expected.away.sort();
    }
  
    Test.assertDeepEquals(received, expected, "Wrong result");
  };
  
  describe("Few friends Tests", function() {
    var friends;
  
    it("5 Friends Test", function() {
      friends = [
        {
          username: "David",
          status: "online",
          lastActivity: 10
        },
        {
          username: "Lucy",
          status: "online",
          lastActivity: 0
        },
        {
          username: "Bob",
          status: "online",
          lastActivity: 3
        },
        {
          username: "Julie",
          status: "offline",
          lastActivity: 104
        },
        {
          username: "Lenny",
          status: "online",
          lastActivity: 38
        }
      ];
  
      const expected = {
        online: ["David", "Lucy", "Bob"],
        offline: ["Julie"],
        away: ["Lenny"]
      };
      checkResult(whosOnline(friends), expected);
    });
  });
  
  describe("Friends Test", function() {
    var friends;
  
    it("12 Freinds Test", function() {
      friends = [
        {
          username: "David",
          status: "online",
          lastActivity: 10
        },
        {
          username: "Lucy",
          status: "online",
          lastActivity: 0
        },
        {
          username: "Bob",
          status: "offline",
          lastActivity: 104
        },
        {
          username: "Julie",
          status: "online",
          lastActivity: 3
        },
        {
          username: "Lenny",
          status: "online",
          lastActivity: 38
        },
        {
          username: "Charlie",
          status: "online",
          lastActivity: 34
        },
        {
          username: "Jemma",
          status: "offline",
          lastActivity: 2
        },
        {
          username: "Tom",
          status: "online",
          lastActivity: 11
        },
        {
          username: "Tommy",
          status: "online",
          lastActivity: 9
        },
        {
          username: "Jonny",
          status: "online",
          lastActivity: 4
        },
        {
          username: "Natalie",
          status: "offline",
          lastActivity: 97
        }
      ];
  
      const expected = {
        online: ["David", "Lucy", "Julie", "Tommy", "Jonny"],
        offline: ["Bob", "Jemma", "Natalie"],
        away: ["Lenny", "Charlie", "Tom"]
      };
      checkResult(whosOnline(friends), expected);
    });
  });
  
  describe("No Friends Test", function() {
    var friends;
  
    it("No Friends", function() {
      friends = [];
      const expected = {};
      checkResult(whosOnline(friends), expected);
    });
  });
  
  describe("10 Random Tests for upto 58 friends", function() {
    for (let i = 0; i < 10; i++) {
      let friendNum = Math.floor(Math.random() * 58);
      it(`For ${friendNum} random friends`, function() {
        const testNames = names.slice();
        let friends = [];
        for (let j = 0; j < friendNum; j++) {
          friends.push({
            username: testNames.splice(
              Math.floor(Math.random() * testNames.length),
              1
            )[0],
            status: Math.random() > 0.5 ? "online" : "offline",
            lastActivity: Math.floor(Math.random() * Math.floor(100))
          });
        }
        checkResult(whosOnline(friends), getResult(friends));
      });
    }
  });
  
  describe("10 Random Tests for upto 1000 friends", function() {
    for (let i = 0; i < 10; i++) {
      let friendNum = Math.floor(Math.random() * 1000);
      it(`For ${friendNum} random friends`, function() {
        const testNames = names.slice();
        let friends = [];
        for (let j = 0; j < friendNum; j++) {
          friends.push({
            username: "Friend " + j,
            status: Math.random() > 0.5 ? "online" : "offline",
            lastActivity: Math.floor(Math.random() * Math.floor(100))
          });
        }
        checkResult(whosOnline(friends), getResult(friends));
      });
    }
  });
  
  describe("12 Random Tests for upto 100,000 of friends", function () {
    for (let i = 0; i < 12; i++) {
      let friendNum = Math.floor(Math.random() * 100000);
      it(`For ${friendNum} random friends`, function () {
        const testNames = names.slice();
        let friends = [];
        for (let j = 0; j < friendNum; j++) {
          friends.push({
            username: "Friend" + j,
            status: Math.random() > 0.5 ? "online" : "offline",
            lastActivity: Math.floor(Math.random() * Math.floor(100))
          });
        }
        checkResult(whosOnline(friends), getResult(friends));
      });
    }
  });
  
  describe("Random Test for too many friends", function () {
      let friendNum = 500000;
      it(`For 500,000 random friends`, function () {
        const testNames = names.slice();
        let friends = [];
        for (let j = 0; j < friendNum; j++) {
          friends.push({
            username: "Friend" + j,
            status: Math.random() > 0.5 ? "online" : "offline",
            lastActivity: Math.floor(Math.random() * Math.floor(100))
          });
        }
        checkResult(whosOnline(friends), getResult(friends));
      });
  });
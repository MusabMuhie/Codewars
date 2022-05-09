describe("Basic tests",() =>{
    Test.assertSimilar(splitTheBill({A: 20, B: 15, C: 10}), {A: 5.00, B: 0.00, C: -5.00});
    Test.assertSimilar(splitTheBill({A: 40, B: 25, X: 10}), {A: 15.00, B: 0.00, X: -15.00});
    Test.assertSimilar(splitTheBill({A: 40, B: 25, C: 10, D: 153, E: 58}), {A: -17.20, B: -32.20, C: -47.20, D: 95.80, E: 0.80});
    Test.assertSimilar(splitTheBill({A: 475, B: 384, C: 223, D: 111, E: 19}), {A: 232.6, B: 141.6, C: -19.4, D: -131.4, E: -223.4});
    Test.assertSimilar(splitTheBill({A: 20348, B: 493045, C: 2948, D: 139847, E: 48937534, F: 1938724, G: 4, H: 2084}), {A: -6421468.75, B: -5948771.75, C: -6438868.75, D: -6301969.75, E: 42495717.25, F: -4503092.75, G: -6441812.75, H: -6439732.75});
});

describe("Random tests",() =>{
    //random integer function
    function randint(a, b) {
    return Math.floor((Math.random() * b) + a);
    }
    //create 3 objects with random values
    let myTestObj = {};
    let myTestObj2 = {};
    let myTestObj3 = {};
    for(let i = 1; i<randint(2, 11); i++){
        myTestObj['Person ' + i] = randint(1,100);
    };
    for(let i = 1; i<randint(2, 11); i++){
        myTestObj2['Person ' + i] = randint(1,100);
    };
    for(let i = 1; i<randint(2, 11); i++){
        myTestObj3['Person ' + i] = randint(1,100);
    };
    // Example splitTheBill function
    function testingTheBill(x){
        let total = 0, count = 0;
        for(let prop in x){
            total += x[prop];
            count++;
        }
        let each = total/count;
        for(let prop in x){
            x[prop] = +((x[prop]-each).toFixed(2));
        };
        return x;
    }
    // Tests
    Test.assertSimilar(splitTheBill(myTestObj), testingTheBill(myTestObj));
    Test.assertSimilar(splitTheBill(myTestObj2), testingTheBill(myTestObj2));
    Test.assertSimilar(splitTheBill(myTestObj3), testingTheBill(myTestObj3));
    
});
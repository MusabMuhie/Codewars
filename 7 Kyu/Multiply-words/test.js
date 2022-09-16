describe("Basic Tests", function() {

    Test.assertEquals(modifyMultiply("This is a string",3 ,5), "string-string-string-string-string", "The string is incorrect")
    Test.assertEquals(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10), "that-that-that-that-that-that-that-that-that-that")
    Test.assertEquals(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1), "means")
    Test.assertEquals(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance")
    Test.assertEquals(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5), "around-around-around-around-around")
    
    });
    
    describe("Random Tests", function(){
    
    function modifyMultiplyCheck (str,loc,num) {
    let string = str.split(' ');
    let modStr = Array(num).fill(string[loc]);   
    return modStr.join('-') ;
    } 
    
    function makestring(min, max) {
    let array = [];
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let length = Math.ceil((Math.random() * max) + min);
    if (max < min) return "Maximum argument should be greater than minimum!";
    for( let i=0; i < length; i++ ) {
    array.push(possible[(Math.floor(Math.random() * possible.length))] );
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]+ " " );
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]+ " " );
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]+ " " );
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    array.push(possible[(Math.floor(Math.random() * possible.length))]);
    
    }
    return array.join("");
    }
    
    
    for (let i = 0; i < 100; i++) {
    let random1 = makestring(10,20);
    let random2 = Math.ceil(Math.random() * 15); //this might produce 7
    let random3 = Math.ceil(Math.random() * 10); // this might produce 5
    
    Test.assertEquals(modifyMultiply(random1,random2,random3), modifyMultiplyCheck(random1,random2,random3))
    }
    
    
    });
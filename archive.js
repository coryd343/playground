// const hello = () => {
//     console.log("Hello world!");
// }

// function print (bogus) {
//     console.log(bogus);
// }

// function addandprint (arg1, arg2) {
//     //const var let
//     var sum;
//     sum = arg1 + arg2;
//     console.log(sum);
//     sum = sum + arg1;
//     console.log(sum);
// }

// function drawBox () {
//     log("+------+");
//     log("|            |");
//     log("|            |");
//     log("+------+");
// }

// function drawCone () {
//     log("    /\\");
//     log("   /      \\");
//     log("  /        \\");
//     log("/            \\");
// }

// function drawBlock () {
//     log("| Untied |");
//     log("| Status |");
// }

// function addBoxCone () {
//     drawCone();
//     drawBox();
//     drawBlock();
//     drawBox();
//     drawCone();
// }

// function logParagraph () {
//     log("\"How are you?\"\n\"Fine.\"");
// }

// function logMultiline () {
//     log(`Have you heard the word?
// The bird is the word!`);
// }

// function logAge (age) {
//     log(`I am ${age} years old`);
// }

// function logAge2 (age) {
//     log("I am" + age + "years old.");
// }

// function checkAge (age) {
//     log(`Ah! You're ${age} years old.`);
//     if (age < 21) {
//         log("Get out of here, kid!");
//     }
//     else {
//         log("You may give me money now.");
//     }
//     if (age == 3.14159) {
//         log("Here, have a pie.");
//     }
//     log("Thank you! Please come again!");
// }

// function checkAge2 (age) {
//     const output = age < 21 ? "Get out kid!" : "Party time!";
//     log(output);
// }

// function favoriteFood (food, flavor) {
//     if (!food) {
//         log("You didn't tell me what your favorite food is!");
//         return;
//     }
//     log(`Oh! Your favorite food is ${food}`);
//     food = food.toLowerCase();
//     if (flavor) {
//         flavor = flavor.toLowerCase();
//     }
//     if (food == "rice") {
//         log("Goes well with chicken!");
//     }
//     if (food == "banana") {
//         log("You must be a monkey!");
//     }
//     if (food == "mango")
//         log("You must be a donkey!");
//     if (food == "ice cream") {
//         log("So, you like ice cream, eh?")
//         if (!flavor) {
//             log("...you should tell me what flavor.")
//         }
//         if (flavor == "chocolate") {
//             log("I like chocolate!")
//         }
//         if (flavor == "mint") {
//             log("Mint is okay!")
//         }
//     }
//     else {
//         log("I've never heard of that food, but you do look like a looney.");
//     }
// }

// function favoriteFood2 (food, flavor) {
//     switch (food) {
//         case "rice":
//             log("Goes well with chicken!");
//             break;
//         case "banana":
//             log("You must be a monkey!");
//             break;
//         default:
//             log("I don't know that kind of food.");
//     }
// }

//  const dog1 = {
//      name: "Fido",
//      breed: "Collie",
//      bark: function () {
//          log("Bark!")
//      }
// };


// const dog2 = {
//     name: "Spot",
//     breed: "Rottweiler",
//     bark: function () {
//         log("Woof!")
//     }
// };


// function callDog (theDog) {
//     log(`Here ${theDog.name}! You're a good ${theDog.breed}!`);
//     theDog.bark();
// }

// function getDog (theName, theBreed, barkSound) {
//     let dog = {
//         name: theName,
//         breed: theBreed,
//         bark: function () {
//             log(barkSound)
//         }
//     };  
//     return dog;  
// }

// function countDown () {
//     log(10)
//     log(9)
//     log(8)
//     log(7)
//     log(6)
//     log(5)
//     log(4)
//     log(3)
//     log(2)
//     log(1)
// }

// function countDown2 (start) {
//     for (let i = start; i >= 0; i--) {
//         log(i);
//         if (i == Math.floor(start/2)) {
//             log("Woah, buddy! Halfway there!")
//         }
//         if (i % 2 == 0) {
//             log("even")
//         }
//     }
// }

// function spellWord (theWord) {
//     for (let i = 0; i < theWord.length; i++) {
//         log(theWord.charAt(i));
//     }
// }

// // write function that draws as many rockets according to parameter.

// function drawBox () {
//     log("+------+");
//     log("|            |");
//     log("|            |");
//     log("+------+");
// }

// function drawCone () {
//     log("     /\\");
//     log("    /   \\");
//     log("   /      \\");
//     log("  /        \\");
// }

// function drawBlock () {
//     log("| Untied |");
//     log("| Status |");
// }

// function addBoxCone (repeatX) {
//     for (let i = 0; i < repeatX; i++) {
//         drawCone();
//         drawBox();
//         drawBlock();
//         drawBox();
//         drawCone();
//     }
// }

// // write function called callCat that replicates the logic of callDog. Needs to call another function called getCat.
// // cat has name, age, function called "meowSound"

// function callCat (theCat) {
//     log(`Me: Come here ${theCat.name}!`);
//     log(`Me: ${theCat.name}?`);
//     log(`Me: Fine, ignore me, you silly ${theCat.breed}!`);
//     theCat.meow();
// }

export function getCat (theName, theBreed, theAge, meowSound) {
    let cat = {
        name: theName,
        breed: theBreed,
        age: theAge,
        meow: function () {
            log(theName + ': ' + meowSound)
        }
    };  
    return cat;  
}

// function superX (word, character){
//     log(word);
//     log(character);
//     for (let i = 0; i < word.length; i++) {
//         if (word.charAt(i) == character) {
//             log(`Found match at character ${i}`);
//             return;
//         }
//     }
//     log('No matches; no fire!')
// }

// /**
//  * Logs every occurance of the search term inside the word
//  * @param {string} word the text to be search through
//  * @param {string} character the search term
//  */
// function findAllMatchesInWord(word, character) {
//     let thereIsAMatch = false; // this is a flag
//     for (let i = 0; i < word.length; i++) {
//         if (word.charAt(i) === character) {
//             log(`Found match at character ${i}`);
//             thereIsAMatch = true;
//         }
//     }
//     if (!thereIsAMatch) {
//         log('No matches; no fire!');
//     }
// }

//     //loop thru all characters of dunjinnText
//     //if char is l print "Move left"
//     //if char is r print "Move right"
//     //if char is u print "Move up"
//     //if char is d print "Move down"
//     //if char is m print "You killed a monster!"
//     //if char is t print "You found a trinket of indeterminate origin"
//     //if char none of above print "Got some RnR"

// /**
//  * 
//  * @param {*} dunjinnText 
//  */
// function dunjinnCraul(dunjinnText) {
//     if (dunjinnText.length === 0) {
//         log("No input; no output!");
//         return;
//     }
//     for (let i = 0; i < dunjinnText.length; i++) {
//         let inputReceived = dunjinnText.charAt(i);
//         switch (inputReceived) {
//             case "l":
//                 log("Moved left");
//                 break;
//             case "r":
//                 log("Moved right");
//                 break;
//             case "u":
//                 log("Moved up");
//                 break;
//             case "d":
//                 log("Moved down");
//                 break;
//             case "b":
//                 log("You bullrushed a monster!");
//                 break;
//             case "a":
//                 log("You aquired a trinket of indeterminate origin");
//                 break;
//             default:
//                 log("Got some RnR");
//                 break;
//         }
//     }
// }

// function dunjinCraull(dunjinText) {
//     let thereIsAMatch = false; // this is a flag
//     if (dunjinText.length === 0) {
//         log("No input; no output!");
//         return;
//     }
//     for (let i = 0; i < dunjinText.length; i++) {
//         if (dunjinText.charAt(i) === "l") {
//             log("Moved left");
//             thereIsAMatch = true;
//         }
//         if (dunjinText.charAt(i) === "r") {
//             log("Moved right");
//             thereIsAMatch = true;
//         }
//         if (dunjinText.charAt(i) === "u") {
//             log("Moved up");
//             thereIsAMatch = true;
//         }
//         if (dunjinText.charAt(i) === "d") {
//             log("Moved down");
//             thereIsAMatch = true;
//         }
//         if (dunjinText.charAt(i) === "b") {
//             log("You bullrushed a monster!");
//             thereIsAMatch = true;
//         }
//         if (dunjinText.charAt(i) === "a") {
//             log("You aquired a trinket of indeterminate origin");
//             thereIsAMatch = true;
//         }
//     }
//     if (!thereIsAMatch) {
//         log("Got some RnR");
//     }
// }

// const DunjinOptions = {
//     left:  "Moved left",
//     right:  "Moved right",
//     up:  "Moved up",
//     down:  "Moved down",
//     aquired:  "You aquired an artifact of uncertain origin",
//     bullrushed:  "You bullrushed a monster!",
// }; 

// function testDunjinOptions() {
//     const test = [DunjinOptions.aquired, DunjinOptions.bullrushed, DunjinOptions.down];
//     log(test);
// }

// function dunjinCraullWithArrays(dunjinArray) {
//     for (let i = 0; i < dunjinArray.length; i++) {
//         log(dunjinArray[i]);
//     }
// }

// function dunjinCraullWithArrays2(dunjinArray) {
//     for (let option of dunjinArray) {
//         log(option);
//     }
// }

// function testCat() {
//     const theCat = getCat("Pboebe", "Tortiseshell", 7, "Brrrrpt?")
//     log(theCat.name);
// }
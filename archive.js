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

// Tutorial work below

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

function getRandomCat() {
    const names = ["Mr. Blorbs", "Feline Musk", "Teddy Purrseveldt", "Calico Jack", "Bob"];
    const breeds = ["Siamese", "Scottish Fold", "Manx", "Maine Coon", "Tabby"];
    const meows = ["Meow", "Brrrrrpt", "HISS!", "*Blank stare*", "*Chitters*"];
    const ages = getRandomInt(0, 22);

    return getCat(names[getRandomInt(0, names.length - 1)], breeds[getRandomInt(0, breeds.length - 1)], ages, meows[getRandomInt(0, meows.length - 1)]);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1) + min);
}

// Refactor getRandomInt function to perform all three steps the num variable on one line

// function getRandomInt2(min, max) {
//     max = max + 1;
//     let num = Math.random();
//     num = num * max;
//     num = num + min;
//     num = Math.floor(num);
//     return(num);
// }

// Create a function which creates an array of 5 random cats, loops through them, and prints them

function getRandomCatArray(length) {
    // get cat array
        // create array variable
    //const catArray = new Array();
    const catArray = [];
        // loop 5x
        for (let i = 0; i < length; i++) {
            // create random cat
            const theCat = getRandomCat();
            // add cat to array
            catArray.push(theCat);
        }
        
    // loop through array
        // print cat
        //log(catArray);
        return catArray;
}
/**
 * searches the given array for the first instance of a cat with the name "Feline Musk" and returns its index or -1 if not present
 * @param {array} catArray 
 */
function findFelineMusk(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        const theCat = catArray[i];
        if (theCat.name === "Feline Musk") {
            log(`Feline Musk found at ${i}!`);
            return i;
        }
    }
    log(`Feline Musk has emmigrated to mars.`);
    return -1;
}

// function findAllMatchesInWord(word, character) {
        
//         if (!thereIsAMatch) {
//             log('No matches; no fire!');
//         }
//     }

function howToFindFelineMusk(cat) {
    return cat.name === "Feline Musk";
}

/**
 * 
 * @param {array} catArray 
 */
function findFelineMusk2(catArray) {
        return catArray.find(howToFindFelineMusk);
}

/**
 * 
 * @param {array} catArray 
 */
function findFelineMusk3(catArray) {
    return catArray.find((cat) => {return cat.name === "Feline Musk";});
}

/**
 * 
 * @param {array} catArray 
 */
function findFelineMusk4(catArray) {
    return catArray.find((cat) => cat.name === "Feline Musk");
}

/**
 * inserts the given cat at the given index of the given array (assuming we don't have handy premade javascript functions) and returns the result
 * @param {cat} newCat 
 * @param {number} index 
 * @param {array} catArray 
 */
function insertCatAtIndex(newCat, index, catArray) {
    const newCatArray = [];
    for (let i = 0; i < catArray.length + 1; i++) {
        if (i < index) {
            newCatArray.push(catArray[i]);
        }

        if (i === index) {
            newCatArray.push(newCat);
        }

        if (i > index) {
            newCatArray.push(catArray[i - 1]);
        }
    }
    return newCatArray;
}

// if user gives negative index, insert it first element (0)
// if user gives index greater than array.length insert at last element

/**
 * inserts the given cat at the given index of the given array (assuming we don't have handy premade javascript functions) and returns the result
 * @param {cat} newCat 
 * @param {number} index 
 * @param {array} catArray 
 */
function insertCatAtIndex1(newCat, index, catArray) {
    const newCatArray = [];
    for (let i = 0; i < catArray.length + 1; i++) {
        if (index < 0) {
            index = 0;
            log("Index was negative.");
    
        }

        if (index > catArray.length) {
            index = catArray.length;
            log("Index exceeded array length.");
        }

        if (i < index) {
            newCatArray.push(catArray[i]);
            log("Before insert index.");
        }

        if (i === index) {
            newCatArray.push(newCat);
            log("Insert here!");
        }

        if (i > index) {
            newCatArray.push(catArray[i - 1]);
            log("After insert index.");
        }
    }
    return newCatArray;
}

/**
 * Inserts the given cat at the given index of the given array (assuming we don't have handy premade javascript functions) and returns the result.
 * If the user gives a negative index, insert it as the first element (index 0).
 * If the user gives an index greater than array.length, insert it as the last element.
 * @param {any} newCat - The new cat to insert.
 * @param {number} index - The index at which to insert the new cat.
 * @param {array} catArray - The array of cats.
 * @returns {array} The new array with the cat inserted.
 */
function insertCatAtIndex2(newCat, index, catArray) {
    const newCatArray = [];
    const length = catArray.length;
    
    // Adjust the index if it's out of bounds
    if (index < 0) {
        index = 0;
    } else if (index > length) {
        index = length;
    }

    for (let i = 0; i < length + 1; i++) {
        if (i < index) {
            newCatArray.push(catArray[i]);
        } else if (i === index) {
            newCatArray.push(newCat);
        } else {
            newCatArray.push(catArray[i - 1]);
        }
    }
    
    return newCatArray;
}

/**
 * Prints the lyrics to "99 Bottles of Beer" starting from the value of 99 then interates down the set of integers to 0
 */
function ninetyNineBottles() { 
    log("I have been called."); 
    for (let i = 99; i > 0; i--) {
        log(`${i} bottles of beer! Take one down, pass it around--${i -1} bottles of beer on the wall!`);
    }
}

/**
 * swaps 2 elements of the given array and returns the result
 * @param {*} theArray the array on which to perform the swap
 * @param {*} indexOne index the first element to swap
 * @param {*} indexTwo index of the second element to swap
 * @returns {Array}
 */
function swap (theArray, indexOne, indexTwo) {
    
    if (
        indexOne < 0 ||
        indexTwo < 0 ||
        indexOne >= theArray.length ||
        indexTwo >= theArray.length
    ) {
        log("Invalid index or indicies")
        return theArray;
    }

    const placeHolder = theArray[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = placeHolder;
    return theArray;
}

/**
 * Shifts all the elements of the given array one position earlier and moves first element to the back
 * @param {Array} theArray 
 */
function rotate (theArray) {
    let first, second;
    for (let i = 0; i < theArray.length; i++) {
        first = i;
        second = i + 1;
        if (second < theArray.length) {
            swap(theArray, first, second);
        }
    }
}

// 1. modify swap function to safeguard invalid indexOne and indexTwo (no negatives or values greater than length)
// 2. write a function called reverse, which accepts an array and reverses the order of every element (given 1, 2, 3, 4, -> 4, 3, 2, 1)

function reverse (theArray) {
    for (let i = 0; i < theArray.length; i++) {
        if (theArray) {
            (theArray)
        }
    }
}

/**
 * grants access if isAuthorized = true and either isFaceReccognized or isKeyCardValid = true
 * @param {*} isAuthorized 
 * @param {*} isFaceRecognized 
 * @param {*} isKeycardValid 
 * @returns
 */
function allowAccessOld (isAuthorized, isFaceRecognized, isKeycardValid) {
    let isAllowed = false;
    let isCredentialed = false;

    if (isFaceRecognized === true || isKeycardValid === true) {
        isCredentialed = true;
    }

    if (isAuthorized === true && isCredentialed === true) {
        isAllowed = true;
    }

    return isAllowed;
}

/**
 * grants access if isAuthorized = true and either isFaceReccognized or isKeyCardValid = true
 * @param {*} isAuthorized 
 * @param {*} isFaceRecognized 
 * @param {*} isKeycardValid 
 * @returns 
 */
function allowAccess (isAuthorized, isFaceRecognized, isKeycardValid) {
    return (isFaceRecognized || isKeycardValid) && isAuthorized;
}

// Homework 1: Write a function called "robotResponse" which accepts the same three Booleans as the "allowAccess" function and returns a string which is what the robot says in response to that unique of true/false set evaluation

function countAttemptsToGetMyNumber(myNum) {
    let hasAMatch;
    let currentNumber;
    let howManyAttempts = 0;
    while (!hasAMatch) {
        currentNumber = getRandomInt(0, 100);
        hasAMatch = currentNumber === myNum;
        howManyAttempts++;
        log(currentNumber);
    }
    return howManyAttempts;
}
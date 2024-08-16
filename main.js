import { getCat } from "./archive.js";

//import { DunjinOptions } from "./models/DunjinOptions.js";

document.addEventListener('DOMContentLoaded', () => {
    const buttonMainCenter = document.getElementById('buttonMainCenter');

    const initialText = 'Do you feel lucky?';
    const hoverText = 'Well do ya, punk‽';
    const clickedText = '*BANG!*';

    buttonMainCenter.textContent = initialText;

    buttonMainCenter.addEventListener('mouseover', () => {
        if (!buttonMainCenter.classList.contains('clicked')) {
            buttonMainCenter.textContent = hoverText;
        }
    });

    buttonMainCenter.addEventListener('mouseout', () => {
        if (!buttonMainCenter.classList.contains('clicked')) {
            buttonMainCenter.textContent = initialText;
        }
    });

    buttonMainCenter.addEventListener('mousedown', () => {
        buttonMainCenter.textContent = clickedText;
    });

    buttonMainCenter.addEventListener('mouseup', () => {
        if (!buttonMainCenter.classList.contains('clicked')) {
            buttonMainCenter.textContent = initialText;
        }
    });

    buttonMainCenter.addEventListener('click', () => {
        buttonMainCenter.classList.toggle('clicked');
        //const test = [DunjinOptions.aquired, DunjinOptions.bullrushed, DunjinOptions.down];
        //ninetyNineBottles(); // Call the function on button click
        // let catArray = getRandomCatArray(5);
        // log(catArray);
        // catArray = swap(catArray, 1, 3);
        // log(catArray);
        // const newcomer = getRandomCat();
        // newcomer.name = "Cal Lico";
        // catArray = insertCatAtIndex1(newcomer, -1, catArray);
        // log(catArray);
        // const testArray = [1, 2, 3, 4, 5];
        // log(testArray);
        // swap(testArray, 1, 3);
        // log(testArray);
        // const testArray = [{name: "Jimmy", age: 10}, {name: "Jim", age: 8}];
        // log(testArray);
        // swap(testArray, 0, 1);
        // log(testArray);
        // reverse(testArray);
        // log(testArray);
        // let hasAccessToBase0, hasAccessToBase1, hasAccessToBase2, hasAccessToBase3, hasAccessToBase4, hasAccessToBase5, hasAccessToBase6, hasAccessToBase7;
        // hasAccessToBase0 = allowAccess(true, true, true);
        // hasAccessToBase1 = allowAccess(true, true, false);
        // hasAccessToBase2 = allowAccess(true, false, true);
        // hasAccessToBase3 = allowAccess(true, false, false);
        // hasAccessToBase4 = allowAccess(false, true, true);
        // hasAccessToBase5 = allowAccess(false, true, false);
        // hasAccessToBase6 = allowAccess(false, false, true);
        // hasAccessToBase7 = allowAccess(false, false, false);
        // log(`1: ${hasAccessToBase0}, 2: ${hasAccessToBase1}, 3: ${hasAccessToBase2}, 4: ${hasAccessToBase3}, 5: ${hasAccessToBase4}, 6: ${hasAccessToBase5}, 7: ${hasAccessToBase6}, 8: ${hasAccessToBase7}`);
        const numOfAttempts = countAttemptsToGetMyNumber(55);
        log(`It took ${numOfAttempts} attempts!`);

    });
});

function log (text) {
    console.log(text);
}

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
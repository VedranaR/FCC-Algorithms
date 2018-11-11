//Sum All Numbers in a Range

//We'll pass you an array of two numbers.
//Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let biggest = arr[1];
  let smallest = arr[0];
  let temp = 0;
  for (let i = smallest; i <= biggest; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);

//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
//In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1
    .filter(item => arr2.indexOf(item) === -1)
    .concat(arr2.filter(item => arr1.indexOf(item) === -1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. //Remove all elements from the initial array that are of the same value as these arguments.

//Note
//You have to use the arguments object.

function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(item => args.indexOf(item) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  return collection.filter(obj =>
    sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let spinal = str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return spinal;
}

spinalCase("This Is Spinal Tap");

// Pig Latin
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let latin = "";
  let regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    latin = str + "way";
  } else if (str.match(regex) === null) {
    latin = str + "ay";
  } else {
    let vowel = str.indexOf(str.match(regex)[0]);
    latin = str.substr(vowel) + str.substr(0, vowel) + "ay";
  }
  return latin;
}

translatePigLatin("consonant");

// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog".

function myReplace(str, before, after) {
  let arr = str.split(" ");
  let ind = arr.indexOf(before);
  if (arr[ind].charAt(0) === arr[ind].charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  arr[ind] = after;
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

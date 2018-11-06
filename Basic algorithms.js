function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

/////////////////////

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");

////////////////////

function factorialize(num) {
  let res = num;

  if (num === 0 || num === 1) {
    return 1;
  }

  while (num > 1) {
    num--;
    res *= num;
  }

  return res;
}

factorialize(5);

////////////////////

function findLongestWordLength(str) {
  let arr = str.split(" ").map(w => w.length);

  arr.sort((a, b) => {
    return b - a;
  });
  return arr[0];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/////////////////////

function largestOfFour(arr) {
  arr.map(subArr =>
    subArr.sort((a, b) => {
      return b - a;
    })
  );
  let arrOfBig = [];
  for (let i = 0; i < arr.length; i++) {
    arrOfBig.push(arr[i].shift());
  }

  return arrOfBig;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

///////////////////
//Basic Algorithm Scripting: Confirm the Ending
////////////////

function confirmEnding(str, target) {
  let n = target.length;
  return str.slice(-n) === target ? true : false;
}

confirmEnding("Bastian", "n");

//Repeat a String Repeat a String
//////////////////////

function repeatStringNumTimes(str, num) {
  let repeat = "";
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      repeat += str;
    }
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);

//Truncate a String
/////////////////

function truncateString(str, num) {
  let cut;
  if (str.length > num) {
    cut = str.slice(0, num);
    return cut.concat("...");
  } else if (str.length <= num) {
    return (cut = str);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Finders Keepers
///////////////

function findElement(arr, func) {
  let test = arr.map(func);
  let i = test.indexOf(true);
  return arr[i];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Boo who
/////////////

function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

booWho(null);

//Title Case a Sentence
/////////////////////

function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let res = arr.map(function(item) {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  });
  return res.join(" ");
}

titleCase("I'm a little tea pot");

//Slice and Splice
////////////////

function frankenSplice(arr1, arr2, n) {
  let res = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    res.splice(n, 0, arr1[i]);
    n++;
  }

  return res;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy Bouncer
////////////////////

function bouncer(arr) {
  arr = arr.filter(Boolean);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

//Where do I Belong
/////////////////

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

//Mutations
//////////////

function mutation(arr) {
  let item1 = arr[0].toLowerCase();
  let item2 = arr[1].toLowerCase();

  return item2.split("").every(letter => item1.indexOf(letter) >= 0);
}

mutation(["hello", "hey"]);

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

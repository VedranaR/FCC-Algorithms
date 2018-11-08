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

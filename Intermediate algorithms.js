//Sum All Numbers in a Range

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

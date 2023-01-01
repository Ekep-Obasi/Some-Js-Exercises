// Fibonnaci Sequence

const fibonnaci = (n) => {
  fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(
    "Big-(O)Notation: Linear Time Complexity --> (O)n constant Space complexity --> (0)1 "
  );
  return fib;
};

// Fibonnaci Using Recursion

const recursiveFibonnaci = (n) => {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return recursiveFibonnaci(n - 1) + recursiveFibonnaci(n - 2);
  }
};

// Big-(O): O(2^n) Bad compared to the iterative method using for loops

// Factorial of a Number

const recursiveFactorial = (n) => {
  if (n < 2) return 1;
  return n * recursiveFactorial(n - 1);
};

// Linear Search

const linerSearch = (arr, target) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return -1;
};

// Binary Search

const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

// Recursive Binary Search

// const recursiveBinarySearch = (arr, target) => {
//   return Search(arr, target, 0, arr.length);
// };

// const Search = (arr, target, leftIndex, rightIndex) => {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }

//   if (target < arr[middleIndex]) {
//     return Search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return Search(arr, target, middleIndex + 1, rightIndex);
//   }
// };

// console.log(recursiveBinarySearch([-5, 2, 10, 24, 55], 55));

// Recursive Binary Search

const recursiveBinarySearch = (arr, target) => {
  arr.sort();
  return search(arr, target, 0, arr.length);
};
const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  } else if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};


// Bubble Sort

const bublleSort = (arr) => {
  let swap;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swap = false;
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap == true);
  return arr;
};

console.log(bublleSort([1, 4, 2, 7, 3]));

# Technical phone screen practice

First, watch https://www.youtube.com/watch?v=HWW-jA6YjHk

Tip: code in a problem.js file, and run `node problem.js` to evaluate it.

## Warm-up question set

**1. Write a function `hasDuplicates(str)` which returns true if input string has duplicate characters; returns false otherwise.**

Solution:

```js
function hasDuplicates(str) {
  const charsSeen = {};

  for (let idx = 0; idx < str.length; idx++) {
    const char = str[idx];

    // Check if char is a duplicate
    if (charsSeen[char]) {
      return true;
    }

    // Mark char as seen
    charsSeen[char] = true;
  }

  // If no duplicates were seen, return false
  return false;
}

// Test cases
assert(!hasDuplicates(''));
assert(!hasDuplicates('abc'));
assert(hasDuplicates('abca'));
assert(hasDuplicates('bbbbbbbb'));
```

**2. Write a function `reverseArray(arr)` which returns the same array with its elements reversed in-place.**

Solution:

```js
function reverseArray(arr) {
  const halfLength = Math.floor(arr.length / 2);

  // Do swaps for half the array. Don't need to swap the "middle" item.
  for (let idx1 = 0; idx1 < halfLength; idx1++) {
    // idx1=0 should swap with idx2=arr.length-1
    const idx2 = (arr.length - 1) - idx1;

    // Do swap
    const item1 = arr[idx1];
    const item2 = arr[idx2];
    arr[idx1] = item2;
    arr[idx2] = item1;
  }
  return arr;
}

// Test cases
console.log(reverseArray([]));
console.log(reverseArray([1]));
console.log(reverseArray([1, 2, 3, 4]));  // Even
console.log(reverseArray([1, 2, 3, 4, 5]));  // Odd
```

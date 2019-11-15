# Technical phone screen practice

First, watch either [coin change problem](https://www.youtube.com/watch?v=HWW-jA6YjHk) (first 9 minutes), or [missing list item](https://www.youtube.com/watch?v=cdCeU8DJvPM).

Tip: code in a problem.js file, and run `node problem.js` to evaluate it.

When you're listening to someone's solution, keep the following in mind:

* Did they ask clarifying questions?
* Did they analyze the big-O runtime?
* Do they come up with good test cases to try out?

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

**3. Write a function `sharedChars(str1, str2)` which returns a list of characters that are in both str1 and str2.**

`TODO`

## Questions

* Coin change problem
  * Part 1: with coins [25, 10, 5, 1]
  * Part 2: with coins [25, 10, 1]
  * Mock interview: https://www.youtube.com/watch?v=HWW-jA6YjHk
  * Leetcode: https://leetcode.com/problems/coin-change
  * Solutions: [javascript](s1_04a_coin_change_problem.js), [python](s1_04a_coin_change_problem.py)
* Two sum
  * Mock interview: https://www.youtube.com/watch?v=wBXZD436JAg
  * Leetcode: https://leetcode.com/problems/two-sum/

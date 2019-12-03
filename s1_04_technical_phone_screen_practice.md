# Technical phone screen practice

To see how a real phone screen can play out, you can watch either [coin change problem](https://www.youtube.com/watch?v=HWW-jA6YjHk) (first 9 minutes), or [missing list item](https://www.youtube.com/watch?v=cdCeU8DJvPM).

Tip: code in a problem.js file, and run `node problem.js` to evaluate it.

When you're listening to someone's solution, keep the following in mind:

* Did they ask clarifying questions?
* Did they analyze the big-O runtime?
* Do they come up with good test cases to try out?

## Questions

Warm-up:

* Contains duplicate
  * https://leetcode.com/problems/contains-duplicate
* Reverse string
  * https://leetcode.com/problems/reverse-string
* Find common characters
  * https://leetcode.com/problems/find-common-characters
* Coin change problem
  * Part 1: with coins [25, 10, 5, 1]
  * Part 2: with coins [25, 10, 1]
  * Mock interview: https://www.youtube.com/watch?v=HWW-jA6YjHk
  * Leetcode: https://leetcode.com/problems/coin-change
  * Solutions: [javascript](s1_04a_coin_change_problem.js), [python](s1_04a_coin_change_problem.py)
* Two sum
  * Mock interview: https://www.youtube.com/watch?v=wBXZD436JAg
  * Leetcode: https://leetcode.com/problems/two-sum/



## Solutions

### Contains duplicate

This is a common concept - taking advantage of hash tables having O(1) lookup. If we don't use a hash table, then for each item in the array, we'd have to do an O(n) scan to see if there are duplicates.

```js
function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
```

This has O(n^2) runtime because it does n(n + 1)/2 comparisons, and uses O(1) space.

Using a hash table:

```js
function containsDuplicate(arr) {
  const seen = {};

  for (let idx = 0; idx < arr.length; idx++) {
    const item = arr[idx];

    // Check if item is a duplicate
    if (seen[item]) {
      return true;
    }

    // Mark item as seen
    seen[item] = true;
  }

  // If no duplicates were seen, return false
  return false;
}
```

This has O(n) runtime because it does n passes through the array, and in each pass sets or gets an item in the hash table, which are both O(1). It uses O(n) space because potentially each value in the array could be stored as a key in the hash table.

Test cases:

```js
// Test cases
assert(!containsDuplicate([]));
assert(!containsDuplicate([1, 2, 3]));
assert(containsDuplicate([1, 2, 3, 1]));
assert(containsDuplicate([2, 2, 2, 2, 2]));
```

### Reverse string

```js
function reverseString(arr) {
  const halfLength = Math.floor(arr.length / 2);

  for (let idx1 = 0; idx1 < halfLength; idx1++) {
    // idx1 = 0 should swap with index arr.length-1
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
console.log(reverseString([]));
console.log(reverseString(['a']));
console.log(reverseString(['a', 'b', 'c', 'd']));  // Even
console.log(reverseString(['a', 'b', 'c', 'd', 'e']));  // Odd
```

### Find common characters

`TODO`

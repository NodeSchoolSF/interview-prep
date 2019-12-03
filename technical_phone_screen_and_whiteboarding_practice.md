# Technical phone screen and whiteboarding practice

## Prep advice

To see how a real phone screen can play out, you can watch a recording of someone solving [missing list item](https://www.youtube.com/watch?v=cdCeU8DJvPM) well.

When I'm solving a Leetcode problem, I'll code it in a JS file and run `node problem.js` to evaluate it. I'll console.log or assert some test cases at the bottom to check the functionality. See some of the [solutions](/solutions) for examples of this.

## Paired practice

Pair up into groups of 2. Each person picks one of the questions to work on. One person go first and try to solve the problem on their computer (or on whiteboard, if they want to practice that) while the other person listens.

While you're listening to someone's solution, keep the following in mind:

* Did they ask clarifying questions before implementing?
* Do they explain their thought process as they're working?
* Is the solution efficient (in runtime)?
* Ask them the big-O for runtime and space.
* Do they come up with good test cases to try out?
* Try running it on Leetcode. Are there bugs? Does it run and pass the Leetcode test cases?

## Questions

**NOTE:** you'll need to create a free account on leetcode.com.

Warm-up:

* Contains duplicate
  * https://leetcode.com/problems/contains-duplicate
* Reverse string
  * https://leetcode.com/problems/reverse-string
* Find common characters
  * https://leetcode.com/problems/find-common-characters
* Valid anagram
  * https://leetcode.com/problems/valid-anagram/
* Two sum
  * Mock interview: https://www.youtube.com/watch?v=wBXZD436JAg
  * Leetcode: https://leetcode.com/problems/two-sum/

More difficult:

* Coin change
  * Mock interview: https://www.youtube.com/watch?v=HWW-jA6YjHk
  * Leetcode: https://leetcode.com/problems/coin-change
  * Solutions: [javascript](solutions/coin_change.js), [python](coin_change.py)
* Climbing stairs
  * https://leetcode.com/problems/climbing-stairs/

Tree:

* [Maximum depth of binary tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)
* [Invert binary tree](https://leetcode.com/problems/invert-binary-tree/)


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

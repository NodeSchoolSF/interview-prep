// https://leetcode.com/problems/contains-duplicate

/*
Naive/brute force:

If we don't use a hash table, then for each item in the array, we'd have to do an O(n) scan to see if there are duplicates. This has O(n^2) runtime because it does n(n + 1)/2 comparisons, and uses O(1) space.
*/

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

/*
Using a hash table:

This has O(n) runtime because it does n passes through the array, and in each pass sets or gets an item in the hash table, which are both O(1). It uses O(n) space because potentially each value in the array could be stored as a key in the hash table.
*/

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


// Test cases
assert(!containsDuplicate([]));
assert(!containsDuplicate([1, 2, 3]));
assert(containsDuplicate([1, 2, 3, 1]));
assert(containsDuplicate([2, 2, 2, 2, 2]));

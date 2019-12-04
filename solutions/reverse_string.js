// https://leetcode.com/problems/reverse-string

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

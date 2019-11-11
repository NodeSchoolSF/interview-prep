/*
Watch first 9 minutes of:
https://www.youtube.com/watch?v=HWW-jA6YjHk

See https://leetcode.com/problems/coin-change/solution/
"dynamic programming - top down" for full explanation.
*/

// Naive version (slow for cents=221)
function minCoins(cents) {
  if (cents <= 0) {
    return 0;
  }

  const coins = [25, 10, 1];
  let minValue = Number.MAX_VALUE;

  for (const coin of coins) {
    // Can't use this coin if the value is lower
    if (coin > cents) {
      continue;
    }

    // Remove one copy of coin, and figure out
    // min coins for reduced amount.
    const value = minCoins(cents - coin) + 1;

    // Set min_value
    minValue = Math.min(minValue, value);
  }

  return minValue;
}

// Using top-down dynamic programming (recursion with memoization)
//
// Runtime: O(numcoins * numcents)
// Each of memo[i] to memo[numcents+1] will only be calculated once.
// When memo[i] is calculated, it will take numcoins operations.
function minCoins(cents) {
  // memo[i] contains min coins needed to make value i
  const memo = [0];

  function minCoinsHelper(cents) {
    if (cents <= 0) {
      return 0;
    }

    const coins = [25, 10, 1];
    let minValue = Number.MAX_VALUE;

    for (const coin of coins) {
      // Can't use this coin if the value is lower
      if (coin > cents) {
        continue;
      }

      // Remove one copy of coin, and figure out
      // min coins for reduced amount.
      const value = memo[cents - coin] == null ? minCoinsHelper(cents - coin) : memo[cents - coin];

      // Set min_value
      minValue = Math.min(minValue, value + 1);
    }

    memo[cents] = minValue;
    return minValue;
  }

  return minCoinsHelper(cents);
}


// Test cases
console.log(minCoins(0))
console.log(minCoins(6))
console.log(minCoins(31))
console.log(minCoins(55))
console.log(minCoins(221))

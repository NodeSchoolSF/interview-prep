"""
To run: python3 coin_change.js

https://leetcode.com/problems/coin-change/

See "dynamic programming - top down" section here for full explanation:
https://leetcode.com/problems/coin-change/solution
"""

# Naive version (slow for cents=221)
def min_coins(cents):
    coins = [25, 10, 1]

    if cents <= 0:
        return 0

    min_value = float("inf")

    for coin in coins:
        # Can't use this coin if the value is lower
        if coin > cents:
            continue

        # Remove one copy of coin, and figure out
        # min coins for reduced amount.
        value = min_coins(cents - coin) + 1

        # Set min_value
        min_value = min(min_value, value)

    return min_value


# Using top-down dynamic programming (recursion with memoization)
#
# Runtime: O(numcoins * numcents)
# Each of memo[i] to memo[numcents+1] will only be calculated once.
# When memo[i] is calculated, it will take numcoins operations.
def min_coins(cents):
    # memo[i] contains min coins needed to make value i
    memo = [None] * (cents + 1)

    def min_coins_helper(cents):
        coins = [25, 10, 1]

        if cents <= 0:
            return 0

        min_value = float("inf")

        for coin in coins:
            # Can't use this coin if the value is lower
            if coin > cents:
                continue

            # Remove one copy of coin, and figure out
            # min coins for reduced amount.
            value = (memo[cents - coin] or min_coins_helper(cents - coin)) + 1

            # Set min_value
            min_value = min(min_value, value)

        memo[cents] = min_value
        return min_value

    return min_coins_helper(cents)


# Test cases
print(min_coins(0))
print(min_coins(6))
print(min_coins(31))
print(min_coins(55))
print(min_coins(221))

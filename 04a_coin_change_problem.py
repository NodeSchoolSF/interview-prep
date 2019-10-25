"""
Watch first 9 minutes of:
https://www.youtube.com/watch?v=HWW-jA6YjHk

See https://leetcode.com/problems/coin-change/solution/
"dynamic programming - top down" for full explanation.
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


# Memoized version using recursion with memoization
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

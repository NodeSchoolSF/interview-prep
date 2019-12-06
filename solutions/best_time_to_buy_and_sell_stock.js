// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  });

  return maxProfit;
}

const testCases = [
  [5, 20, 4, 10, 3, 10],  // Biggest diff at beginning
  [5, 20, 4, 10, 3, 20],  // Biggest diff at end
  [],
  [5, 4, 3, 2, 1]
];

testCases.forEach((testCase) => {
  console.log(testCase, maxProfit(testCase));
});

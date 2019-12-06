# Data structures and algorithms

## Big O analysis

This is the conceptual framework that drives many algorithms questions, with the implicit understanding that you're optimizing an algorithm for efficient big-O runtime or space (usually runtime).

We can look at the [Valid Anagram](https://leetcode.com/problems/valid-anagram/) problem as an example with a slower naive solution, but a better O(n) solution.

```js
function isAnagram(source, target) {
  const sourceArr = source.split('');
  sourceArr.sort();

  const targetArr = target.split('');
  targetArr.sort();

  // If the two sorted strings are the same, then they're anagrams of each other.
  return sourceArr.join('')  === targetArr.join('');
}
```

The big O runtime is O(n log n), because sorting an array generally takes O(n log n) time (and we call it twice with `.sort()`). The leetcode submission runtime is 100ms, faster than 34% of other JS solutions.

With the right insight - that two anagrams have the same character count - we can do better. We also rely on the fact that in a hash table, setting a value and retrieving a value are O(1) operations.

```js
function isAnagram(source, target) {
  if (source.length !== target.length) {
    return false;
  }
  const sourceArr = source.split('');
  const targetArr = target.split('');
  const charCounts = {};

  // Count how many times each character occurs in source str
  sourceArr.forEach((char) => {
    charCounts[char] = charCounts[char] || 0;
    charCounts[char] += 1;
  });

  // Iterate through target str, decrementing the counts for
  // each char seen.
  targetArr.forEach((char) => {
    charCounts[char] = charCounts[char] || 0;
    charCounts[char] -= 1;
  });

  // If all characters' counts are now 0, then each string has the
  // same number of each character, and are therefore anagrams.
  return Object.keys(charCounts).every((key) => {
    return charCounts[key] === 0;
  });
}
```

The big O runtime is O(n). We make 5 linear O(n) passes. The actual runtime is now 60ms, now faster than 96% of other JS solutions.

Concepts: `TODO`

* Time and space, amortization, log(n) runtimes (e.g. binary search), multiple inputs (e.g. two arrays, array of strings of different lengths).
* Space usage with recursion is O(number of stack frames).
* Sorting in general is O(n log n), but can be faster with specific inputs.

References:

- Cracking the Coding Interview, Ch. IV
- [Coding Interview University](https://github.com/jwasham/coding-interview-university#algorithmic-complexity--big-o--asymptotic-analysis)

## Data structures

Essential:

- **Arrays and Strings**
  - Big O: random access, append, delete `TODO`
  - Leetcode questions: [arrays](https://yangshun.github.io/tech-interview-handbook/algorithms/array/#recommended-leetcode-questions), [strings](https://yangshun.github.io/tech-interview-handbook/algorithms/string/#recommended-leetcode-questions)
  - References:
    - Cracking the Coding Interview, Ch. 1
- **Hash tables**
  - Big O: O(1) lookup, O(1) insert amortized
  - In javascript, objects act like hash tables (`{ key: value }`)
- **Linked lists**
  - Can implement as `class ListNode { value: any, next: ListNode | null, prev: ListNode | null }`
  - Concepts: know how to implement a Node class, singly vs doubly linked, deletion, [two "runner" technique](https://leetcode.com/problems/linked-list-cycle/solution/)
  - Sometimes solutions can be simplified by having dummy head/tail elements (see [LRU cache solution](https://leetcode.com/problems/lru-cache/solution/))
  - [Leetcode questions](https://yangshun.github.io/tech-interview-handbook/algorithms/linked-list/#recommended-leetcode-questions)
    - [Merge two sorted lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- **Stacks and Queues**
  - Big O: `TODO`
    - Stacks: push/pop
    - Queues: enqueue/dequeue
  - In javascript, stacks can be implemented with arrays (`const stack = []; stack.push(item); stack.pop();`)
  - Concepts:
    - Know how to write a Stack or Queue with a linked list
    - Know how to use a stack to implement recursive algorithms iteratively
  - References:
    - Cracking the Coding Interview, Ch. 3
  - Leetcode questions:
    - [Valid parentheses](https://leetcode.com/problems/valid-parentheses/)
- **Trees**
  - Big O: find, insert, delete `TODO`
  - Concepts: binary tree traversal (in-order, pre-order, post-order)
  - Can implement as `class TreeNode { value: any, children: TreeNode[] }`, or `class TreeNode { value: any, left: TreeNode | null, right: TreeNode | null }` for binary trees. Can also implement as an array.
  - References:
    - Cracking the Coding Interview, Ch. 4
    - [Tech interview handbook](https://yangshun.github.io/tech-interview-handbook/algorithms/tree)
  - Leetcode questions:
    - [Maximum depth of binary tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
    - [Invert binary tree](https://leetcode.com/problems/invert-binary-tree/)
- **Graphs**
  - **Depth-first search (DFS)**: explore a branch fully before going to other neighbors. Simpler than BFS. Can be implemented recursively, or with a stack.
    - [Number of islands](https://leetcode.com/problems/number-of-islands/)
    - [N-queens](https://leetcode.com/problems/n-queens/)
  - **Breadth-first search (BFS)**: visit all neighbors before going to any deeper neighbors. Can be used to find shortest path. Uses a queue.
    - [Binary tree level order traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
  - Can represent with adjacency list: `class Graph { nodes: GraphNode[] }; class GraphNode { value: any, neighbors: GraphNode[] }`
  - Can represent simply using a hash table that maps nodes (keys) to neighbors (value array): `{ 0: [1, 2], 2: [3, 5], ... }`
  - Have intuition on what can be translated into a graph problem (e.g. a maze)
  - References:
    - Cracking the Coding Interview, Ch. 4
    - [Tech interview handbook](https://yangshun.github.io/tech-interview-handbook/algorithms/graph)
  - Leetcode questions:
    - [Course schedule](https://leetcode.com/problems/course-schedule/)

Less common:

- Tries
  - A type of tree, can appear in string search and prefix search problems. Improves efficiency of searching for a length-k string among n strings from O(n) to O(k).
  - [Leetcode questions](https://yangshun.github.io/tech-interview-handbook/algorithms/trie/)
  - References:
    - [Tech interview handbook](https://yangshun.github.io/tech-interview-handbook/algorithms/trie)
- Heaps
  - Big O: insert, extract min/max `TODO`


## Problem solving techniques

- **Greedy algorithms**
  - Technique: Sliding windows
    - [Longest substring without repeating characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
    - [Longest repeating character replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
    - [Minimum window substring](https://leetcode.com/problems/minimum-window-substring/)
  - [Best time to buy and sell stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
  - [Container with most water](https://leetcode.com/problems/container-with-most-water/)
- **Recursion and finding subproblems**
  - If a brute force solution isn't obvious, think about whether you could solve the problem if you knew the answer for a subset of the input.
  - [Coin change](https://leetcode.com/problems/coin-change/)
  - [Climbing stairs](https://leetcode.com/problems/climbing-stairs/)
- Dynamic programming
- Preprocessing
  - You sometimes want to sort the input, or otherwise process it in a way that it'll make the main logic more efficient.
  - [Non-overlapping intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- Combining data structures
  - Sometimes, you can find an efficient implementation by combining existing data structures, or having multiple of the same data structure. A well-known example is to [combine a hashtable and linked list to build an LRU cache](https://leetcode.com/problems/lru-cache/).


## References

`TODO`: add

- [https://github.com/kdn251/interviews](https://github.com/kdn251/interviews) - overview of algorithms and data structures, prep resources, and problem solutions in Java
- [https://github.com/yangshun/lago](https://github.com/yangshun/lago) - data structures and algorithms in JS


## Next section

[**Next: Technical phone screen and whiteboarding practice**](technical_phone_screen_and_whiteboarding_practice.md)

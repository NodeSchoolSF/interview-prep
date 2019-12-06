# Data structures and algorithms

## Big O analysis

This is the conceptual framework that drives many algorithms questions, with the implicit understanding that you're optimizing an algorithm for efficient big-O runtime or space (usually runtime).

We can look at the [Two Sum](https://leetcode.com/problems/two-sum/) problem as an example with an obvious O(n^2) solution, but a better O(n) solution. The O(n^2) solution:

```js
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}
```

`TODO`

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
  - Adjacency list: `class Graph { nodes: GraphNode[] }; class GraphNode { value: any, neighbors: GraphNode[] }`
  - Can represent simply using a hash table that maps nodes (keys) to neighbors (value array): `{ 0: [1, 2], 2: [3, 5], ... }`
  - Intuition on what can be translated into a graph problem (e.g. a maze)
  - Depth-first search (DFS): explore a branch fully before going to other neighbors. Simpler than BFS. Can be implemented recursively, or with a stack.
    - [Number of islands](https://leetcode.com/problems/number-of-islands/)
    - [N-queens](https://leetcode.com/problems/n-queens/)
  - Breadth-first search (BFS): visit all neighbors before going to any deeper neighbors. Can be used to find shortest path. Uses a queue.
    - [Binary tree level order traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
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

- Greedy algorithms
  - Technique: Sliding windows
    - [Longest substring without repeating characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
    - [Longest repeating character replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
    - [Minimum window substring](https://leetcode.com/problems/minimum-window-substring/)
  - [Container with most water](https://leetcode.com/problems/container-with-most-water/)
- Recursion and finding subproblems
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

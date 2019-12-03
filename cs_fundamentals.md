# CS Fundamentals


## Big O analysis

- Concepts: Time and space, amortization, log(n) runtimes (e.g. binary search), multiple inputs (e.g. two arrays, array of strings of different lengths), 
- [Valid Anagram](https://leetcode.com/problems/valid-anagram/) is a typical example of an array problem with obvious O(n^2) solution, but a better O(n) solution.
- Space usage with recursion is O(number of stack frames).
- Sorting in general is O(n log n), but can be faster with specific inputs.

Runtime for data structure operations: `TODO`

* Arrays
  * Random access
  * Append
  * Delete
* Hash tables/sets
* Stacks/queues
  * Push/Insert at front
  * Pop/Remove
* Heaps
  * Insert
  * Extract min/max
* Binary search trees
  * Find
  * Insert
  * Delete

References:

- Cracking the Coding Interview, Ch. IV
- [Coding Interview University](https://github.com/jwasham/coding-interview-university#algorithmic-complexity--big-o--asymptotic-analysis)

## Algorithms and techniques

- Recursion and finding subproblems
  - If a brute force solution isn't obvious, think about whether you could solve the problem if you knew the answer for a subset of the input.
  - [Coin change](https://leetcode.com/problems/coin-change/)
  - [Climbing stairs](https://leetcode.com/problems/climbing-stairs/)
- Dynamic programming
- Greedy algorithms
  - Technique: Sliding windows
    - [Longest substring without repeating characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
    - [Longest repeating character replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
    - [Minimum window substring](https://leetcode.com/problems/minimum-window-substring/)
  - [Container with most water](https://leetcode.com/problems/container-with-most-water/)
- Preprocessing
  - You sometimes want to sort the input, or otherwise process it in a way that it'll make the main logic more efficient.
  - [Non-overlapping intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- Combining data structures
  - Sometimes, you can find an efficient implementation by combining existing data structures, or having multiple of the same data structure. A well-known example is to [combine a hashtable and linked list to build an LRU cache](https://leetcode.com/problems/lru-cache/).

Data structures:

- Arrays and Strings
  - Leetcode questions: [arrays](https://yangshun.github.io/tech-interview-handbook/algorithms/array), [strings](https://yangshun.github.io/tech-interview-handbook/algorithms/string)
  - References: Cracking the Coding Interview, Ch. 1
- Hash tables
  - Big O: O(1) lookup, O(1) insert amortized
- Linked lists
  - Can implement as `class ListNode { value: any, next: ListNode | null, prev: ListNode | null }`
  - Concepts: know how to implement a Node class, singly vs doubly linked, deletion, [two "runner" technique](https://leetcode.com/problems/linked-list-cycle/solution/)
  - Sometimes solutions can be simplified by having dummy head/tail elements (see [LRU cache solution](https://leetcode.com/problems/lru-cache/solution/))
  - [Leetcode questions](https://yangshun.github.io/tech-interview-handbook/algorithms/linked-list)
    - [Merge two sorted lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- Stacks and Queues
  - References: Cracking the Coding Interview, Ch. 3
  - Concepts: know how to write a Stack class using arrays or linked lists, implementing a Queue with a linked list, using stacks to implement recursive algorithms iteratively
  - Leetcode questions:
    - [Valid parentheses](https://leetcode.com/problems/valid-parentheses/)
- [Trees](https://yangshun.github.io/tech-interview-handbook/algorithms/tree)
  - Concepts: binary tree traversal (in-order, pre-order, post-order)
  - Can implement as `class TreeNode { value: any, children: TreeNode[] }`, or `class TreeNode { value: any, left: TreeNode | null, right: TreeNode | null }` for binary trees. Can also implement as an array.
  - References: Cracking the Coding Interview, Ch. 4
  - Leetcode questions:
    - [Maximum depth of binary tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [Graphs](https://yangshun.github.io/tech-interview-handbook/algorithms/graph)
  - Adjacency list: `class Graph { nodes: GraphNode[] }; class GraphNode { value: any, neighbors: GraphNode[] }`
  - Can represent simply as a dict of nodes to neighbors: `{ 0: [1, 2], 2: [3, 5], ... }`
  - Intuition on what can be translated into a graph problem (e.g. a maze)
  - Depth-first search (DFS): explore a branch fully before going to other neighbors. Simpler than BFS. Can be implemented recursively, or with a stack.
    - [Number of islands](https://leetcode.com/problems/number-of-islands/)
    - [N-queens](https://leetcode.com/problems/n-queens/)
  - Breadth-first search (BFS): visit all neighbors before going to any deeper neighbors. Can be used to find shortest path. Uses a queue.
    - [Binary tree level order traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
  - References: Cracking the Coding Interview, Ch. 4
  - Leetcode questions:
    - [Course schedule](https://leetcode.com/problems/course-schedule/)
- [Tries](https://yangshun.github.io/tech-interview-handbook/algorithms/trie/)
  - A type of tree, can appear in string search and prefix search problems. Improves efficiency of searching for a length-k string among n strings from O(n) to O(k).
  - [Leetcode questions](https://yangshun.github.io/tech-interview-handbook/algorithms/trie/)



## Next section

[**Next: Technical phone screen practice**](s1_04_technical_phone_screen_practice.md)

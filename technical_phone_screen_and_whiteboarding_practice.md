# Technical phone screen and whiteboarding practice

## Prep advice

In my experience, companies now often offer the option of using a computer instead of writing code on the whiteboard, and also allow you to look things up online if needed. However, it's good to be ready to code on a whiteboard, since some interviewers may still ask you to do that.

**When writing code on a computer, I recommend running and testing your code as iteratively as possible**, before you finish writing the functionality - this makes it so you don't have to run into a series of hard-to-debug issues later. When I'm solving a Leetcode problem, I'll code it in a JS file and run `node problem.js` to evaluate it. I'll console.log some test cases at the bottom to verify that the solution is correct. See some of the [solutions](/solutions) for examples of this.

To see how a real phone screen can play out, you can watch a recording of someone solving [missing list item](https://www.youtube.com/watch?v=cdCeU8DJvPM) well.

Some useful posts on how to approach a fresh problem:

* [Google Interview Problems: Synonymous Queries](https://medium.com/@alexgolec/google-interview-problems-synonymous-queries-36425145387c) - a great post
* [Google Interview Problems: Ratio Finder](https://medium.com/@alexgolec/google-interview-problems-synonymous-queries-36425145387c) - a good breakdown of how to think about a graph search problem


## Paired practice

Let's spend about 30 minutes working on each problem. Afterwards, I'll explain how to approach solving it - from thought process to iterative coding to tests. You're not expected to have to complete the problem! I encourage them to go back and re-implement it (not through memorization, but through thinking through the problem from scratch again).

I suggest pairing up into groups of 2 with your neighbor. Each person picks one of the questions to work on. One person go first and try to solve the problem on their computer (or on whiteboard, if they want to practice that) while the other person listens. If you'd rather work together to solve the problem instead, that's good too - but I encourage both people to 

If you're listening as your partner is solving a problem, keep the following in mind:

* Did they ask clarifying questions before implementing?
* Do they explain their thought process as they're working?
* Do they come up with good test cases to try out?
* Try running it on Leetcode. Are there bugs? Does it run and pass the Leetcode test cases?
* Is the solution efficient (in big O runtime)? Ask them what the big-O for runtime and space are.


## Questions

**NOTE:** you'll need to create a free account on leetcode.com.

Warm-up:

* [Contains duplicate](https://leetcode.com/problems/contains-duplicate)
  * Solutions: [javascript](solutions/contains_duplicate.js)
* [Find common characters](https://leetcode.com/problems/find-common-characters)
* [Reverse string](https://leetcode.com/problems/reverse-string)
  * Solutions: [javascript](solutions/reverse_string.js)
* [**Two sum**](https://leetcode.com/problems/two-sum/)

Trees:

* [Maximum depth of binary tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)
* [Same tree](https://leetcode.com/problems/same-tree/)
* [Search in a binary search tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)
* [Invert binary tree](https://leetcode.com/problems/invert-binary-tree/)

Graphs:

* [Course schedule](https://leetcode.com/problems/course-schedule/)
* [Number of connected components in an undirected graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph)
* [Evaluate division](https://leetcode.com/problems/evaluate-division/)
* [Number of islands](https://leetcode.com/problems/number-of-islands/)

Intervals:

* [Meeting rooms](https://leetcode.com/problems/meeting-rooms/)

Hash tables:

* [Design HashMap](https://leetcode.com/problems/design-hashmap/)
* [Time based key value store](https://leetcode.com/problems/time-based-key-value-store/)

Recursion / dynamic programming:

* [Coin change](https://leetcode.com/problems/coin-change)
  * Example phone screen: https://www.youtube.com/watch?v=HWW-jA6YjHk
  * Solutions: [javascript](solutions/coin_change.js), [python](coin_change.py)
* [Climbing stairs](https://leetcode.com/problems/climbing-stairs/)


Once you feel comfortable with basic CS concepts, here are some curated problem lists that you can work through which teach the important problem solving concepts:

* [**75 most useful Leetcode questions**](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions)
* [Best practice questions from Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/best-practice-questions)

## Next section

[**Next: Relational databases**](https://github.com/NodeSchoolSF/how-to-database/blob/master/workshop/README.md).

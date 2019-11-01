# How to effectively interview prep

A plan of attack to prepare for the interview:

- Work through good interview prep resources
- Learn essential data structures and algorithms
- Solve problems
- Practice whiteboarding
- Do your research on companies
- Prep for behavioral questions & questions to ask interviewers
- Have a good side project

Here are more details on each item:

## Work through good interview prep resources

Find good resources to work through. There's a lot of good material out there so don't limit yourself to these, but some good ones I've used are:

- **Cracking the Coding Interview** ($35) - a book that covers CS concepts well, along with problems and solutions with explanations.
- **Leetcode** ($0 to $35/mo) - a site with a huge number of real interview problems from software companies, which you need to solve with efficient solutions. There's a guide on what problems to work through in [Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/best-practice-questions/).
- **Elements of Programming Interviews in Python** ($36, Java and C++ also available)
- [**Tech Interview Handbook**](https://yangshun.github.io/tech-interview-handbook) (free) - a comprehensive guide to the technical interview

## Learn essential data structures and algorithms

Algorithms:

- Big O analysis
  - Concepts: Time and space, amortization, log(n) runtimes (e.g. binary search), multiple inputs (e.g. two arrays, array of strings of different lengths), 
  - [Valid Anagram](https://leetcode.com/problems/valid-anagram/) is a typical example of an array problem with obvious O(n^2) solution, but a better O(n) solution.
  - References: Cracking the Coding Interview, Ch. IV


Data structures:

- Arrays and Strings
  - Leetcode questions: [arrays](https://yangshun.github.io/tech-interview-handbook/algorithms/array), [strings](https://yangshun.github.io/tech-interview-handbook/algorithms/string)
  - References: Cracking the Coding Interview, Ch. 1
- Hash tables
  - Big O: O(1) lookup, O(1) insert amortized
- Linked lists
  - `class ListNode { value: any, next: ListNode | null, prev: ListNode | null }`
  - Concepts: know how to implement a Node class, singly vs doubly linked, deletion, "runner" technique of having a regular and a 2x faster iterator
  - [Leetcode questions](https://yangshun.github.io/tech-interview-handbook/algorithms/linked-list)
- Stacks and Queues
  - References: Cracking the Coding Interview, Ch. 3
  - Concepts: know how to write a Stack class using arrays or linked lists, implementing a Queue with a linked list, using stacks to implement recursive algorithms iteratively
- [Trees](https://yangshun.github.io/tech-interview-handbook/algorithms/tree)
  - Concepts: binary tree traversal (in-order, pre-order, post-order)
  - `class TreeNode { value: any, children: TreeNode[] }`
  - References: Cracking the Coding Interview, Ch. 4
- [Graphs](https://yangshun.github.io/tech-interview-handbook/algorithms/graph)
  - Adjacency list: `class Graph { nodes: GraphNode[] }; class GraphNode { value: any, neighbors: GraphNode[] }`
  - Intuition on what can be translated into a graph problem (e.g. a maze)
  - Depth-first search (DFS): explore a branch fully before going to other neighborss. Simpler than BFS. Can be implemented recursively, or with a stack.
  - Breadth-first search (BFS): visit all neighbors before going to any deeper neighbors. Can be used to find shortest path. Uses a queue.
  - References: Cracking the Coding Interview, Ch. 4
- [Tries](https://yangshun.github.io/tech-interview-handbook/algorithms/trie/)
  - A type of tree, can appear in string search and prefix search problems. Improves efficiency of searching for a length-k string among n strings from O(n) to O(k).
  - [Leetcode questions](https://yangshun.github.io/tech-interview-handbook/algorithms/trie/)

## Solve problems

If you expect your interview to have algorithms questions, the best way to prepare for them is to solve a lot of problems. Leetcode is a great place to find real problems that people get in tech interviews. When working on a problem, try to:

- Think out loud, like you would in an interview
- Ask clarifying questions early before diving into the code
- Try a few concrete examples
- Describe a naive, brute force solution first (along with big-O runtime). You may not necessarily implement it, though - the interviewer may ask you for a more efficient solution. [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f) [[2]](https://yangshun.github.io/tech-interview-handbook/during-coding-interview)
- When you're done, carefully review your solution. Look it over line-by-line, and test it with example inputs. [[1]](https://yangshun.github.io/tech-interview-handbook/during-coding-interview#after-coding)
- Evaluate the runtime of your solution
- [Other tips from Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/algorithms/algorithms-introduction)

As you solve problems, you'll find common problem-solving patterns [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f). Take notes on these patterns! It'll help you re-apply them to new problems. After you solve a problem, read the solution carefully and make sure you fully understand it (on Leetcode, there are often good solutions in the language of your choice in the "Discuss" tab).

Doing a lot of problems will also help you get fast at [common coding patterns](./01a_common_coding_patterns). Make sure you know how to do these quickly and without errors in your preferred language.

## Practice whiteboarding

Whiteboarding is nervewracking! For technical problems, interviewers generally like to see a candidate explain their thought process as they're solving a problem. I know this can be really hard; I struggle with this part. It's useful to practice this upfront! Practicing whiteboarding with a friend is highly recommended in order to get you more comfortable and used to thinking out loud [[1]](https://blog.usejournal.com/i-interviewed-at-six-top-companies-in-silicon-valley-in-six-days-and-stumbled-into-six-job-offers-fe9cc7bbc996). 

[https://interviewing.io](https://interviewing.io/) is a site where you can practice realistic algorithmic interviews with engineers for free. `TODO`


## Do your research on companies

Every company has different interview processes. If possible, look into what kinds of questions the company tends to ask (Glassdoor or Leetcode are places to start, but there are other resources online).

Most companies want to hire people who care about the mission, and they'll usually ask why you're interested in working there. It's important to do some research on a company you're applying to and to have a good answer for that question, and also to have specific questions to ask about the company.

There are a lot of ways to find interesting startups to apply to, but here are a few I've used before:

- [Angel.co](https://angel.co/)
- [YC's top companies](https://www.ycombinator.com/topcompanies/)
- [YC "Who's hiring?" lists](https://news.ycombinator.com/item?id=21419536) (example for Nov 2019)
- [Breakout list](https://breakoutlist.com/all/)
- [Hired](https://hired.com/)

## Prep for behavioral questions & questions to ask interviewers

**Behavioral questions** are non-technical, verbal questions. The interviewer is trying to evaluate whether you can communicate effectively and clearly about your experience and motivations. [Here's an example of using the STAR framework to answer a behavioral question well](https://yangshun.github.io/tech-interview-handbook/star-format).

Common behavioral questions:

- **Tell me about yourself.** [Here's a good reference](https://yangshun.github.io/tech-interview-handbook/self-introduction) on answering this self-introduction question.
- **Why are you interested in working at this company? `TODO`**
- **Talk about a challenging project you worked on.** You'll want to be able to give a solid answer — and it really helps if you have either a recent work project or a side project that you can talk about in depth (see the "Have a good side project" section for more on this). The interviewer is trying to evaluate whether you can talk coherently about a complex topic, at both a high level and a technical level. Clear communication about technical work is extremely important - you'll need to talk to PMs, stakeholders, designers, and other engineers all the time at a startup.
- **What are you looking for in your next position? `TODO`**
- [Here's a list of common behavioral questions from Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/behavioral-questions/)

**Questions to ask interviewers**: you'll also want to be prepared to have some questions for each interviewer (which can end up being a lot of questions at an onsite with 5 interviewers). The questions you ask can have an impact! Interviewers may use them to judge what your priorities are  and whether you're interested in the mission.

`TODO`

- [List of questions to ask](https://yangshun.github.io/tech-interview-handbook/questions-to-ask)

## Have a good side project

In my opinion, this is one of the better ways to stand out as a candidate, particularly when you're just starting out in your career. Be ready to explain your side project simply and clearly, so that a technical or non-technical interviewer can understand it. It's best if this project does something interesting or substantial either on the frontend or backend.

Examples of non-trivial frontend features:

- Pages that fetch data from an API
- Complex interactivity
- Possibly state management, e.g. redux
- Forms or other data input

Examples of non-trivial backend features:

- Provides an API for frontend
- Connects to a database and has some tables that relate to each other (relational modeling)
- Talks to an external API
- User registration and login

Ideally, make your project open-source and put it up on Github. Having a good project will help you stand out during the resume screening phase. In recruiting emails or interviews, a number of people have commented on open source projects I've had.

Some tips for your project:

- Have a great README. Take a look at some good README files from open source projects you use - they usually summarize what the project is about and how to run the project in development mode.
- Make the code readable. Have descriptive function and variable names, and have comments describing what you're doing if there's complex logic.
- Have a live demo. If it's a static site, you can host it on github pages for free (check out the `gh-pages` npm package). If it has a backend, there are options like Heroku, which has a free tier.
- Write tests if possible

A side project is always easier if it's about something you care about. What are your interests? For me, I like music a lot, so I built a map that displays nearby concerts. You can also build a tool to solve a pain point you have, something you've encountered in everyday life — like a chrome extension that generates Github release notes.

## References

- [Google Interview Questions Deconstructed: Synonymous Queries](https://medium.com/@alexgolec/google-interview-problems-synonymous-queries-36425145387c) - a great post
- [Google Interview Problems: Ratio Finder](https://medium.com/@alexgolec/google-interview-problems-synonymous-queries-36425145387c) - a good breakdown of how to think about a graph search problem
- [11 companies, 55 Interviews, 9 offers](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f) - `TODO`
- [https://github.com/kdn251/interviews](https://github.com/kdn251/interviews) - overview of algorithms and data structures, prep resources, and problem solutions in Java
- [https://github.com/yangshun/lago](https://github.com/yangshun/lago) - data structures and algorithms in JS

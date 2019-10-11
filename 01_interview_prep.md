# How to effectively interview prep

A plan of attack to prepare for the interview:

- Work through good interview prep resources
- Learn strategies for solving difficult algorithmic problems
- Practice whiteboarding and thinking out loud
- Do your research on companies
- Prep for behavioral questions and prep questions to ask interviewers
- Have a good side project

Here are more details on each item:

## Work through good interview prep resources

Find good resources to work through. There's a lot of good material out there so don't limit yourself to these, but some good ones I've used are:

- **Cracking the Coding Interview** ($35) - a book that covers CS concepts well, along with problems and solutions with explanations.
- **Elements of Programming Interviews in Python** ($36, Java and C++ also available)
- **Leetcode** ($0 to $35/mo) - a site with a huge number of real interview problems from software companies, which you need to solve with efficient solutions. There's a guide on what problems to work through in [Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/best-practice-questions/).
- [**Tech Interview Handbook**](https://yangshun.github.io/tech-interview-handbook) (free) - a comprehensive guide to the technical interview

## Learn essential data structures and algorithms

- [Strings](https://yangshun.github.io/tech-interview-handbook/algorithms/string)
- [Trees](https://yangshun.github.io/tech-interview-handbook/algorithms/tree)
- [Graphs](https://yangshun.github.io/tech-interview-handbook/algorithms/graph)
- [Linked lists](https://yangshun.github.io/tech-interview-handbook/algorithms/linked-list)

## Learn strategies for solving difficult algorithmic problems

- Ask clarifying questions early before diving into the code
- Always describe a naive, brute force solution first. You may not necessarily implement it, though - the interviewer may ask you for a more efficient solution. [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f) [[2]](https://yangshun.github.io/tech-interview-handbook/during-coding-interview)
- When you solve a new problem, keep notes on things you learned [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f)
- Find common patterns for solving problems [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f)
- When you're done, carefully review your solution. Look it over line-by-line, and test it with example inputs. [[1]](https://yangshun.github.io/tech-interview-handbook/during-coding-interview#after-coding)
- [Tips from Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/algorithms/algorithms-introduction)

## Practice whiteboarding and thinking out loud

Whiteboarding is nervewracking! Practicing whiteboarding with a friend is essential to getting more comfortable and to get you used to thinking out loud. [[1]](https://blog.usejournal.com/i-interviewed-at-six-top-companies-in-silicon-valley-in-six-days-and-stumbled-into-six-job-offers-fe9cc7bbc996)

For technical problems, interviewers generally like to see a candidate explain their thought process as they're solving a problem. I know this can be really hard and I'm not great at it. It's useful to practice this upfront!

[https://interviewing.io](https://interviewing.io/) is a site where you can practice realistic algorithmic interviews with engineers for free. `TODO`

## Do your research on companies

Every company has different interview processes. If possible, look into what kinds of questions the company tends to ask (Glassdoor or Leetcode are places to start, but there are other resources online).

Most companies want to hire people who care about the mission, and they'll usually ask why you're interested in working there. It's important to do some research on a company you're applying to and to have a good answer for that question, and also to have specific questions to ask about the company.

There are a lot of ways to find interesting startups to apply to, but here are a few I've used before:

- [https://angel.co/](https://angel.co/)
- [https://www.ycombinator.com/topcompanies/](https://www.ycombinator.com/topcompanies/)
- [https://breakoutlist.com/all/](https://breakoutlist.com/all/)
- [https://hired.com/](https://hired.com/)

## Prep for behavioral questions and prep questions to ask interviewers

Behavioral questions are non-technical, verbal questions. The interviewer is trying to evaluate whether you can communicate effectively and clearly about your experience and motivations. [Here's an example of using the STAR framework to answer a behavioral question well](https://yangshun.github.io/tech-interview-handbook/star-format).

Common behavioral questions:

- **Tell me about yourself.** [Here's a good reference](https://yangshun.github.io/tech-interview-handbook/self-introduction) on answering this self-introduction question.
- **Why are you interested in working at this company? `TODO`**
- **Talk about a challenging project you worked on.** You'll want to be able to give a solid answer — and it really helps if you have either a recent work project or a side project that you can talk about in depth (see the "Have a good side project" section for more on this). The interviewer is trying to evaluate whether you can talk coherently about a complex topic, at both a high level and a technical level. Clear communication about technical work is extremely important - you'll need to talk to PMs, stakeholders, designers, and other engineers all the time at a startup.
- **What are you looking for in your next position? `TODO`**
- [Here's a list of common behavioral questions from Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/behavioral-questions/)

Questions to ask interviewers: `TODO`

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
# NodeSchool Interview Prep

## Overview

This course is geared towards helping bootcamp grads and self-taught learners to prepare for the technical programming interview. It's based on what I know from interviewing at numerous startups and being an interviewer at three software startups, ranging from 30 to 100 people.

There isn't nearly enough time to cover computer science fundamentals in depth — it can take years of college courses to do that. The goals of the course are to:

1. Give **a roadmap on how to prepare** for the technical interview
2. Give an introduction to **important CS concepts**
3. Give students a chance to **practice solving algorithms questions** with each other

The curriculum will consist of 4 sessions. Each session, I'll talk for about an hour about topics like CS theory, testing, or behavioral questions. Then we'll use the rest of the time to have people get live practice answering algorithms questions, so they can get hands-on experience with whiteboarding and explaining their thought process.

⚠️All material is preliminary and subject to change after trying it out IRL. The whiteboarding practice format is something that may or may not work, and can be adjusted as needed.

**Session 1 — Overview of the Interview Process & Technical Phone Screen Practice**

Overview of interview process [50 min]: 

- We'll cover the different stages of an interview process  — preparation before an interview, the technical phone screen, take-home challenges, and the onsite.
- Behavioral questions: Having good answers to behavioral questions is important. Know what you should have an answer for, and also what questions to ask your interviewer.
- Side projects: We'll cover why side projects are helpful for standing out and also for being able to answer certain behavioral questions well.

Break [5 min]: Folks can leave or enter here

Technical phone screen practice [60+ min]:

- Folks will group into pairs, and each reads the question and solution to one of two different technical screening questions. Then, they take turns being interviewer and interviewee, with the interviewee trying to solve it by coding up a solution on their computer while the other person observes with the solution in hand.
⚠️Tentative format, may be adjusted.
- I'll review the answers, showing how I would code it up on a TV.

**Session 2 — CS Fundamentals (Part 1) & Whiteboarding Practice (Part 1)**

CS fundamentals [50 min]: Cover data structures like strings, arrays, stacks, queues, sets, and hash tables. Implement one of them. Talk about when you would use each one.

Break [5 min]: Folks can leave or enter here

Whiteboarding practice [60+ min]:

- Folks will group into pairs, and each reads the question and solution to one of two different whiteboarding algorithm questions. Then, each person take turns being interviewer and interviewee, with the interviewee trying to solve it by writing up a solution on the whiteboard while the other person observes with the solution in hand. If anyone has questions or wants to be coached, I'll be around to help with that.
⚠️Tentative format, may be adjusted.
- I'll review the answers, showing how I would whiteboard the answer. We can also talk about how to approach it if you don't know the answer.

**Session 3 — CS Fundamentals (Part 2) & Whiteboarding Practice (Part 2)**

CS Fundamentals [40 min]: Recursion. Big O notation (runtime and space).

Break [5 min]: Folks can leave or enter here

Whiteboarding practice [60+ min]: Same format as in session 2.

**Session 4 — Testing & CS Fundamentals (Part 3)**

Testing [40 min]: I'll show how I would approach unit testing a typical javascript/node function that could show up in an interview, asking people about what edge cases they would consider. This can also cover more real-world node app testing, with mocking. Then I'll ask folks to unit test another example function.

Break [5 min]: Folks can leave or enter here

CS Fundamentals [60 min]: Trees and tree traversal, graphs and graph search (breadth-first, depth-first).

---

## [S1] An overview of the interview process

### Things to do to prepare for the interview

- Work through good interview prep resources
- Learn strategies for solving difficult algorithmic problems
- Practice whiteboarding and thinking out loud
- Do your research on companies
- Prep for behavioral questions and prep questions to ask interviewers
- Have a good side project

**Work through good interview prep resources**

Find good resources to work through. There's a lot of good material out there so don't limit yourself to these, but some good ones I've used are:

- **Cracking the Coding Interview** ($35) - a book that covers CS concepts well, along with problems and solutions with explanations.
- **Elements of Programming Interviews in Python** ($36, Java and C++ also available)
- **Leetcode** ($0 to $35/mo) - a site with a huge number of real interview problems from software companies, which you need to solve with efficient solutions. There's a guide on what problems to work through in [Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/best-practice-questions/).
- [**Tech Interview Handbook**](https://yangshun.github.io/tech-interview-handbook) (free) - a comprehensive guide to the technical interview

**Learn essential data structures and algorithms**

- [Strings](https://yangshun.github.io/tech-interview-handbook/algorithms/string)
- [Trees](https://yangshun.github.io/tech-interview-handbook/algorithms/tree)
- [Graphs](https://yangshun.github.io/tech-interview-handbook/algorithms/graph)
- [Linked lists](https://yangshun.github.io/tech-interview-handbook/algorithms/linked-list)

**Learn strategies for solving difficult algorithmic problems**

- Ask clarifying questions early before diving into the code
- Always describe a naive, brute force solution first. You may not necessarily implement it, though - the interviewer may ask you for a more efficient solution. [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f) [[2]](https://yangshun.github.io/tech-interview-handbook/during-coding-interview)
- When you solve a new problem, keep notes on things you learned [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f)
- Find common patterns for solving problems [[1]](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f)
- When you're done, carefully review your solution. Look it over line-by-line, and test it with example inputs. [[1]](https://yangshun.github.io/tech-interview-handbook/during-coding-interview#after-coding)
- [Tips from Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/algorithms/algorithms-introduction)

**Practice whiteboarding and thinking out loud**

Whiteboarding is nervewracking! Practicing whiteboarding with a friend is essential to getting more comfortable and to get you used to thinking out loud. [[1]](https://blog.usejournal.com/i-interviewed-at-six-top-companies-in-silicon-valley-in-six-days-and-stumbled-into-six-job-offers-fe9cc7bbc996)

For technical problems, interviewers generally like to see a candidate explain their thought process as they're solving a problem. I know this can be really hard and I'm not great at it. It's useful to practice this upfront!

[https://interviewing.io](https://interviewing.io/) is a site where you can practice realistic algorithmic interviews with engineers for free. `TODO`

**Do your research on companies**

Every company has different interview processes. If possible, look into what kinds of questions the company tends to ask (Glassdoor or Leetcode are places to start, but there are other resources online).

Most companies want to hire people who care about the mission, and they'll usually ask why you're interested in working there. It's important to do some research on a company you're applying to and to have a good answer for that question, and also to have specific questions to ask about the company.

There are a lot of ways to find interesting startups to apply to, but here are a few I've used before:

- [https://angel.co/](https://angel.co/)
- [https://www.ycombinator.com/topcompanies/](https://www.ycombinator.com/topcompanies/)
- [https://breakoutlist.com/all/](https://breakoutlist.com/all/)
- [https://hired.com/](https://hired.com/)

**Prep for behavioral questions and prep questions to ask interviewers**

Behavioral questions are non-technical, verbal questions. The interviewer is trying to evaluate whether you can communicate effectively and clearly about your experience and motivations. [Here's an example of using the STAR framework to answer a behavioral question well](https://yangshun.github.io/tech-interview-handbook/star-format).

Common behavioral questions:

- **Tell me about yourself.** [Here's a good reference](https://yangshun.github.io/tech-interview-handbook/self-introduction) on answering this self-introduction question.
- **Why are you interested in working at this company? `TODO`**
- **Talk about a challenging project you worked on.** You'll want to be able to give a solid answer — and it really helps if you have either a recent work project or a side project that you can talk about in depth (see the "Have a good side project" section for more on this). The interviewer is trying to evaluate whether you can talk coherently about a complex topic, at both a high level and a technical level. Clear communication about technical work is extremely important - you'll need to talk to PMs, stakeholders, designers, and other engineers all the time at a startup.
- **What are you looking for in your next position? `TODO`**
- [Here's a list of common behavioral questions from Tech Interview Handbook](https://yangshun.github.io/tech-interview-handbook/behavioral-questions/)

Questions to ask interviewers: `TODO`

- [List of questions to ask](https://yangshun.github.io/tech-interview-handbook/questions-to-ask)

**Have a good side project**

In my opinion, this is one of the better ways to stand out when you're just starting out in your career. Be ready to explain your side project simply and clearly, so that a technical or non-technical interviewer can understand it. It's best if this project does something interesting or substantial either on the frontend or backend.

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

A side project is always easier if it's about something you care about. What are your interests? For me, I like music a lot, so I built PianoHub. You can also build a tool to solve a pain point you have, something you've encountered in everyday life — like a chrome extension that generates Github release notes.

### T**he interview process**

Interview processes vary widely; [here are some interview formats](https://yangshun.github.io/tech-interview-handbook/interview-formats#formats-of-famous-companies) for specific companies. In my experience, these are common phases of the interview process for startups:

1. Initial phone call with recruiter or hiring manager
2. Technical phone screen
3. Take-home challenge (possibly)
4. On-site interview

**1. The initial phone call**

This is to evaluate whether continuing the process makes sense for both parties. They'll ask you about your background and experience. Enthusiasm for the company and mission and being well-spoken is often useful here.

See the earlier "Prep for behavioral questions" section for possible questions here.

**2. The technical phone screen**

This is usually a 1 hour phone call where an engineer or engineering manager asks you technical questions to evaluate whether to continue with the process.

You may be asked to explain technical concepts like "what is the event loop in javascript?".

Many companies will now do a remote coding challenge where they give you a question, and you code it up in a collaborative editor like [CoderPad](https://coderpad.io/) (which can run your code) or [CodePen](https://codepen.io) (for front-end stuff). You'll ideally be able to explain your thought process as you're coding.

Possible examples of questions you might see:

- `TODO`

**3. The take-home challenge (possibly)**

Some companies will issue a take-home challenge, which usually ranges from 1 to 4 hours, to be completed on your own time.

A few recommendations:

- Solve the base requirements of the challenge as quickly as possible without being bogged down by minor details. After that, you can feel comfortable to refactor your code.
- If you have time, write good tests. This is one way for you to stand out against other applicants, because tests aren't always prioritized highly by candidates.

**4. The onsite interview**

This is generally the most important factor in a hiring decision — the earlier phases usually serve to get you here. This can take around 5 hours and usually has you meeting with a variety of people on the team. Each person will ask you either technical questions or behavioral questions, and usually they'll all leave around 10 minutes for you to ask them questions as well.

General advice:

- **The interviewer is assessing cultural fit, or "would I enjoy working with this person?"** This seems vague, but it's actually pretty important when you'll be spending a lot of your waking hours together. Being a clear communicator and having a good attitude goes a long way here.
- **Demonstrate "coachability" — pick up hints quickly and take feedback graciously**. For junior candidates, interviewers also often look for "coachability". What this means is, if they weren't able to answer all the questions (which is mostly expected), can they be taught to pick things up quickly and easily? If you're stuck, an interviewer will often drop subtle or non-subtle hints about how to progress. If you can pick these hints up quickly and get un-stuck, it's a good sign that you can pick things up quickly on the job as well. What looks bad for coachability is if you get feedback or advice and question it or ignore it.
- **Ask clarifying questions if there's ambiguity.** Don't just jump into an implementation that you think is correct.
- **"Do you have any questions for me?"**  Interviewers will often leave time for you to ask them questions, and by the end of the day this will add up to a lot of time for your questions. These questions do matter — they can be used to assess what you're interested in (the tech stack? the mission?), and if you have an especially good question, an interviewer may take note of it. Be prepared to have at least some basic questions for each interviewer, and ideally have some tailored questions based on the product or company that demonstrate your interest in the mission.
- **You can admit you don't know something.** If you don't know something knowledge-based (i.e. a programming language construct or technology), interviewers will be able to tell. It can be better to own up to it and say you don't know something upfront instead of struggling with something that you can't deduce on the spot. This doesn't necessarily mean you should give up, though, if it's a question you can figure out.

## References

- [Google Interview Questions Deconstructed: Synonymous Queries](https://medium.com/@alexgolec/google-interview-problems-synonymous-queries-36425145387c) - a great post
- [Google Interview Problems: Ratio Finder](https://medium.com/@alexgolec/google-interview-problems-synonymous-queries-36425145387c) - a good breakdown of how to think about a graph search problem
- [11 companies, 55 Interviews, 9 offers](https://medium.com/@yashgirdhar/11-companies-55-interviews-9-offers-including-google-and-amazon-heres-what-i-have-to-share-293852c1c98f) - `TODO`
- [https://github.com/kdn251/interviews](https://github.com/kdn251/interviews) - overview of algorithms and data structures, prep resources, and problem solutions in Java
- [https://github.com/yangshun/lago](https://github.com/yangshun/lago) - data structures and algorithms in JS
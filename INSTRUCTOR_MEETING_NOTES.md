# Skill Tree Builder - Instructor Meeting Notes

## What My Project Is

My project is a full-stack web app where users build a visual skill progression tree.

The idea is similar to a skill tree in a video game:

- each skill is a node
- some skills depend on other skills
- users unlock new skills by completing earlier ones

But instead of game abilities, the skills are real-life goals like:

- learning frontend development
- building a data science roadmap
- planning fitness goals

## What Problem It Solves

A lot of people learn from random notes, videos, and checklists. This project gives them a more organized and visual way to plan what to learn next.

It helps users:

- break a big goal into smaller skills
- understand what should come first
- track progress over time
- stay motivated with a visual system

## Why This Project Works for Capstone

This project is simple enough to finish, but still shows strong technical skills.

It includes:

- CRUD functionality
- authentication
- protected routes
- relational database design
- conditional rendering in React
- relationship logic through prerequisites

The most interesting part is the prerequisite system, because it adds logic beyond basic CRUD.

## Simple Meaning of the Main Terms

### Skill Tree

A skill tree is a group of connected skills that represent a learning path.

Example:

- HTML
- CSS
- JavaScript
- React

### Node

A node is a single skill in the tree.

Example:

- "Learn HTML" is one node
- "Learn React" is another node

### Prerequisite

A prerequisite means one skill must be completed before another can be unlocked.

Example:

- HTML is a prerequisite for CSS
- CSS is a prerequisite for React

### Progress Tracking

This means the user can mark a skill as:

- locked
- in progress
- completed

### Unlocking

Unlocking means a skill becomes available only after all of its required prerequisite skills are completed.

## How the App Will Work

### 1. User makes an account

The user signs up and logs in.

### 2. User creates a skill tree

The user creates a tree like:

- Frontend Developer Path
- Fitness Goals Tree

### 3. User adds skills

The user adds skill nodes to the tree.

Example:

- HTML
- CSS
- JavaScript
- React

### 4. User connects prerequisites

The user decides which skills depend on others.

Example:

- HTML before CSS
- CSS before JavaScript
- JavaScript before React

### 5. User tracks progress

The user marks skills as completed or in progress.

### 6. App updates what is unlocked

If the user completes the required skills, the next skill becomes available.

### 7. User sees everything visually

The app shows the whole skill tree as a visual map with connected nodes.

## Main Functionality I Need to Understand

### CRUD

CRUD means:

- Create
- Read
- Update
- Delete

In this project, users need CRUD for:

- skill trees
- skills

### Authentication

Authentication means users can securely sign up and log in.

This matters because each user should only see and edit their own trees and progress.

### Protected Routes

Protected routes are pages that only logged-in users can access.

Example:

- dashboard
- tree detail page

### Database Relationships

This app is not just storing separate pieces of data. The data is connected.

Important relationships:

- one user can have many skill trees
- one tree can have many skills
- one skill can depend on other skills
- one user can track progress on many skills

### Conditional Rendering

The frontend should display different things depending on data.

Example:

- locked skills look different from completed skills
- a button may change based on whether a skill is available

## What Makes the Project Interesting

The strongest part of this idea is that it is more than a basic to-do app.

The prerequisite system adds real logic:

- skills are connected
- the app must check whether requirements are met
- the UI changes based on progress

This makes the project more dynamic while still being manageable.

## Questions the Instructor Might Ask

### "What is the main technical challenge?"

The main technical challenge is the prerequisite and unlock logic.

I need to make sure:

- skills can be connected correctly
- progress is tracked per user
- a skill only unlocks when its prerequisites are completed

### "Why is this a good capstone scope?"

Because it has enough full-stack depth without being too large.

It includes:

- auth
- CRUD
- database relationships
- API routes
- React state and conditional UI

But it is still smaller and more realistic than something like a social media app or marketplace.

### "What is your MVP?"

My MVP is:

- user authentication
- creating skill trees
- adding/editing/deleting skills
- defining prerequisites
- tracking progress
- visually showing the tree

### "What can be cut if time gets tight?"

If I need to reduce scope, I can cut:

- sharing trees
- copying trees
- XP or badges
- recommended next skills
- advanced drag-and-drop behavior

The core app would still work without those.

### "How is this different from a checklist app?"

A checklist is mostly linear.

This app is different because:

- skills are connected in a tree
- some skills depend on others
- users unlock progress based on relationships
- the visual map is a major part of the experience

### "How will you store prerequisites?"

I will likely use a separate relationship table that connects one skill to another skill.

That lets me represent:

- which skill is being unlocked
- which skill must come first

### "How will progress work for different users?"

Each user will have their own progress records.

That means:

- two users can use similar trees
- each user still has separate progress

## Good Simple Answers to Use

If the instructor asks what the app does:

"It helps users build a visual learning roadmap where skills unlock based on prerequisites."

If the instructor asks what is technically interesting:

"The prerequisite logic is the standout feature because it adds relationship-based rules beyond standard CRUD."

If the instructor asks why the project is realistic:

"The MVP is focused on auth, CRUD, progress tracking, and a visual tree, so it is ambitious but still finishable."

## What I Should Be Ready to Explain

- what a skill tree is
- what a node is
- what a prerequisite is
- how unlocking works
- why this needs multiple related tables
- what the MVP is
- what stretch goals can be removed if needed

## Bottom Line

This project is a simple but strong capstone idea because it combines:

- practical user value
- a creative interface
- clear full-stack requirements
- one standout logic feature through prerequisites

The goal is to keep the MVP focused and show I can build a polished, complete application.

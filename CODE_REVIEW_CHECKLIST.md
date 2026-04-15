# Skill Tree Builder - Code Review Checklist

## Goal of This Step

Before code review, I should have at least one core feature mostly working and pushed to GitHub.

The main branch should be:

- clean
- readable
- presentable
- working on more than one machine

## Section 1: Pick One Core Feature

For this project, a core feature means one important part of the app works from start to finish.

Good choices for a first code review:

- user authentication
- create a skill tree
- add and edit skill nodes
- track skill progress

Best simple option:

- authentication plus basic skill tree creation

That is a good choice because it shows:

- full-stack setup
- database work
- API routes
- React forms
- protected routes

## Section 2: Functionality

The goal here is not perfection. The goal is to show a working feature.

### What I should make sure is true

- the main feature mostly works
- the app can run without major errors
- the main user flow can be demonstrated
- another person can clone and run the project with the setup steps
- the `main` branch is stable

### What I do not need to worry about yet

- every edge case
- advanced polish
- all stretch goals

### Questions I should ask myself

- Can a user complete the main action from start to finish?
- If I demo this to my instructor, will it work reliably?
- If someone else pulls the repo, can they run it?

### Example for my project

If my chosen feature is tree creation, then I should be able to show:

- user signs up or logs in
- user opens dashboard
- user creates a new skill tree
- new tree is saved in the database
- new tree appears on the page

## Section 3: Code Style

This section is about making the code look intentional and professional.

### Cleanup

I should remove:

- unused imports
- unused variables
- console logs
- template code
- extra files I am not using
- TODO comments that are no longer useful

### Naming

I should follow consistent naming rules:

- `PascalCase` for React components and component file names
- `camelCase` for variables and functions
- noun-based variable names
- verb-based function names

### Good naming examples

- `skillTree`
- `currentUser`
- `createSkillTree`
- `updateProgress`
- `fetchSkills`

### Bad naming examples

- `data`
- `thing`
- `temp`
- `obj`
- `doStuff`

### Other style checks

- format each file consistently
- fix spelling mistakes
- use clear and descriptive names
- avoid abbreviations when possible
- move repeated logic into shared functions or files

## Section 4: Documentation in the Code

Comments should explain purpose, not restate the code.

### Good comment style

Good comments explain:

- why something exists
- what a block of logic is doing at a high level
- where outside code or inspiration came from

### Bad comment style

Bad comments just repeat the code line-by-line.

### What I should do

- write short descriptions for major components
- write short descriptions for important functions
- avoid unnecessary comments if the code is already clear
- credit outside sources if I used them

## Section 5: README Expectations

My README should help the instructor understand the project quickly.

### It should include

- project overview
- problem statement
- project goals
- main features
- tech stack
- architecture overview
- setup instructions
- screenshots if I have them

### For my project, the README should clearly explain

- what a skill tree is
- what problem the app solves
- what the MVP includes
- why prerequisites are the standout feature

## Section 6: Presenting the Main Branch

The `main` branch should look like something I would be comfortable showing in a meeting.

### Before pushing to GitHub

- make sure the app runs
- make sure the chosen feature works
- remove messy code
- update the README
- check for obvious typos
- make sure file names and folder names are clean

### What instructors may notice right away

- whether the app works
- whether the repo feels organized
- whether the code is readable
- whether the README is clear
- whether the project scope feels realistic

## Section 7: Best First Core Feature for This Project

The simplest strong option is:

- authentication
- dashboard
- create skill tree

That is easier to finish cleanly than the full visual prerequisite system.

After that, a strong second feature would be:

- add skills to a tree

After that:

- prerequisite relationships
- progress tracking
- visual tree rendering

## Section 8: My Simple Action Plan

### Step 1

Choose one feature for code review.

Recommended:

- authentication and create skill tree

### Step 2

Make sure the feature works end-to-end.

### Step 3

Clean the related files.

That means:

- remove unused code
- rename unclear variables
- format everything

### Step 4

Update the README if needed.

### Step 5

Push a clean version to GitHub.

## Section 9: Questions I Should Be Ready to Answer

### "What feature is currently working?"

I should be able to answer clearly and specifically.

Example:

"Users can sign up, log in, and create a skill tree that is saved and displayed on their dashboard."

### "What is still missing?"

I should answer honestly and keep it simple.

Example:

"The core tree creation flow is working. The prerequisite logic and visual tree rendering are next."

### "Why did you choose this as your first feature?"

Example:

"I chose this because it gives me a strong foundation for the rest of the app. Users need accounts and trees before I can add skills, prerequisites, and progress tracking."

## Section 10: Bottom Line

For code review, I do not need the full app done.

I need:

- one real feature working
- clean code
- a readable repo
- a clear README

If I keep the first milestone focused, the project will look much stronger during review.

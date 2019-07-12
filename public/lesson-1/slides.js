slides = [
    {
        title: "Git Intro",
        content: `#Intro to Git
        `
    },
    {
        title: "Git Intro",
        content: `#What is Git

Git is a source control management tool.

Most files in a software project are stored as plain text files.

Example files include:
- Code files (javascript, css, html)
- Content files (markdown, plain text)
- Documentation (README, LICENCE)
- Configuration files (json, .env)
        `
    },
    {
        title: "Git Intro",
        content: `#Why do we use it

Typical software projects involve:
- Multiple authors
- Files often relate/depend on each other
- Authors working on the files concurrently
- Things that work can stop working - revisit past implementations

Git lets authors work on the same code logically and independently, remembering everything.
        `
    },
    {
        title: "Git Intro",
        content: `
#How does git work

Authors tell git when they make a set of significant changes.

Git remembers each of these change sets and how they relate in history.

Git can restore the project from any point in history.

Everything happens invisibly: git changes the files in the directory so that it matches the original exactly.

        `
    },
    {
        title: "Git Cycle",
        content: `
#Git Cycle

Git allows the author to indicate what changes they want to remember.

Changes which the author has told git about are said to be **staged**

When the author tells git to remember, git takes the **staged** changes and **commits** them.

Each set of changes stored together is called a **commit**.
        `
    },
    {
        title: "Git Cycle",
        content: `
#Git Cycle

Make some changes

--> \`git status\` to check changes

--> \`git add\` to **stage** changes

--> \`git commit\` to **commit** changes

--> Do it again
        `
    },
    {
        title: "Git Cycle",
        content: `
#Demo time
        `
    },
    {
        title: "Git Cycle",
        content: `
#Your turn

Download the code from:

<https://github.com/teletypist/fred-teaches-git-at-foundry>

Access slides at <https://git.fredrainbird.com/lesson-1>
        `
    },
]

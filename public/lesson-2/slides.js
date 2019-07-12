const slides = [
    {
        title: "Git Branch and Merge",
        content: `#Interdimensional Travel with Git
        `
    },
    {
        title: "Git Branch and Merge",
        content: `#Branching and Merging

Sometimes we will be working on a project with other people and we will want to make breaking changes.

Breaking changes are changes that result in part of the project being unusable.

The parts we break will often be parts other developers need to work for their task.
        `
    },
    {
        title: "Git Branch and Merge",
        content: `#In the real world

History goes in one direction.

Every event neatly follows all events preceding it.
        `
    },
    {
        title: "Git Branch and Merge",
        content: `#Our Git History IRL

Our commit history so far has been like the real world, only going in one direction.

\`\`\`
A --> B --> C -- ... (so on)
\`\`\`

Every event neatly follows all events preceding it.

That line is actually a branch and that branch has a name, **master**
        `
    },
    {
        title: "Git Branch and Merge",
        content: `#Alternate Reality

\`\`\`
master A --> B --> C -- ... (so on)
         \\
        my-branch --> D --> E
\`\`\`

We can introduce a branch in our project for our changes, then we won't wreck the project for other people.

We are now making changes to the project **in another dimension**.
        `
    },
    {
        title: "Git Branch and Merge",
        content: `
#Colliding Realities

Eventually we want to merge out changes with the main project.

However we don't just dump our changes into the source branch.

If our changes have caused a bunch of errors, we will want to clean them first.

Once our combined version works, we can move it across to the rest of the project.
        `
    },
    {
        title: "Git Branch and Merge",
        content: `
#Colliding Realities

\`\`\`
master A --> B   C --> E --> F
               \\ /
  my-branch --> D
\`\`\`

We bring changes from **master** onto our branch first.

We fix anything (if it breaks).

Then we merge our changes back again.

Each time we merge we create a new commit.
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

Access slides at <https://git.fredrainbird.com/lesson-2>
        `
    },
]

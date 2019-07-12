const slides = [
    {
        title: "Collisions",
        content: `#Resolving Conflicts
        `
    },
    {
        title: "Collisions",
        content: `#Resolving Conflicts

Most of the time git can merge changes automagically without much intervention.

This was actually part of why git was created and why it became so popular.

When git can't figure out exactly what changes belong where, it will ask you to resolve it instead.
        `
    },
    {
        title: "Collisions",
        content: `#Good Bad and Ugly

Git has a way to show you every part of a file where two different realities exist.

The way it does this was originally designed to be clear for automated tools while still being accessible manually.

However it's a mess if you're not used to seeing and decoding what's going on.
        `
    },
    {
        title: "Collisions",
        content: `#Commit Names

So far we have talked about how we create sets of changes called **commits**.

We also give our commits short memorable messages to describe our changes.

Git also gives the commit a unique name, it tends to look like noise:

\`bcf74a75c26f210b94a659c9f4320683d8ebf537\`
        `
    },
    {
        title: "Collisions",
        content: `#Commit Names

Since the full name of commits are unwieldy, git allows us to use short names instead.

\`git log --abbrev-commit\` will show us the short name of our recent commits.

\`\`\`
?> git log --abbrev-commit
commit b5787d6 (HEAD -> master, my-changes)
Merge: febe676 bcf74a7
Author: Fred Rainbird <this.will.be.an.email>
Date:   Thu Jul 11 17:25:20 2019 +1000

    Merge branch 'master' into my-changes
\`\`\`
        `
    },
    {
        title: "Collisions",
        content: `
#Commit Names

Since we often want to return to the most recent commit we've made, git gives it a special name: \`HEAD\`

Whenever we checkout a branch, git will checkout the \`HEAD\` commit for that branch automatically.
        `
    },
    {
        title: "Collisions",
        content: `
#Fixing Conflicts

If we have a conflict during a merge, git will refer to the two alternatives by their branch and commit name.

Git will also include if the commit is \`HEAD\`
        `
    },
    {
        title: "Collisions",
        content: `
#Fixing Conflicts

We resolve the conflicts by:
- Stepping through each file where conflicts have occurred
- Deciding which change we want to keep (or creating a new change from both)
- Saving the files
- Committing the result

The new commit will have resolved the conflicts and life goes on.
        `
    },
    {
        title: "Collisions",
        content: `
#Demo Time
        `
    },
    {
        title: "Git Cycle",
        content: `
#Your turn

Download the code from:

<https://github.com/teletypist/fred-teaches-git-at-foundry>

Access slides at <https://git.fredrainbird.com/lesson-3>
        `
    },
]

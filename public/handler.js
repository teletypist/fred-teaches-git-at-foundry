

const converter = new showdown.Converter();
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

Access slides at <https://git.fredrainbird.com>
        `
    },
]
//
// slides = [
//     {
//         title: "Git Intro",
//         content: `#Intro to Git
//         `
//     },
//     {
//         title: "Git Intro",
//         content: `#What is Git
//
// Git is a source control management tool.
//
// Most files in a software project are stored as plain text files.
//
// Example files include:
// - Code files (javascript, css, html)
// - Content files (markdown, plain text)
// - Documentation (README, LICENCE)
// - Configuration files (json, .env)
//         `
//     },
//     {
//         title: "Git Intro",
//         content: `#Why do we use it
//
// Typical software projects involve:
// - Multiple authors
// - Files often relate/depend on each other
// - Authors working on the files concurrently
// - Things that work can stop working - revisit past implementations
//
// Git lets authors work on the same code logically and independently, remembering everything.
//         `
//     },
//     {
//         title: "Git Intro",
//         content: `
// #How does git work
//
// Authors tell git when they make a set of significant changes.
//
// Git remembers each of these change sets and how they relate in history.
//
// Git can restore the project from any point in history.
//
// Everything happens invisibly: git changes the files in the directory so that it matches the original exactly.
//
//         `
//     },
//     {
//         title: "Git Cycle",
//         content: `
// #Git Cycle
//
// Git allows the author to indicate what changes they want to remember.
//
// Changes which the author has told git about are said to be **staged**
//
// When the author tells git to remember, git takes the **staged** changes and **commits** them.
//
// Each set of changes stored together is called a **commit**.
//         `
//     },
//     {
//         title: "Git Cycle",
//         content: `
// #Git Cycle
//
// Make some changes
//
// --> \`git status\` to check changes
//
// --> \`git add\` to **stage** changes
//
// --> \`git commit\` to **commit** changes
//
// --> Do it again
//         `
//     },
//     {
//         title: "Git Cycle",
//         content: `
// #Demo time
//         `
//     },
//     {
//         title: "Git Cycle",
//         content: `
// #Your turn
//
// Download the code from:
//
// <https://github.com/teletypist/fred-teaches-git-at-foundry>
//
// Access slides at <https://git.fredrainbird.com>
//         `
//     },
// ]

var app = new Vue({
  el: '#app',
  data() {
      return {
          title: 'Git Clone',
          slides,
          current: 0,
      }
  },
  created() {
      document.addEventListener('keydown', this.keyhandle);
  },
  computed: {
    slide() {
        return converter.makeHtml(this.slides[this.current].content)
    }
  },
  methods: {
      next() {
          this.current += 1
      },
      prev() {
          this.current -= 1
      },
      keyhandle(ev) {
          console.log(ev.key);
          if (ev.key === "ArrowLeft") {
              this.current = Math.max(0, this.current - 1);
          } else if (ev.key === "ArrowRight") {
              this.current = Math.min(this.slides.length - 1, this.current + 1);
          }
      }
  }
})

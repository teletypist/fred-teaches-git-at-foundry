

const converter = new showdown.Converter();
const slides = [
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
        title: "Git Cycle",
        content: `
#How does git work

Authors tell git when they make a set of significant changes.

Git remembers each of these change sets and how they relate in history.

Git can restore the project from any point in history.

Everything happens invisibly: git changes the files in the directory so that it matches the original exactly.

        `
    },
]

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



const converter = new showdown.Converter();

//


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

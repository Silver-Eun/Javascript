var app = new Vue({
  el: "#app",
  data: {
    print: true,
  },
  methods: {
    toggle: function () {
      this.print = !this.print;
    },
  },
});

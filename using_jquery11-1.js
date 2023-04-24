var app = new Vue({
  el: "#app",
  data: {
    num1: 1,
  },
  methods: {
    toggle: function () {
      this.num1++;
    },
  },
});

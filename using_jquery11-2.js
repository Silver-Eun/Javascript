var app = new Vue({
  el: "#app",
  data: {
    num1: "hello",
  },
  methods: {
    reverse: function () {
      this.num1 = this.num1.split("").reverse().join("");
    },
  },
});

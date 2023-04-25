new Vue({
  el: "#editor",
  data: {
    input: "# hello",
    rs: "",
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
      this.rs = marked(this.input, { sanitize: true });
    }, 500),
  },
});

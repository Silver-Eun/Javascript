new Vue({
  el: "#editor",
  data: {
    input: "# hello",
    items: [],
  },
  computed: {
    rs: function () {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    load: function (index) {
      this.input = this.items[index];
    },

    save: function () {
      this.items.push(this.input);
    },

    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 500),
  },
});

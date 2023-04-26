var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var app = new Vue({
  el: "#app",
  data: {
    originData: [
      { name: "Kim", age: 22 },
      { name: "Lee", age: 17 },
      { name: "Park", age: 24 },
    ],
  },
  computed: {
    filteredData: function () {
      return this.originData;
    },

    columns: function () {
      var keys = [];

      if (typeof this.filteredData[0] != "undefined") {
        keys = Object.keys(this.filteredData[0]);
      }

      return keys;
    },
  },
  filters: {
    capitalize: capitalize,
  },
});

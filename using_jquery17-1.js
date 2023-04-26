var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

Vue.component("grid", {
  props: {
    listData: Array,
  },
  template: "#grid-template",
  data: function () {
    var dataObj = {};

    dataObj.originData = this.listData;

    return dataObj;
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

var app = new Vue({
  el: "#app",
  data: {
    myListData1: [
      { name: "Kim", age: 22 },
      { name: "Lee", age: 17 },
      { name: "Park", age: 24 },
      { name: "Pall", age: 21 },
    ],
    myListData2: [
      { name: "Bruce", age: 27 },
      { name: "Henry", age: 13 },
      { name: "Kevin", age: 25 },
    ],
    myListData3: [
      { name: "Mcklein", age: 24 },
      { name: "Jackie", age: 18 },
      { name: "Chuck", age: 27 },
    ],
  },
});

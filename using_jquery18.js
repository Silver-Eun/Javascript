var apiURL = "https://api.github.com/repos/vuejs/vue/commits?per_page";

var fetchData = function () {
  // create 1 delegate
  var xhr = new XMLHttpRequest();

  // target
  xhr.open("GET", apiURL);

  // reserve
  xhr.onload = function () {
    var commits = JSON.parse(xhr.responseText);
    var commitData = [];

    var forEachFunc = function (row) {
      var dataRow = {};
      dataRow.login = row["author"].login;
      dataRow.message = row["commit"].message;

      commitData.push(dataRow);
    };

    commits.forEachFunc(function (row) {
      app.myListData1.push(row);
    });
  };

  // launch
  xhr.send();
};

fetchData();

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
  },
});

console.clear();

var apiURL = "https://api.github.com/repos/vuejs/vue/commits?per_page=20&sha=master";

var fetchData = function () {
  var xhr = new XMLHttpRequest();
  var self = this;
  xhr.open("GET", apiURL);
  xhr.onload = function () {
    var commits = JSON.parse(xhr.responseText);
    var commitData = [];

    commits.forEach(function (row) {
      var dataRow = {};
      dataRow.login = row["author"].login;
      dataRow.message = row["commit"].message;

      commitData.push(dataRow);
    });

    // delete origin data
    app.myListData1.splice(0, 1);

    commitData.forEach(function (row) {
      app.myListData1.push(row);
    });
  };
  xhr.send();
};

fetchData();

// register the grid component
var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

Vue.component("grid", {
  props: {
    listData: Array,
    searchKeyword: String,
  },
  template: "#grid-template",
  data: function () {
    return {
      originData: this.listData,
    };
  },
  computed: {
    columns: function () {
      var keys = [];

      if (typeof this.originData[0] != "undefined") {
        keys = Object.keys(this.originData[0]);
      }

      return keys;
    },
    filteredData: function () {
      var searchKeyword = this.searchKeyword;

      var filterKey = searchKeyword && searchKeyword.toLowerCase();

      var filteredData = this.originData.filter(function (row) {
        return Object.keys(row).some(function (key) {
          return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
        });
      });

      return filteredData;
    },
  },
  filters: {
    capitalize: capitalize,
  },
});

var app = new Vue({
  el: "#app",
  data: {
    searchQuery: "",
    myListData1: [],
  },
});

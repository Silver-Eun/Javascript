console.clear();

var searchKeyword = "hi";

var filterKey = searchKeyword && searchKeyword.toLowerCase();

console.log(filterKey);
//
var str = "hello";
var search = "e";

var rs = str.indexOf(search);

console.log(rs);
//
var arr = [4, 5, 6];
var searchKeyword = 4;

console.log(arr.indexOf(searchKeyword) > -1);
//
var row = {
  key: 1,
  name: "kevin",
  age: 22,
};

var key = "name";

console.log(row[key]);
console.log(row["key"]);
//
var testData = ["aa", "bb", "cc", "dd", "ee"];

var rs = testData.some(function (item) {
  return item.indexOf("ff") > -1;
});

console.log(rs);
//
var row = {
  key: 1,
  name: "Kevin",
  age: 22,
};
var keyOfRow = Object.keys(row);

var someFunc = function (key) {
  var value = row[key];

  if (value == "Kevin") {
    return true;
  }
};

var found = keyOfRow.some(someFunc);

console.log(found);
//
var data = ["Chuck Norris", "Bruce Lee", "Jackie Chan", "Jet Li"];

var searchKeyword = "Le";
var filterKey = searchKeyword && searchKeyword.toLowerCase();

if (filterKey) {
  data = data.filter(function (name, index) {
    name = name.toLowerCase();
    return name.indexOf(filterKey) > -1;
  });
}

console.log(data);

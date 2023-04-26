console.clear();

var data = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];

var searchKeyword = "B";

var filterKey = searchKeyword && searchKeyword.toLowerCase();

data = data.filter(function (row) {
  var someFunc = function (key) {
    var value = String(row[key]).toLowerCase();

    return value.indexOf(filterKey) > -1;
  };

  var keys = Object.keys(row);

  var found = keys.some(someFunc);

  return found;
});

console.log(data);

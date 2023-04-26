console.clear();

var data = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];

var searchKeyword = "J";
var filterKey = searchKeyword && searchKeyword.toLowerCase();

data = data.filter(function (row, index) {
  var name = row.name;
  name = name.toLowerCase();
  var power = String(row.power);
  power = power.toLowerCase();

  var match = false;

  if (name.indexOf(filterKey) > -1) {
    match = true;
  } else if (power.indexOf(filterKey) > -1) {
    match = true;
  }

  return match;
});

console.log(data);

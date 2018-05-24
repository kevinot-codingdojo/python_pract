// test.js
// var numbers = [1, "apple", -3, "orange", 0.5, 12, "hipple", -7, "mango", 0.25];
// var numOnly = numbers.filter((n) => typeof n  === "number");
// console.log(numOnly)
var students = [
  {
    name : "Mike",
    track: "track-a",
    achievements: 23,
    points : 400,
  },

  {
    name : "james",
    track: "track-a",
    achievements: 2,
    points : 21,
  },
]

  students.forEach(myFunction);

function myFunction (item, index) {

  for( var key in item ) {
    console.log(item[key])
  }
}

var mixed = [1, "apple", -3, "orange", 0.5, 12, "hipple", -7, "mango", 0.25];
var numOnly = mixed.filter((n) => typeof n  === "number");
console.log(numOnly)

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let revColors = [];
console.log(colors);
for (let col of colors) {
  revColors.unshift(col);
}
console.log(revColors);

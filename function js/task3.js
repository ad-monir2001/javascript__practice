let numbers = [2, 4, 3];
let sum = 0;
for (x of numbers) {
  sum += x;
}
let average = sum / numbers.length;
// console.log(sum);
// console.log(average);

// In function what will we use.

function make_avg(number) {
  for (a of number) {
    let sum = 0;
    sum += a;
  }
  let average = sum / number.length;
  console.log(average);
}

make_avg([2, 4, 3]);

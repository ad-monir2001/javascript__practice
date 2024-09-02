let num = 81;
let sum = 0;

while (num <= 131) {
  if (num % 2 != 0) {
    sum = sum + num;
  }
  num++;
}
console.log(sum);

let sum = 0;
let x = 0;

while (x <= 200) {
  if (sum >= 100) {
    break;
  }
  console.log((sum = sum + x));
  x++;
}

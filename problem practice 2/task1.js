function findLowest(numbers) {
  let lowest = numbers[0];
  for (const num of numbers) {
    if (lowest > num) {
      lowest = num;
    }
  }
  return lowest;
}

const lowest = findLowest([30, 5, 2, 5, 10, 50, 10, 8]);

console.log(lowest);

function counterNumber(num, numbers) {
  let NewArray = [];
  for (let x of numbers) {
    if (x === num) {
      NewArray.push(num);
    }
  }
  const count = NewArray.length;
  console.log(count);
}

counterNumber(2, [5, 4, 2, 5, 5, 6, 7, 2]);

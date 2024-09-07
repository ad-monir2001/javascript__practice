function duplicateChecker(numbers) {
  let newArray = [];
  for (let num of numbers) {
    if (newArray.includes(num) === false) {
      newArray.push(num);
    }
  }
  console.log(newArray);
}

duplicateChecker([5, 2, 4, 2, 5, 10, 12]);
duplicateChecker(['monir', 'atik', 'batik', 'patik', 'atik', 'monir']);

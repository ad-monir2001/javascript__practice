for (num = 55; num <= 85; num++) {
  if (num % 2 !== 0) {
    if (num % 5 === 0) {
      continue;
    }
    console.log(num);
  }
}

function count_zero(binaryNum) {
  let zeros = [];
  for (let x of binaryNum) {
    if (x === '0') {
      zeros.push(x);
    }
  }
  console.log(zeros.length);
}

count_zero('1111111110');

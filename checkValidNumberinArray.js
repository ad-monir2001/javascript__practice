function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return 'Invalid Array';
  }
  let validArray = [];
  for (let x of array) {
    if (typeof x === 'number' && isNaN(x) === false) {
      validArray.push(x);
    }
  }
  return validArray;
}

let arrayChecker = deleteInvalids([
  1,
  null,
  undefined,
  18,
  -19,
  NaN,
  '12',
  [1, 3],
]);
let arrayChecker2 = deleteInvalids(['1', { num: 2 }, NaN]);
let arrayChecker3 = deleteInvalids([1, 2, -3]);
let arrayChecker4 = deleteInvalids({ num: [1, 3, 4] });
console.log(arrayChecker);
console.log(arrayChecker2);
console.log(arrayChecker3);
console.log(arrayChecker4);

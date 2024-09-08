function calculateElectronicsBudget(prices) {
  let sum = 0;
  for (let mullo of prices) {
    sum += mullo.price * mullo.quantity;
  }
  return sum;
}

const budget = calculateElectronicsBudget([
  {
    name: 'Laptop',
    price: 32000,
    quantity: 1
  },
  {
    name: 'Tablet',
    price: 15000,
    quantity: 2
  },
  {
    name: 'Mobile',
    price: 12500,
    quantity: 3
  },
]);
console.log(budget);

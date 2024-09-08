const phones = [
  { model: 'PhoneA', brand: 'Iphone', price: 95000 },
  { model: 'PhoneB', brand: 'Samsung', price: 40000 },
  { model: 'PhoneC', brand: 'Oppo', price: 26000 },
  { model: 'PhoneD', brand: 'Nokia', price: 35000 },
  { model: 'PhoneE', brand: 'Iphone', price: 105000 },
  { model: 'PhoneF', brand: 'HTC', price: 48000 },
];

function findAveragePhonePrice(phones) {
  let prices = [];
  let sum = 0;
  for (let cost of phones) {
    prices.push(cost.price);
    sum = sum + cost.price;
  }
  let average = (sum / prices.length).toFixed(2);
  return average;
}

let averagePrice = findAveragePhonePrice(phones);
console.log(averagePrice);

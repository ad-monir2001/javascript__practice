function currentBill(unit) {
  let singlePackage = 4; // 1 - 50 unit
  let familyPackage = 6; // 51 - 70 unit
  let borderPackage = 7; // 71 - 150 unit
  let businessPackage = 10; // 150 - infinite unit

  let totalCost = 0;

  if (unit <= 50) {
    totalCost = unit * singlePackage;
  } else if (unit <= 70) {
    let firstStage = 50 * singlePackage;
    let secondStage = (unit - 50) * familyPackage;
    totalCost = firstStage + secondStage;
  } else if (unit <= 150) {
    let firstStage = 50 * singlePackage;
    let secondStage = 20 * familyPackage;
    let thirdStage = (unit - 70) * borderPackage;
    totalCost = firstStage + secondStage + thirdStage;
  } else {
    let firstStage = 50 * singlePackage;
    let secondStage = 20 * familyPackage;
    let thirdStage = 80 * borderPackage;
    let lastStage = (unit - 150) * businessPackage;
    totalCost = firstStage + secondStage + thirdStage + lastStage;
  }
  console.log(`Your bill is: ${totalCost}`);
  let billWithVat = totalCost + totalCost * 0.06;
  return `Your bill includes 6% vat : ${billWithVat}`;
}

const bill = currentBill(110);
console.log(bill);

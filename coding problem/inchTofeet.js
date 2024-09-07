function inchToFeet(inch) {
  let feet = inch / 12;
  let onlyFeet = Math.floor(feet);
  let onlyInch = Math.round((feet - onlyFeet) * 12);
  let result = `${onlyFeet}ft ${onlyInch}inch`;
  return result;
}
console.log(inchToFeet(86));

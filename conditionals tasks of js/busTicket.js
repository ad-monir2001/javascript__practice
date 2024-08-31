let age = 60;
let student = false;
let ticketPrice = 800;

if (age < 10) {
  console.log(`You are free`);
} else if (student == true) {
  console.log(`You have to pay ${ticketPrice - ticketPrice * 0.5}tk`);
} else if (age >= 60) {
  console.log(`You have to pay ${ticketPrice - ticketPrice * 0.15}tk`);
} else {
  console.log(`You have to pay ${ticketPrice}tk`);
}

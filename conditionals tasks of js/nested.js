let myScore = 0;

let friendScore = 81;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log('Go for a lunch.');
  } else if (friendScore == 80 || friendScore >= 60) {
    console.log('Good luck next time.');
  } else if (friendScore == 60 || friendScore >= 40) {
    console.log('Message unseen');
  } else if (friendScore < 40) {
    console.log('block him');
  }
} else {
  console.log('Go to home and sleep and act sad.');
}

const str = 'Count how many times A string has the letter';
const smallA = str.toLowerCase();
let totalA = 0;
for (const a in smallA) {
  if (smallA[a] === 'a') {
    totalA += smallA[a].length;
  }
}
console.log(totalA);

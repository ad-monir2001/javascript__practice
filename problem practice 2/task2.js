function smallestName(friends) {
  let nameLengths = [];
  for (const name of friends) {
    let f = name.length;
    nameLengths.push(f);
  }

  let small = nameLengths[0];
  for (let x of nameLengths) {
    if (small > x) {
      small = x;
    }
  }
  let smallNamePosition = nameLengths.indexOf(small);
  console.log(friends[smallNamePosition]);
}
smallestName(['rahim', 'robin', 'rahat', 'ayman', 'moon']);

let str = 'the boy was playing.';

let words = str.split(' ');
for (let x of words) {
  let y = x.charAt(0).toUpperCase();
  
  // console.log(y);
  console.log(words.join(y));
}

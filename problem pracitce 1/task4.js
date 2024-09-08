function findLongWord(sentence) {
  let subSentence = sentence.split(' ');
  let lengths = [];
  for (x of subSentence) {
    lengths.push(x);
  }
  let len = lengths[3].length;
  console.log(len);
}

const word = findLongWord('hello world of programming');
console.log(word);

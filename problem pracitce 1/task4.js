function findLongWord(sentence) {
  let subSentence = sentence.split(' ');

  let arrayOfWords = [];
  for (let word of subSentence) {
    arrayOfWords.push(word);
  }

  let wordLengths = [];
  for (let x of arrayOfWords) {
    wordLengths.push(x.length);
  }

  let biggest = wordLengths[0];
  for (x of wordLengths) {
    if (biggest < x) {
      biggest = x;
    }
  }
  let positionOfBiggest = wordLengths.indexOf(biggest);

  let bigWord = arrayOfWords[positionOfBiggest];
  console.log(bigWord);
}

const word = findLongWord('hello world of programming');

function findLongWord(sentence) {
    let subSentence = sentence.split(' ')
    let lengths = []
    for (x of subSentence) {
        lengths.push(x)
    }
    console.log(lengths.length);
}

const word = findLongWord('hello world of programming')
console.log(word);
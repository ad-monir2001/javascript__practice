function vowelCounter(sentence) {
  let vowels = [];
  let s = sentence.toLowerCase();
  for (letter of s) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      vowels.push(letter);
    }
  }
  let numberOfVowel = vowels.length;
  console.log(vowels);
  console.log(numberOfVowel);
}

vowelCounter('WrIte a function to count the number of vowels in a string');

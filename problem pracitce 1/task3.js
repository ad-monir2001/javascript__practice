function vowelCounter(sentence) {
  let vowels = [];
  for (letter of sentence) {
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

vowelCounter('Write a function to count the number of vowels in a string');

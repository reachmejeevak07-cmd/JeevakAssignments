function mostFrequentChar(str) {
  let freq = {};   // object to store frequency of characters
  let maxChar = '';
  let maxCount = 0;

  // count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;

    // check if this character has highest count
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }

  console.log("Most frequent character:", maxChar);
}


mostFrequentChar("javascript");

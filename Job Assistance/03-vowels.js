function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let char of str.toLowerCase()) {   // make string lowercase
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log("Number of vowels:", count);
}

countVowels("function");

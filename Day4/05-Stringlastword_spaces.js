function lengthOfLastWord(s) {
  // Step 1: Remove extra spaces from start and end
  s = s.trim();

  // Step 2: Split the string into words
  let words = s.split(" ");

  // Step 3: Get the last word
  let lastWord = words[words.length - 1];

  // Step 4: Return its length
  return lastWord.length;
}

// Testing
console.log(lengthOfLastWord("Hello World"));         // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4




function isAnagram(str1, str2) {
  // Step 1: Remove spaces & convert to lowercase
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();

  // Step 2: Sort the characters
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");

  // Step 3: Compare and return result
  return sorted1 === sorted2;
}

// Testing
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
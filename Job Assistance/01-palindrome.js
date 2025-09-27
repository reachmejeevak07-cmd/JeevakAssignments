function checkPalindrome(str) {
  // reverse the string
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // check if original equals reversed
  if (str === reversed) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}

checkPalindrome("madam");   // madam is a palindrome
checkPalindrome("hello");   // hello is not a palindrome
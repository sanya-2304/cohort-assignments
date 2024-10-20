/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let s = 0; // Start index
  let e = str.length - 1; // End index
  
  while (s < e) {
    if (str[s] !== str[e]) {
      return false; // Not a palindrome
    }
    s++; // Move the start index forward
    e--; // Move the end index backward
  }
  
  return true;
}

module.exports = isPalindrome;

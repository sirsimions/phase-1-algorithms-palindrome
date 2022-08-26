function isPalindrome(word) {
  // Write your algorithm here
    let wordArray = word.split("");
    let invertedArray = wordArray.reverse();
    let reversedWord = invertedArray.join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
}
}


/* 
  split the word into characters
  reverse it
  convert it back to normal word (without splitting)
*/

/*
  Once a reverse of the word is achieved, the original word can be compared too to it to acertain if they read the same from left or right
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

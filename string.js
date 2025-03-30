// 🔥 String Manipulation
// 1-Reverse a string without using .reverse().
function reverseString(str){
    let reversed = '';
    for(let i=str.length-1; i>=0;i--){
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString('hello world'));
// 2-Check if a string is a palindrome.
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
      reversedStr += cleanedStr[i];
    }
    return cleanedStr === reversedStr;
  }
  console.log(isPalindrome('madam')); 
  console.log(isPalindrome('hello'));
// 3-Count the number of occurrences of a character in a string.
function countCharOccurance(str,char){
    let count = 0;
    for(let i=0;i<=str.length;i++){
        if(str[i]===char){
            count++
        }
    }
    return count
}
console.log(countCharOccurance('hello world','l'));
console.log(countCharOccurance('hello world','o'));
// 4-Remove duplicate characters from a string.
function removeDuplicates(str){
    let result = '';
    for(let i=0;i<str.length;i++){
        if(result.indexOf(str[i])===-1){
            result += str[i]
        }
    }
    return result
}
console.log(removeDuplicates('hello'));
// 5-Check if two strings are anagrams.
function areAnagrams(str1,str2){
    str1 = str1.replace(/\s/g,'').toLowerCase()
    str2 = str2.replace(/\s/g,'').toLowerCase()

    if(str1.length !== str2.length){
        return false;
    }
    return str1.split('').sort().join('')===str2.split('').sort().join('');
}
console.log(areAnagrams('listen','silent'));
console.log(areAnagrams('hello','world'));
// 6-Replace all occurrences of a character in a string.
function replaceCharacter(str, target, replacement) {
   
    return str.split(target).join(replacement);
}

console.log(replaceCharacter('hello world', 'o', 'a')); 
// 7-Check if a string contains only unique characters.
function hasUniqueCharacters(str){
  const charSet = new Set(str);

  return charSet.size === str.length
}
console.log(hasUniqueCharacters('hello'));
console.log(hasUniqueCharacters('helo'));

// 8-Remove all non-alphanumeric characters from a string.
function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
  }
  
  console.log(removeNonAlphanumeric('Hello@ World!123')); 
// 9-Find the most frequent character in a string.
function mostFrequentChar(str) {
    let charCount = {};
    let maxCount = 0;
    let mostFrequent = '';
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1; 
      if (charCount[char] > maxCount) {
        maxCount = charCount[char]; // 
        mostFrequent = char;
      }
    }
    return mostFrequent;
  }
  console.log(mostFrequentChar('hello world')); 
// 10-Check if a string is a valid email address.
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  
    return emailRegex.test(email);
  }
  
  console.log(isValidEmail('example@email.com')); 
// 11-Convert a string to camel case.
function toCamelCase(str) {
    return str
      .toLowerCase()
      .split(/[\s-_]+/) 
      .map((word, index) =>
        index === 0
          ? word 
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
  }
  
  console.log(toCamelCase('hello world')); 
  
  console.log(toCamelCase('convert-to-camel-case'));
  
// 12-Convert a string to snake case.
function toSnakeCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1_$2') 
      .replace(/[\s-]+/g, '_')
      .toLowerCase(); 
  }
  console.log(toSnakeCase('helloWorld'));
// 13-Convert a string to kebab case.
function toKebabCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2') 
      .replace(/[\s_]+/g, '-')
      .toLowerCase(); 
  }
  
  console.log(toKebabCase('helloWorld'));
  
// 14-Find the longest word in a sentence.
function longestWord(sentence){
  let words = sentence.split(' ')

  let longestWord = '';

  for(let word of words){
    if(word.length>longestWord.length){
      longestWord = word
    }
  }
  return longestWord
}
console.log(longestWord('hello i am a web Developer'));
// 15-Find all permutations of a given string.
function findPermutations(str) {
 
  if (str.length === 1) {
    return [str];
  }

  let permutations = [];
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    const remainingStr = str.slice(0, i) + str.slice(i + 1);
    
    const remainingPermutations = findPermutations(remainingStr);
    
    for (let perm of remainingPermutations) {
      permutations.push(char + perm);
    }
  }
  
  return permutations;
}

console.log(findPermutations("abc"));


// 16-Find the shortest word in a sentence.
function findShortest(sentence){
  let words = sentence.split(' ')

  let short = words[0]
  for(let word of words){
    if(word.length<short.length){
      short = word
    }
  }
  return short
}
console.log(findShortest('I Love you'));
// 17-Check if a string is a valid palindrome after removing one character.
function isValidPalindrome(str) {
  
  function isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }

  if (isPalindrome(str)) {
    return true;
  }

  for (let i = 0; i < str.length; i++) {

    let modifiedStr = str.slice(0, i) + str.slice(i + 1);

    if (isPalindrome(modifiedStr)) {
      return true;
    }
  }

  return false;
}

console.log(isValidPalindrome('abca')); 

// 18-Count the number of consonants in a string.
function countConsonants(str){
  str = str.toLowerCase();

  let vowel = 'aeiou'

  let count = 0;

  for(let cons of str){
    if (/[a-z]/.test(cons) && !vowel.includes(cons)) {
      count++;
  }
}
  return count
}
console.log(countConsonants('Hello world'));

// 19-Count the number of spaces in a string.
function countSpace(str){
  let count = 0;

  for(let char of str){
    if(char === ' '){
      count++
    }
  }
  return count;
}
console.log(countSpace('I love JavaScript'));
// 20-Reverse each word in a string.
function reverseEachWord(str) {
  let words = str.split(' ');

  let reversedWords = words.map(word => word.split('').reverse().join(''));

  return reversedWords.join(' ');
}
console.log(reverseEachWord('Hello World'));
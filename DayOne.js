// 1- Reverse a string.
let R = "reverse";
const ans = R.split("").reverse().join("");
console.log(ans);

//2- Check if a string is a palindrome.
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("121"));
console.log(isPalindrome("122"));

// 3- Find the maximum number in an array.
let arr = [24, 21, 85];
const result = Math.max(...arr);
console.log(result);

// 4-Find the minimum number in an array.
let arrMin = [5, 1, 9];
const resultMin = Math.min(...arrMin);
console.log(resultMin);
// 5-Sum all numbers in an array.
let sumArr = [2, 4, 8, 12, 16];
const resultSum = sumArr.reduce((sum, num) => sum + num, 0);
console.log(resultSum);
// 6-Count the occurrences of a character in a string.
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
console.log(countChar("banana", "a"));
console.log(countChar("Football", "o"));
// 7-Check if two strings are anagrams.
function isAnagram(str1,str2){
   return str1.split('').sort().join() === str2.split('').sort().join()
}
console.log( isAnagram("listen","silent"));
console.log( isAnagram("node","regh"));
// 8-Remove duplicates from an array.
function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates([1,2,3,1,5,2,5,7]));
// 9-Find the factorial of a number.
function factorial(n){
    let result = 1;
    for(let i=2;i<=n;i++){
        result *=i
    }
    return result
}
console.log(factorial(5));
// 10-Generate the Fibonacci sequence up to n terms.

// 11-Check if a number is prime.
function isPrime(num){
  if(num<=1){
    return `${num} is not a prime number`
  } else{
   
      return `${num}is a prime number`
  }

}
console.log(isPrime(1));
console.log(isPrime(5));

//12- Find the second largest number in an array.
function secondLargest(arr){
  let uniqueArr = [...new Set(arr)]
  if(uniqueArr.length<2){
    return 'no second number is present'
  }
  uniqueArr.sort((a,b)=>b-a)
  return `Second largest number is${uniqueArr[1]}`
}
console.log(secondLargest([10,9,7,20]));
// 13-Convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius){
  let fahrenheit = (celsius*9/5)+32
  return `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}
console.log(celsiusToFahrenheit(0));  
console.log(celsiusToFahrenheit(25));
//14- Convert a number to a string without using .toString().
function numToString(num){
  return `${num}`;
}
console.log(numToString(25));
console.log(typeof numToString(25));
//15- Find the length of the longest word in a string.
function longestWordLength(str){
  let words = str.split(' ');
  let maxLength = 0;

  for(let word of words){
    if(word.length >maxLength){
      maxLength = word.length
    }
  }
  return maxLength
}
console.log(longestWordLength('I love coding'));
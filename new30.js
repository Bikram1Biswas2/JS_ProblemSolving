//1- Merge two arrays and remove duplicates.
let arr1 = [1,2,3]
let arr2 = [3,4,5]
const twoArray = [...new Set(arr1.concat(arr2))]
console.log(twoArray);
// 2-Find the largest even number in an array.
 function largestEvenNumber(arr){
    let largest = -Infinity;
     for(let i=0; i<arr.length;i++){
        if(arr[i]%2 === 0 && arr[i]>largest)
            largest = arr[i]
     }
     return largest === -Infinity?null:largest
 }
 console.log(largestEvenNumber([1,2,3]));
 console.log(largestEvenNumber([1,2,3,5,8,9]));
// 3-Find the smallest odd number in an array.
function smallestOddNum(arr){
    let smallest = null;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !==0 ){
            if(smallest === null|| arr[i] <smallest)
                smallest = arr[i]
        }
    }
    return smallest
}
console.log(smallestOddNum([1,2,3]));
// 4-Count the number of vowels in a string.
function vowelCount(str){
    let count = 0;
    let vowels = 'aeiouAEIOU'

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count
}
console.log(vowelCount("I am a Coder"));
// 5-Capitalize the first letter of each word in a sentence.
function capitalFirstLetter(str){
    let words  = str.split(' ')

    let capitalize = words.map(function(word){
        return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
    })
    return capitalize.join(' ')
}
console.log(capitalFirstLetter('you are a good person'));
// 6-Return the sum of all even numbers in an array.
function sumOfAllEvenNum(num){
    let sum = 0;
    for(let char of num){
        if(char%2===0){
            sum +=char
        }
    }
    return sum;
}
console.log(sumOfAllEvenNum([2,5,4,6,10]));
// 7-Return the sum of all odd numbers in an array.
function sumOfAllOddNum(num){
    let sum = 0;
    for(let char of num){
        if(char % 2 !==0){
            sum += char
        }
    }
    return sum;
}
console.log(sumOfAllOddNum([1,2,3,4,5]));
// 8-Check if an array is sorted in ascending order.
  function isSortedAscending(arr){
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }

    }
    return true
  }
  console.log(isSortedAscending([2,1,3]));
  console.log(isSortedAscending([1,2,3]));
// 9-Find the index of the first occurrence of an element in an array.\
function firstIndex(arr,element){
    return arr.indexOf(element)
}
console.log(firstIndex([2,4,6],4));
console.log(firstIndex([2,4,6],7));
// 10-Remove all falsy values from an array. (false, 0, "", null, undefined, NaN)
function removeFalsyValues(arr){
    return arr.filter(Boolean)
}
console.log(removeFalsyValues([0,1,false,'',45]));
// 11-Flatten a nested array.
function flattenArray(arr){
    return arr.flat(Infinity)
}
console.log(flattenArray([1, [2, [3, [4, 5]]], 6]));
// 12-Return the middle element(s) of an array.
function getMiddleElement(arr){
    const length = arr.length;

    if(length ===0){
        return null
    }
    const mid = Math.floor(length/2)
    if(length%2!==0){
        return arr[mid]
    }else {
        return (arr[mid-1], arr[mid])
    }
}
console.log(getMiddleElement([1,2,3]));
console.log(getMiddleElement([1,2,3,4]));
console.log(getMiddleElement([]));
// 13-Check if a number is a perfect square.
function isPerfectSquare(num){
    if(num<0){
        return false
    }
    const sqrt = Math.sqrt(num)
    return sqrt === Math.floor(sqrt)
}
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(-25));
// 14-Count the number of words in a sentence.
function countWords(str) {
    if (!str.trim()) {
      return 0; 
    }
  
    const words = str.trim().split(/\s+/);
    return words.length;
  }
  console.log(countWords('hello world'));

// 15-Check if a string contains only digits.
   function onlyDigits(str){
    // let str = '';
   if(typeof str !== 'string'){
    str = String(str)
   }
   return /^[0-9]+$/.test(str);
   }
   console.log(onlyDigits('fdf'));
   console.log(onlyDigits(2));
// 16-Find the GCD (Greatest Common Divisor) of two numbers.
function findGCD(a,b){
    while(b !==0){
        let temp = b;
        b= a%b;
        a = temp;
    }
    return a;
}
let num1 = 56;
let num2 = 98;
console.log(`GCD of ${num1} and ${num2} is: ${findGCD(num1, num2)}`);
// 17-Find the LCM (Least Common Multiple) of two numbers.
function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
  }
  
  // Example usage
  let numi = 12;
  let numii = 18;
  console.log(`LCM of ${numi} and ${numii} is: ${findLCM(numi, numii)}`);
// 18-Generate a random number between two given numbers.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let min = 10;
  let max = 50;
  console.log(`Random number between ${min} and ${max} is: ${getRandomNumber(min, max)}`);
  
// 19-Replace all spaces in a string with hyphens (-).
function allSpace(str){
   return str.split(' ').join('-')
}
console.log(allSpace('Hello World'));
// 20-Find the intersection of two arrays.
function findInterSection(arr1,arr2){
  return arr1.filter(item=> arr2.includes(item))
}
let array1 = [1,2,7,8]
let array2 = [1,2,3,4,5]
console.log(findInterSection(array1,array2));
//21-Find the union of two arrays.
  function findUnion(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
  }
  let arrayOne = [1, 2, 3, 4, 5];
  let arrayTwo = [4, 5, 6, 7, 8];
  console.log(`Union: ${findUnion(arrayOne, arrayTwo)}`);
// 22-Check if a string ends with a specific substring.
function subs(str,substr){
    return str.endsWith(substr)
}
let myString = 'Hello world'
let target = 'world'
console.log(subs(myString,target));

// 23-Check if a string starts with a specific substring.
function startsub(str,sbstr){
     return str.startsWith(sbstr)
}
let one = 'my name'
let two='my'
console.log(startsub(one,two));
// 24-Rotate an array by k positions.

// 25-Find the sum of digits of a number.
function Sum(dig){
  let sum = 0;
  let str =dig.toString()
  for(let i=0;i<str.length;i++){
    sum += parseInt(str[i])
  }
  return sum;
}
console.log(Sum(234));
// 26-Find the product of digits of a number.
function productOfDigits(num) {
    let product = 1;
    let str = num.toString(); 
    for (let i = 0; i < str.length; i++) {
      product *= parseInt(str[i]); 
    }
    return product;
  }
  
  console.log(productOfDigits(1234));
// 27-Convert a binary number to decimal.
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }
  console.log(binaryToDecimal('1010'));
// 28-Convert a decimal number to binary.
function decimalToBinary(decimal) {
    return decimal.toString(2);
  }
  console.log(decimalToBinary(10))
// 29-Reverse the words in a sentence.
function reverseWord(sentence){
    return sentence.split(' ').reverse().join(' ')
}
console.log(reverseWord(' Hello World'));
// 30-Find the first non-repeating character in a string.
function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {

      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
    return null; 
  }
  console.log(firstNonRepeatingCharacter('aabbc'));     
  
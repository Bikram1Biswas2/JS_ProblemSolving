// 🟠 Medium Level (Intermediate)
//1- Implement a function to flatten a nested array.
function flattenArray(arr){
    return arr.flat(Infinity)
}
console.log(flattenArray([1, [2, [3, [4, 5]]], 6]));
//2- Find the intersection of two arrays.
function arrayIntersection(arr1,arr2){
    return arr1.filter((num)=> arr2.includes(num))
}
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// 3-Find the union of two arrays.
function arrayUnion(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
}
console.log(arrayUnion([1,2,3,4,],[2,4,1,5,8]));
//4- Implement a function to merge two sorted arrays.
function sortedArray(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  console.log(sortedArray([1, 3, 5], [2, 4, 6])); 
  console.log(sortedArray([1, 2, 7], [3, 4, 5])); 
  console.log(sortedArray([], [3, 4, 5])); 
  
//5- Implement a deep copy function for objects.

// 6-Find the first non-repeating character in a string.
function firstNonRepeatingChar(str){
  for(let i=0;i<str.length;i++){
    if(str.indexOf(str[i])=== str.lastIndexOf(str[i])){
        return str[i]
    }
  }
  return null
}
console.log(firstNonRepeatingChar('swiss'));
// 7-Remove falsy values from an array.
function removeFalsyValues(arr){
    return arr.filter(Boolean)
}
console.log(removeFalsyValues([0,1,false,'']));
// 8-Implement a function to shuffle an array randomly.
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffledArray = shuffleArray(myArray);
console.log(shuffledArray);

// 9-Implement a debounce function.
function debounce(func,delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
const debouncedHello = debounce(sayHello, 1000);
debouncedHello("Bikram");
debouncedHello("Ersa");
setTimeout(() => debouncedHello("John"), 1200);

// 10-Implement a throttle function.
// function throttle(func, delay){
//   let lastcall = 0;
//   return function(...args){
//     const now = Date.now()
//     if(now-lastcall >= delay){
//       lastcall = now;
//       func.apply(this,args)
//     }
//   }
// }
// function handleScroll(event) {
//   console.log("Scrolling at:", new Date().toLocaleTimeString());
// }
// const throttledScroll = throttle(handleScroll, 1000);


// 11-Implement a function that checks if a given object is empty.
function checkObjectEmpty(obj){
    if(Object.keys(obj).length<1){
      return 'empty'
    }
    return 'no empty'
}
console.log(checkObjectEmpty({}));
console.log(checkObjectEmpty({2:'two',3:'three'}));
// 12-Find the longest substring without repeating characters.

// 13-Implement a function to generate all permutations of a given string.
function getPermutations(str) {
  if (str.length <= 1) {
    return [str];
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1);
    let remainingPerms = getPermutations(remainingChars);
    for (let perm of remainingPerms) {
      result.push(currentChar + perm);
    }
  }
  return result;
}
console.log(getPermutations("abc"));
console.log(getPermutations("ab"));  
console.log(getPermutations("a"));   

//14- Implement a function that converts a given string to camelCase.
let str = "i love programming";
let words = str.split(" "); 

let camelCaseStr = words
  .map((word, index) => {
    if (index === 0) {
      return word.toLowerCase(); 
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
  })
  .join("");

console.log(camelCaseStr); 

// 15-Implement a function that finds the missing number in an array of consecutive numbers.
function findMissingNumber(arr){
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  for(let i = min;i <=max;i++){
    if(!arr.includes(i)){
      return i
    }
  }
  return null 
}
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([10, 11, 13, 14])); 
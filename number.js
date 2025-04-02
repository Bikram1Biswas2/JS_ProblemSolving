// 📊 Number Manipulation
// 1-Find the factorial of a number.
function factorial(n){
    if(n<0) return 'Factorial must be positive number'

    let result = 1;
    for(let i=1;i<=n;i++){
        result *=i;
    }
    return result
}
console.log(factorial(5));
// 2-Check if a number is prime.
function isPrime(n){
    if(n<2) return false

    for(let i=2;i<= Math.sqrt(n);i++){
        if(n%i===0) return false
    }
    return true
}
console.log(isPrime(13));
console.log(isPrime(16));
// 3-Generate Fibonacci series up to n terms.
function fibonacci(n){
   if(n<=0) return "Enter a positive number"

   let fibSeries = [0,1]

   for(let i=2;i<n;i++){
    fibSeries.push(fibSeries[i-1]+ fibSeries[i-2])
   }
   return fibSeries.slice(0,n)
}
console.log(fibonacci(10));
// 4-Check if a number is an Armstrong number.
function isArmstrong(num){
    let sum = 0;
    let digits = num.toString().split('')
    let power = digits.length

    for(let digit of digits){
        sum += Math.pow(Number(digit),power)
    }
    return sum === num;
}
console.log(isArmstrong(153));
// 5-Find the sum of digits until a single digit is obtained.
function sumUntilSingleDigit(num){
    while(num>=10){
        let sum = 0;
        while(num>0){
            sum += num%10;
            num = Math.floor(num/10)
        }
        num = sum;
    }
    return num;
}

// OR
function digitalRoot(num) {
    return num === 0 ? 0 : 1 + (num - 1) % 9;
}

console.log(digitalRoot(9875))

// 6-Count the number of digits in a number.
function countDigits(num){
    return num.toString().length;
}
console.log(countDigits(9875));
console.log(countDigits(75));
// 7-Reverse the digits of a number.
function reverseNumber(num){
    let reverse = num.toString().split('').reverse().join('')
    return Math.sign(num)*parseInt(reverse)
}
console.log(reverseNumber(1234));
// 8-Find the largest prime factor of a number.

// 9-Convert a number to Roman numerals.
function intToRoman(num) {
    const romanMap = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    for (const { value, symbol } of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

console.log(intToRoman(58));  
console.log(intToRoman(1994));  
console.log(intToRoman(2024));  

// 10-Check if a number is a palindrome.
function isPalindrome(num){
    if(num<0) return false 

    let strNum = num.toString()
    let reverseStr = strNum.split('').reverse().join('')

    return strNum = reverseStr
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
// Find the GCD of an array of numbers.

// Find the LCM of an array of numbers.

// Convert a decimal number to hexadecimal.

// Convert a hexadecimal number to decimal.

// Check if a number is a power of 2.

// Find the sum of the first n natural numbers.

// Find the sum of all prime numbers up to n.

// Check if a number is perfect, deficient, or abundant.

// Generate a random prime number within a range.

// Generate a random odd number within a range.
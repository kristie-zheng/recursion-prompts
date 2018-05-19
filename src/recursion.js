/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

//input: a non-negative integer, n
//output: a non-negative integer representing factorial of n
//edge cases: none
//constraints: n must be 0 or positive integer. if negative num, return null
//base case: when n is 1, return 1

//if n is 1
  //return 1
//else
  //return n times the factorial(n-1)
var factorial = function(n) {
  if (n === 0) {
    return 1;
  } else if (n >= 1) {
    return n * factorial(n-1);
  }
  else {
    return null;
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
//input: array of integers
//output: a single integer representing sum of array
//edge cases: empty array should yield 0
//single element should return that element
//constraints: can be positive or negative. must be integer
//base case: when array's length is zero, return 0

//else if array's length is zero
  //return zero
//else 
  //take the first element of the array
  //slice the array's first element out
  //add the first element's value to the result of calling the function recursively on sliced array

var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
};


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
//input: an array of numbers and arrays
//output: a single value representing result of summing all elements
//edge cases: should return 0 for empty array
//constraints: no mutation of input

//create a total variable
//use a for-loop to iterate over the array
//if element is a number
  //add to total
//else if element is another array
  //call the function recursively
//return total
var arraySum = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      total += array[i];
    } else if (Array.isArray(array[i])) {
      total += arraySum(array[i]);
    }
  }
  return total;
};

// 4. Check if a number is even.
//input: an integer (positive or negative)
//output: a boolean representing if number is even
//edge cases: 
//constraints: cannot use modulo 
//base cases: if number is 0, it is even (true). If its one, it's odd (false).

//create a numEven variable
//if n is zero
  //isEven true
//else if n is one
  //isEven false
//else
  //return the result of calling isEven on n-2
  //
//return isEven
var isEven = function(n) {
  var numEven;
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(Math.abs(n)-2);
  }
  return numEven;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//input: an integer (positive or negative)
//output: single integer representing sum of ints between given integer (noninclusive) and zero
//edge case: none
//constraint: must be an integer
//base case: if number is zero, return zero


//if n is zero
  //return zero
//else if n is positive
  //return n-1 + the result of calling sumBelow on n-1
//else
  //return n+1 + the result of calling sumBelow on n+1
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return n-1 + sumBelow(n-1);
  } else {
    return n+1 + sumBelow(n+1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var integersInRange = [];
  if (x === y || x+1 === y || x === y+1) {
    return integersInRange;
  } else if (x < y) {
    integersInRange.push(x+1);
    return integersInRange.concat(range(x+1, y));
  } else {
    integersInRange.push(x-1);
    return integersInRange.concat(range(x-1, y));
  }
};


//inputs: a smaller and a larger integer (negative or positive)
//outputs: an array of integers between x and y (noninclusive)
//edge case: if x and y are the same, return an empty array
//should go backward if x ys larger than y
//constraints: none
//base case: when x equals y, or x and y are 1 apart, return the storage array

//set integersInRange variable 
//if x === y
  //return integersInRange
//else if x < y
  //push the value of x into the array
  //concat the result array with the result of calling the range function on x+1, y
//else if x > y
  //push the value of y into the array
  //concat the result array with the result of calling the range function on x-1, y

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp > 0) {
    return base * exponent(base, exp-1);
  } else {
    return 1 / base * exponent(base, exp+1);
  }
};

//input: a number representing the base and a number representing the expoenent
//output: a number representing the base multiplied by itself exponent number of times
//constraints: none
//edge cases: none
//base case; when exponent is equal to zero, return 1

//if exponent is equal to zero
  //return 1
//else
  //return base result of calling function with exp-1

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1 || n === 2) {
    return true;
  } else if (n > 2) {
    return powerOfTwo(n/2);
  } else if (n < 2) {
    return false;
  }
};
//input: a number
//output: a boolean that represents if a number is a power of two
//edge cases: none
//constraints: none
//base case: if n is 1, return true

//a power of two is when 2^x (1, 2, 4, 8, 16, 32)
//if n is 1 or 2  
  //return true
//else if n is greater than 2
  //return result of calling powerOfTwo on n/2
//else if n < 2
  //return false


// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  } else {
    return string[string.length-1] + reverse(string.slice(0, string.length-1));
  }
};

//input: a string
//output: a reversed version of a string
//edge cases: empty string should return empty
//constraints: cannot use native reverse method
//base case: when string is empty, return ''

//if string.length === 0
  //return '';
//else
  //return result of last letter + calling reverse on string with last letter sliced off

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length === 1 || string.length === 0) {
    return true;
  } else if (string[0] === string[string.length-1]) {
    string = string.slice(1, string.length-1);
    return palindrome(string);
  } else {
    return false;
  }
};
//input: a string
//output: a boolean representing if string is palindrome
//edge cases: single letter should return true
//constraints: no use of native reverse; ignores capital letters and spaces
//base case: when string is length one, return true

//if string.length === 1 or string.length === 0 (for even numbered lengths)
  //return true
//else if string[0] === string[string.length -1] is true
  //return result of calling palindrome on str with first and last letters sliced off
//else
  //return false


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0){
    return NaN;
  } else if (x === y || x === 0) {
    return 0;
  } 
  if (x < y) {
    return x;
  }
  if (x > 0 && y > 0) {
    if (x < y) {
      return x;
    } else {
      return modulo(x-y, y);
    }
  } else if (x < 0 && y < 0) {
    if (x > y) {
      return x + y;
    } else {
      return modulo(x-y, y);
    }
  }
  else if (x > 0 && y < 0) {
    if (x < y) {
      return x;
    } else {
      return modulo(x+y, y);
    }
  } else if (x < 0 && y > 0) {
    if (x < y) {
      return x;
    } else {
      return modulo(x+y, y)
    }
  }
};
//input: two numeric values
//output: a single value representing the remainder of x/y
//edge cases: anything divide by zero should be NaN
//if y is greater than x, return y
//constraints: no native modulo, math methods, multiplication or division
//base case: if x === y return 0

//if y = 0
  //return NaN
//else if x is equal to y (or x is zero)
  //return 0
//else if x is less than y
  //return x
//if both are positive
    //subtract y from x and pass the new arg to modulo function
    //the base case is when x is less than y
      //return x
//else if both are negative
    //subtract y from x and pass the new arg to the modulo function
    //the base case is when x is greater than y
      //return x + y
//else if x is negative and y is positive
  //add y to x and pass the new arg to the modulo function
   //the base case is when x is greater than y
      //return x + y
//else if x is positive and y is negative
  //add y to x and pass the new arg to the modulo function
  //the base case is when x is less than y
    //return x



// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } 
  else if (x > 0 && y > 0) {
    return x + multiply(x, y-1);
  } 
  else if (x < 0 && y < 0) {
    return x - multiply(x, y+1);
  }
  else if (x > 0 || y > 0) {
    //do something
  }
};
//input: two numbers, x and y
//output: the result of multiplying x by y
//edge cases: if there are negatives or decimals
//constraints: no use of any math methods
//base case: when y reaches zero, return the product

//if y equals 0
  //return 0
//else if both x and y are positive
  //return x + the result of calling multiply on y-1
//else if both x and y are negative
  //
//else if one is positive or the other is

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
 if (str1.length === 0 && str2.length === 0) {
  return true;
 } else if (str1[0] !== str2[0]) {
  return false;
 } else {
  str1 = str1.slice(1);
  str2 = str2.slice(1);
  return compareStr(str1, str2);
 }
};
//input: two strings
//output: boolean representing if they're identical
//constraints: none
//edge cases: empty strings are identical
//base case: if empty strings, return true

//if str1 and str2.length === 0
  //return true
//else if str1.length !== str2.length
  //return false (did not pass test case because this shortcut skips the recursion :p)
//else if str1 at index zero !== str2 at index zero
  //return false
//else
  //slice both strings
  //pass the shortened strings into compareStr

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var resultArray = [];
  if (str.length === 0){
    return resultArray;
  } else {
  resultArray.push(str[0]);
  str = str.slice(1);
  return resultArray.concat(createArray(str));
  }
};
//input: string
//output: an array where each char of the string occupies an index
//edge cases: empty string would yield empty array
//constraints: none
//base case: when string has length of zero

//declare a results array
//if string has length of zero
  //return resultArray
//push string at index zero into that array
//slice the string
//return the result of concatenating the result array to the array made by calling createArray on the sliced str

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var reversedArray = [];
  if (array.length === 0) {
    return reversedArray;
  } else {
    reversedArray.push(array[array.length-1]);
    array = array.slice(0, array.length-1);
    return reversedArray.concat(reverseArr(array));
  }
};

//input: an array
//output: a reversed version of the array
//constraints: none
//edge cases: none
//base case: if array is empty, return empty reversedArray variable

//create a reversedArray []
//if the array.length is 0 
  //return reversedArray
//else
  //push array at last index (array[array.length-1]) into the reversedArray
  //slice out last index
  //return reversedArray concatenated with result of calling that function on the sliced array

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var storageArray = [];
  if (length === 0) {
    return storageArray;
  } else {
    storageArray.push(value);
    return storageArray.concat(buildList(value, length-1));
  }
};
//input: a value (char, num, etc) and the intended length of the generated array
//output: an array with a value repeated length number of times
//edge cases: if length is zero, return empty array
//constraints: none
//base case: when length is zero, return storageArray

//create a storageArray variable
//if length === 0
  //return storageArray
//else
  //push value into array
  //concatenate the storageArray with the result of calling function with length-1


// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var results = [];
  if (n === 0) {
    return results;
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      results.push('FizzBuzz');
    } else if (n % 3 === 0) {
      results.push('Fizz');
    } else if (n % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(String(n));
    }
    return fizzBuzz(n-1).concat(results);
  }
};
//input: an integer
//output: an array of strings of numbers or chars based on the divisions
//constraints: none
//edge cases: none
//base case: when n is zero, return the empty storage array

//create a results array
//if n is zero
  //return the results array
//else
  //if n is divisible by three and five
    //push 'fizzbuzz' into the array
  //else if n is divisible by three
    //push 'fizz' into the array
  //else if n is divisible by five
    //push 'buzz' into the array
  //else
    //push String(n) into the array
  //concat the result of calling the function on n-1 with the results array

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};


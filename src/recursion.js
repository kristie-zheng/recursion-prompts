/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1))
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      total += array[i];
    } else {
      total += arraySum(array[i]);
    }
  }
  return total;
};

// 4. Check if a number is even.
var isEven = function(n) {
  var even;
  if (n === 0) {
    even = true;
  } else if (n === -1 || n === 1) {
    even = false;
  } else {
    if (n > 0) {
      even = isEven(n - 2);
    } else {
      even = isEven(n + 2);
    }
  }
  return even;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return n - 1 + sumBelow(n-1);
  } else {
    return n + 1 + sumBelow (n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  //three scenarios
  //a normal range (positive)
  //a range where the numbers are consecutive or the same (there are no values w/in range)
  //a range where the second number is smaller than the first (counts backward)
  var result = [];
  if (y - x === 0 || y - x === 1) {
    return result;
  }
  if (Math.abs(y - x) === 2) {
    if (y - x === 2) {
    return [x + 1];
    } else {
      return [x - 1];
    }
  } else {
    if (y - x > 2) {
    result.push(y - 1);
    return range(x, y -1).concat(result);
    } else if (y - x < 0) {
    result.push(x - 1);
    return result.concat(range(x - 1, y));
    } 
  }
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  var total = 1;
  if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    //negative exponent
    total /= base;
    return total /= exponent(base, exp + 1);
  } else {
    //case when exp is positive
    total *= base;
    return total *= exponent(base, exp -1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 2 || n === 1) {
    return true;
  } else if (n < 2) {
    // if n is less than 2 once divided
    return false
  } else if (n > 2) {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var revStr = '';
  if (string === '') {
    return '';
  } else {
    revStr+= string[string.length - 1];
    revStr += reverse(string.slice(0, string.length - 1));
  }
  return revStr;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var isPal;
  if (string === '' || string.length === 1) {
    return isPal = true;
  } else {
    if (string[0] !== string[string.length - 1]) {
      isPal = false;
      return isPal;
    } else {
      return isPal = palindrome(string.slice(1, string.length));
    }
  }
  return isPal;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

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
  var identical;
  if (str1 === '' && str2 === '') {
    identical = true;
  } else if (str1[0] !== str2[0]) {
    identical = false;
  } else {
    identical = compareStr(str1.slice(1), str2.slice(1));
  }
  return identical;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var letters = [];
  if (str === '') {
    return [];
  } else {
    letters.push(str[0]);
    return letters.concat(createArray(str.slice(1)));
  }
  return letters;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var reversedArr = [];
  if (array.length === 0) {
    return [];
  } else {
    reversedArr.push(array[array.length-1]);
    return reversedArr.concat(reverseArr(array.slice(0, array.length - 1)));
  }
  return reversedArr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var newArr = [];
  if (length === 0) {
    return [];
  } else {
    newArr.push(value);
    return newArr.concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var fbVals = [];
  if (n === 0) {
    return [];
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      fbVals.push('FizzBuzz');
    } else if (n % 3 === 0) {
      fbVals.push('Fizz');
    } else if (n % 5 === 0) {
      fbVals.push('Buzz');
    } else {
      fbVals.push(String(n));
    }
    return fizzBuzz(n-1).concat(fbVals);
  }
  return fbVals;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if (array.length === 0) {
    return 0;
  } else {
    if (array[0] === value) {
      count++;
    }
    return count + countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var prop in obj) {
    if (prop === key) {
      count++;
    }
    if (typeof obj[prop] === 'object') {
      count += countKeysInObj(obj[prop], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var prop in obj) {
    if (obj[prop] === value) {
      count++;
    } else if (typeof obj[prop] === 'object') {
      count += countValuesInObj(obj[prop], value);
    }
  }
return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  // for (var prop in obj) {
  //   if (prop === oldKey) {
  //     obj[newKey] = obj[oldKey];
  //     delete obj[oldKey];
  //   } else if (typeof obj[oldKey] === 'object') {
  //     return replaceKeysInObj(obj[oldKey], oldKey, newKey);
  //   }
  // }
  // return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var capped = [];
  if (array.length === 0) {
    return [];
  } else {
    capped.push(array[0].toUpperCase());
    return capped.concat(capitalizeWords(array.slice(1)));
  }
  return capped;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var str;
  var cap = [];
  if (array.length === 0) {
    return [];
  } else {
    str = array[0];
    str = str[0].toUpperCase() + str.slice(1);
    cap.push(str);
    return cap.concat(capitalizeFirst(array.slice(1)));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var evenSum = 0;
  for (var key in obj) {
    if (obj[key] % 2 === 0){
      evenSum += obj[key];
    } else if (typeof obj[key] === 'object') {
      evenSum += nestedEvenSum(obj[key]);
    }
  }
  return evenSum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  // var flatArray = [];
  // for (var i = 0; i < array.length; i++) {
  //   if (Array.isArray(array[i]) === false) {
  //     flatArray.push(array[i]);
  //   } else if (Array.isArray(array[i]) === true) {
  //     flatArray.concat(flatten(array[i])) ;
  //   }
  // }
  // return flatArray;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if(!obj) {
    obj = {};
  }
  var firstChar = str[0];
  if (str === '') {
    return obj;
  }
  if (obj[firstChar] === undefined) {
    obj[firstChar] = 1;
  } else {
    obj[firstChar]++;
  }
  letterTally(str.slice(1), obj);
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};

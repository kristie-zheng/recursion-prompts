// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var mappedArray = [];
  if (array.length === 0) {
    return mappedArray;
  } else {
    mappedArray.push(callback(array[0]));
    array = array.slice(1);
    return mappedArray.concat(rMap(array, callback));
  }
};
//input: an array and a callback function
//output: a new array that has been transformed by the callback function
//edge cases: none (presuming a callback is always given)
//constraints: must return a new array
//base case: if array is empty, return the new array

//create mappedArray variable
//if array.length is zero
  //return mappedArray
//else
  // push the element at array[0] after applying the callback to it
  // slice array's first index off
  //concat the mappedArray with the result of calling rMap on the sliced array


// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var property in obj) {
    if (property === key) {
      count++;
    }
    if (typeof obj[property] === 'object') {
      count += countKeysInObj(obj[property], key);
    }
  }
  return count;
};

//input; an object and a target key
//output: an integer representing the number of times the key exists in the object
//constraints: none
//edge cases: none
//base case: when the value is not another object

//create a count variable
//use for-in loop to iterate over the object
  //if property is === target key
    //increment count
  //if typeof value is an object
    //call countKeysInObj on that value
//return count

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var property in obj) {
    if (obj[property] === value) {
      count++;
    } else if (typeof obj[property] === 'object') {
      count += countValuesInObj(obj[property], value);
    }
  }
  return count;
};

//input: an object and a target value 
//output: a integer representing the number of times the value exists in the object
//edge cases: none
//constraints: none
//base case: when the value of the key-value pair is not another object

//create a count variable
//use a for-in loop to iterate over object's outer layer
  //if the value obj[property] equals the target value
    //increment count
  //else if the value obj[property] is an object
    //add count to the result of calling countVals... on that obj
//return count

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var property in obj) {
    if (property === oldKey) {
      obj[newKey] = obj[property];
      delete obj[property];
    } else if (typeof obj[property] === 'object') {
      replaceKeysInObj(obj[property], oldKey, newKey);
    }
  }
  return obj;
};

//input: an object, a target key, and a new key to replace the target key
//output: the same object, mutated with new keys
//constraints: new key and old key should be different
//edge cases: if new key is the same as old key, or if old key doesn't exist in object, return nonmutated obj
//base case: when the value is not another object

//use for-in loop to iterate over obj
  //if the obj[property] === oldKey
    //add a new key-val pair with that new key and the same value
    //remove the old key-value pair
//else if the obj[property] is an object
  //apply the function to this value
//return obj

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var fibonacciNums = [0, 1];
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return fibonacciNums;
  } else {
    fibonacciNums.push(fibonacciNums[n-1] + fibonacciNums[n-2]);
    return fibonacciNums.concat(fibonacci(n-1));
  }
};
//input: an integer n
//output: an array of the first n fibonacci numbers (noninclusive of zero)
//edge cases: none
//constraints: no negative inputs or zero: will return null
//base case: when n is 1, return [0, 1]

//declare a fibonacci array with [0, 1]
//if n is 1
  //return array
//else
  //sum two previous array numbers array[n-1] and array[n-2] 
  //push the sum into the array
//return array + result of calling fibonacci with n-1 

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
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
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
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
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

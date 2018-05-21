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
  var capitals = [];
  if (array.length === 0){
    return capitals;
  } else {
    capitals.push(array[0].toUpperCase());
    array = array.slice(1);
    return capitals.concat(capitalizeWords(array));
  }
};

//input: an array of strings 
//output: an array of capitalized strings
//edge cases: none
//constraints: none
//base case: if the array is empty, return the results array

//create a capitals array
//if array length is zero
  //return capitals
//else
  //push uppercase array[0] into array
  //slice array
  //return capitals array concat with result of calling the function on sliced array

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var capWords = [];
  if (array.length === 0) {
    return capWords;
  } else {
    capWords.push(array[0][0].toUpperCase() + array[0].slice(1));
    array = array.slice(1);
    return capWords.concat(capitalizeFirst(array));
  }
};

//input: an array of strings 
//output: an array of capitalized strings
//edge cases: none
//constraints: none
//base case: if the array is empty, return the results array

//create a capitals array
//if array length is zero
  //return capitals
//else
  //push uppercase array[0][0] + array[0].slice(1) (capital first letter and remainder of word) into array
  //slice array
  //return capitals array concat with result of calling the function on sliced array

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
  var sum = 0;
  for (var property in obj) {
    if (typeof obj[property] === 'number' && obj[property] % 2 ===0) {
      sum += obj[property];
    } else if (typeof obj[property] === 'object') {
      sum += nestedEvenSum(obj[property]);
    }
  }
  return sum;
};
//input: an object with some values and some nested objs
//output: a number representing sum of even numbered values
//constraints: none
//edge cases: none
//base case: when an object's value is no longer more objects

//create a sum variable
//for in loop to iterate over object
  //if obj[property] is even
    //add this value to the sum
  //else if its type is object
    //call function
//return sum

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      results.push(array[i]);
    } else {
      results = results.concat(flatten(array[i]));
    }
  }
  return results;
};

//input: an array of arrays
//output: a single-layer array
//constraints: none
//edge cases: none
//base case: if array no longer contains further arrays

//create results array
//use for loop to iterate over teh array
  //if typeof the element is not another array
    //push into results
  //else 
    //call function on that element
//return results


// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str) {
  var obj = {};
  if (str.length === 0) {
    return obj;
  } else {
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1; 
    } else if (obj[str[0]] !== undefined) {
      obj[str[0]]++;
    }
    str = str.slice(1);
    return Object.assign(obj, letterTally(str));
  }
};
//input: a string an and object to hold tally
//output: an object with letters as the keys and count of each letter's occurrence as value
//constraints: none, but presumably the str will be letters
//edge cases: none
//base case: when str length is zero, return obj

//if str length is zero
  //return obj
//else
  //if str[0] does not exist as key in object
    //add it and set value to one
  //else it already exists
    //increment value
//slice str
//return obj assigned with the key-val pairs of the objs created by calling the function on the sliced str

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var compressedArray = [];
  if (list.length === 0) {
    return compressedArray;
  } else {
    var previousValue = list[0];
    list = list.slice(1);
    var currentValue = list[0];
    if (currentValue !== previousValue) {
      compressedArray.push(previousValue);
    }
    return compressedArray.concat(compress(list));
  }
};

//input: an array (non-nested)
//output: an array with all consecutive duplicate elements reduced to a single
//constraints: must generate new array
//edge cases: none
//base case: when the array's length is zero, return the new array

//create a results array
//if array's length is zero
  //return results
//else 
  //create variable for previousValue array[0]
  //slice the first index out
  //create a second variable for currentValue array[0]
    //if current value is not the same as previous value
      //push currentValue into compressed array
  //return results concat with calling compress on sliced array


// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var augmentedArray = [];
  if (array.length === 0) {
    return augmentedArray;
  } else {
    array[0].push(aug);
    augmentedArray.push(array[0]);
    array = array.slice(1);
    return augmentedArray.concat(augmentElements(array, aug));
  }
};

//input: a nested array and a value to add to each element's array
//output: a nested array with the augmenter added to each element's array
//edge cases: none
//constraints: none
//base case: if 

//create a results array variable
//if array.length is zero
  //return results
//else
  //push the augmenter into array[0]'s array
  //push array[0] into results
  //slice off first value of the array
  //return results array concat with calling augment elements on newly sliced array

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var results = [];
  if (array.length === 0) {
    return results;
  } else {
    var previousElement = array[0];
    array = array.slice(1);
    var currentElement = array[0];
    if (previousElement !== 0) {
      results.push(previousElement);
    } else if (previousElement === 0 && currentElement === 0) {
      results.push(currentElement);
    } else if (previousElement === 0 && currentElement !== 0) {
      results.push(currentElement);
    }
    array = array.slice(1);
    return results.concat(minimizeZeroes(array));
  }
};
//input: an array
//output: an array with any consecutive zeros collapsed to a single zero
//constraints: none
//edge cases: none
//base case: if array has length of zero, return result array

//create results array
//if array.length === 0
  //return results array
//else
  //create var for previousElement array[0]
  //slice off the first element
  //create var for currentElement array[0]
  //if previous element is not zero
    //push previous
  //else if previous element is zero and current element is not zero
    //push previous
  //slice first elemnet of array out
//return results concat with minimizeZero on sliced array


// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

//input: an array of positive and negative numbers
//output: a new array of the same numbers but with alternating signs
//constraints: first number is positive regardless of original sign
//edge cases: none
//base case: if the array has a length of zero, return new array

//create results array
//if the array's length is zero
  //return results
//else
  //check if the previous element's sign was negative or positive
  //push the opposite of the current element into the results array

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

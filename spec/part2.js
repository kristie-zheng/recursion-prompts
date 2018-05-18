/* jshint esversion: 6 */

(function() {
  'use strict';

  describe('More Exercises in Recursion', function() {
 describe('21. Recursive Map', function() {
      var originalRMap, timesTwo, input, result;

      before(function() {
        originalRMap = rMap;
        rMap = sinon.spy(rMap);
        timesTwo = function(n) { return n * 2; };
      });

      beforeEach(function() {
        input = [1,2,3,4,5];
      });

      afterEach(function() {
        rMap.reset();
      });

      after(function() {
        rMap = originalRMap;
      });

      it('should return an array', function() {
        expect(rMap(input, timesTwo)).to.be.an('array');
      });

      it('should not use the native version of map', function() {
        // Spying on Array.prototype.map in testSupport.js
        rMap(input, timesTwo);
        expect(Array.prototype.map.called).to.be.false;
      });

      it('should return new array without mutating the input array', function() {
        result = rMap(input, num => num);
        expect(input).to.eql([1,2,3,4,5]);
        // should deeply equal input
        expect(result).to.eql(input);
        // should not be same array in memory
        expect(result).to.not.equal(input);
      });

      it('should apply a function to every value in an array', function() {
        result = rMap([1,2,3], timesTwo);
        expect(result).to.eql([2,4,6]);
      });

      it('should use recursion by calling self', function() {
        rMap([1,2,3,4], timesTwo);
        expect(rMap.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        rMap([1,2,3,4], timesTwo);
        rMap.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('22. Count key in object', function() {
      var originalCountKeysInObj, input;

      before(function() {
        originalCountKeysInObj = countKeysInObj;
        countKeysInObj = sinon.spy(countKeysInObj);
        input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
      });

      afterEach(function() {
        countKeysInObj.reset();
      });

      after(function() {
        countKeysInObj = originalCountKeysInObj;
      });

      it('should return a number', function() {
        expect(countKeysInObj(input, 'r')).to.be.a('number');
      });

      it('should return the number of occurrences of the property', function() {
        expect(countKeysInObj(input, 'e')).to.equal(2);
        expect(countKeysInObj(input, 'x')).to.equal(1);
        expect(countKeysInObj(input, 'y')).to.equal(2);
        expect(countKeysInObj(input, 't')).to.equal(1);
        expect(countKeysInObj(input, 'r')).to.equal(1);
        expect(countKeysInObj(input, 'p')).to.equal(1);
      });

      it('should use recursion by calling self', function() {
        countKeysInObj(input, 'e');
        expect(countKeysInObj.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        countKeysInObj(input, 'e');
        countKeysInObj.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('23. Count value in object', function() {
      var originalCountValuesInObj, input;

      before(function() {
        originalCountValuesInObj = countValuesInObj;
        countValuesInObj = sinon.spy(countValuesInObj);
        input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
      });

      afterEach(function() {
        countValuesInObj.reset();
      });

      after(function() {
        countValuesInObj = originalCountValuesInObj;
      });

      it('should return a number', function() {
        expect(countValuesInObj(input, 'r')).to.be.a('number');
      });

      it('should return the count of the occurrences of the property', function() {
        expect(countValuesInObj(input, 'e')).to.equal(1);
        expect(countValuesInObj(input, 'x')).to.equal(0);
        expect(countValuesInObj(input, 'y')).to.equal(1);
        expect(countValuesInObj(input, 't')).to.equal(0);
        expect(countValuesInObj(input, 'r')).to.equal(2);
        expect(countValuesInObj(input, 'p')).to.equal(0);
      });

      it('should use recursion by calling self', function() {
        countValuesInObj(input, 'r');
        expect(countValuesInObj.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        countValuesInObj(input, 'r');
        countValuesInObj.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('24. Replace keys in object', function() {
      var originalReplaceKeysInObj, input, output;

      before(function() {
        originalReplaceKeysInObj = replaceKeysInObj;
        replaceKeysInObj = sinon.spy(replaceKeysInObj);
      });

      beforeEach(function() {
        input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
      });

      afterEach(function() {
        replaceKeysInObj.reset();
      });

      after(function() {
        replaceKeysInObj = originalReplaceKeysInObj;
      });

      it('should return an object', function() {
        output = replaceKeysInObj(input, 'r', 'a');
        expect(output).to.be.an('object');
      });

      it('should mutate the input object', function() {
        output = replaceKeysInObj(input, 'y', 'u');
        expect(input).to.equal(output);
      });

      it('should return object containing renamed keys', function() {
        replaceKeysInObj(input, 'e', 'f');

        expect(input).to.have.all.keys('f','t','y');
        expect(input.f).to.be.an('object');
        expect(input.f).to.have.all.keys('x');

        expect(input.f.x).to.be.a('string');
        expect(input.f.x).to.equal('y');

        expect(input.t).to.be.an('object');
        expect(input.t).to.have.all.keys('r','p');

        expect(input.t.r).to.be.an('object');
        expect(input.t.r).to.have.all.keys('f');
        expect(input.t.r.f).to.be.a('string');
        expect(input.t.r.f).to.equal('r');

        expect(input.t.p).to.be.an('object');
        expect(input.t.p).to.have.all.keys('y');
        expect(input.t.p.y).to.be.a('string');
        expect(input.t.p.y).to.equal('r');

        expect(input.y).to.be.a('string');
        expect(input.y).to.equal('e');

        expect(input).to.not.have.ownProperty('e');
        expect(input.t.r).to.not.have.ownProperty('e');
      });

      it('should return object with same number of keys', function() {
        expect(analyze(input)).to.equal(8);
        output = replaceKeysInObj(input, 'e', 'f');
        expect(analyze(output)).to.equal(8);
      });

      it('should use recursion by calling self', function() {
        replaceKeysInObj(input, 'r', 'a');
        expect(replaceKeysInObj.callCount).to.be.above(1);
      });

      it('should be invoked with three arguments', function() {
        replaceKeysInObj(input, 'r', 'a');
        replaceKeysInObj.args.forEach(arg => {
          expect(arg).to.have.length(3);
        });
      });

    });



    describe('25. First n Fibonacci', function() {
      var originalFibonacci;

      before(function() {
        originalFibonacci = fibonacci;
        fibonacci = sinon.spy(fibonacci);
      });

      afterEach(function() {
        fibonacci.reset();
      });

      after(function() {
        fibonacci = originalFibonacci;
      });

      it('should return an array', function() {
        expect(fibonacci(5)).to.be.an('array');
      });

      it('should return first n Fibonacci numbers where n starts at index 1', function() {
        expect(fibonacci(1)).to.eql([0,1]);
        expect(fibonacci(2)).to.eql([0,1,1]);
        expect(fibonacci(3)).to.eql([0,1,1,2]);
        expect(fibonacci(4)).to.eql([0,1,1,2,3]);
        expect(fibonacci(5)).to.eql([0,1,1,2,3,5]);
        expect(fibonacci(8)).to.eql([0,1,1,2,3,5,8,13,21]);
      });

      it('should return null for zero and negative integers', function() {
        expect(fibonacci(0)).to.be.null;
        expect(fibonacci(-7)).to.be.null;
      });

      it('should use recursion by calling self', function() {
        fibonacci(5);
        expect(fibonacci.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        fibonacci(5);
        fibonacci.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('26. Return nth Fibonacci', function() {
      var originalNthFibo;

      before(function() {
        originalNthFibo = nthFibo;
        nthFibo = sinon.spy(nthFibo);
      });

      afterEach(function() {
        nthFibo.reset();
      });

      after(function() {
        nthFibo = originalNthFibo;
      });

      it('should return a number', function() {
        expect(nthFibo(5)).to.be.a('number');
      });

      it('should return the nth nthFibo number', function() {
        expect(nthFibo(0)).to.equal(0);
        expect(nthFibo(1)).to.equal(1);
        expect(nthFibo(2)).to.equal(1);
        expect(nthFibo(3)).to.equal(2);
        expect(nthFibo(4)).to.equal(3);
        expect(nthFibo(5)).to.equal(5);
        expect(nthFibo(8)).to.equal(21);
      });

      it('should return null for negative integers', function() {
        expect(nthFibo(-5)).to.be.null;
        expect(nthFibo(-7)).to.be.null;
      });

      it('should use recursion by calling self', function() {
        nthFibo(5);
        expect(nthFibo.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        nthFibo(5);
        nthFibo.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('27. Capitalize words in array', function() {
      var originalCapitalizeWords;

      before(function() {
        originalCapitalizeWords = capitalizeWords;
        capitalizeWords = sinon.spy(capitalizeWords);
      });

      afterEach(function() {
        capitalizeWords.reset();
      });

      after(function() {
        capitalizeWords = originalCapitalizeWords;
      });

      it('should return an array', function() {
        expect(capitalizeWords(['recursion'])).to.be.an('array');
      });

      it('should capitalize all words in array', function() {
        expect(capitalizeWords(["ceci","n'est","pas","une","pipe"])).to.eql(["CECI", "N'EST", "PAS", "UNE", "PIPE"]);
      });

      it('should use recursion by calling self', function() {
        capitalizeWords(['i','am','learning','recursion']);
        expect(capitalizeWords.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        capitalizeWords(['you','got','this']);
        capitalizeWords.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('28. Capitalize first letter of words in array', function() {
      var originalCapitalizeFirst;

      before(function() {
        originalCapitalizeFirst = capitalizeFirst;
        capitalizeFirst = sinon.spy(capitalizeFirst);
      });

      afterEach(function() {
        capitalizeFirst.reset();
      });

      after(function() {
        capitalizeFirst = originalCapitalizeFirst;
      });

      it('should return an array', function() {
        expect(capitalizeFirst(['recursion'])).to.be.an('array');
      });

      it('should capitalize first letter of each word in array', function() {
        expect(capitalizeFirst(["ceci","n'est","pas","une","pipe"])).to.eql(["Ceci", "N'est", "Pas", "Une", "Pipe"]);
      });

      it('should use recursion by calling self', function() {
        capitalizeFirst(["ceci","n'est","pas","une","pipe"]);
        expect(capitalizeFirst.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        capitalizeFirst(['you','got','this']);
        capitalizeFirst.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('29. Sum even numbers in nested objects', function() {
      var originalNestedEvenSum, input;

      before(function() {
        originalNestedEvenSum = nestedEvenSum;
        nestedEvenSum = sinon.spy(nestedEvenSum);
        input = {
          a: 2,
          b: {b: 2, bb: {b: 3, bb: {b: 2}}},
          c: {c: {c: 2}, cc: 'ball', ccc: 5},
          d: 1,
          e: {e: {e: 2}, ee: 'car'}
        };
      });

      afterEach(function() {
        nestedEvenSum.reset();
      });

      after(function() {
        nestedEvenSum = originalNestedEvenSum;
      });

      it('should return a number', function() {
        expect(nestedEvenSum(input)).to.be.a('number');
      });

      it('should sum even numbers', function() {
        expect(nestedEvenSum(input)).to.equal(10);
      });

      it('should use recursion by calling self', function() {
        nestedEvenSum(input);
        expect(nestedEvenSum.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        nestedEvenSum(input);
        nestedEvenSum.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('30. Flatten nested arrays', function() {
      var originalFlatten;

      before(function() {
        originalFlatten = flatten;
        flatten = sinon.spy(flatten);
      });

      afterEach(function() {
        flatten.reset();
      });

      after(function() {
        flatten = originalFlatten;
      });

      it('should return an array', function() {
        expect(flatten([1,[2],[[3]]])).to.be.an('array');
      });

      it('should return flattened array', function() {
        expect(flatten([[1],[2,3],[[4]],5])).to.eql([1,2,3,4,5]);
        expect(flatten([3,[0,[34,[7,[18]]]]])).to.eql([3,0,34,7,18]);
        expect(flatten([[[[[3],0],34],7],18])).to.eql([3,0,34,7,18]);
        expect(flatten([[1],[2,[],3],[],[[4]],5])).to.eql([1,2,3,4,5]);
      });

      it('should use recursion by calling self', function() {
        flatten([3,[0,[34]]]);
        expect(flatten.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        flatten([3,[0,[34]]]);
        flatten.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('31. Tally letters in string', function() {
      var originalLetterTally;

      before(function() {
        originalLetterTally = letterTally;
        letterTally = sinon.spy(letterTally);
      });

      afterEach(function() {
        letterTally.reset();
      });

      after(function() {
        letterTally = originalLetterTally;
      });

      it('should return an object', function() {
        expect(letterTally('orangutan')).to.be.an('object');
      });

      it('should return object containing tallies of unique letters', function() {
        var output = letterTally('potato');

        expect(output.p).to.equal(1);
        expect(output.o).to.equal(2);
        expect(output.t).to.equal(2);
        expect(output.a).to.equal(1);
      });

      it('should return object containing the number of keys corresponding to unique letters', function() {
        var output = letterTally('mississippi');
        var keyCount = Object.keys(output).length;
        expect(keyCount).to.equal(4);
      });

      it('should use recursion by calling self', function() {
        letterTally('invasion');
        expect(letterTally.callCount).to.be.above(1);
      });

      it('should be invoked with at most two arguments', function() {
        letterTally('invasion');
        letterTally.args.forEach(arg => {
          expect(arg).to.have.length.of.at.most(2);
        });
      });

    });



    describe('32. Eliminate consecutive duplicates', function() {
      var originalCompress, input1, input2;

      before(function() {
        originalCompress = compress;
        compress = sinon.spy(compress);
        input1 = [1,2,2,3,4,4,5,5,5];
        input2 = [1,2,2,3,4,4,2,5,5,5,4,4];
      });

      afterEach(function() {
        compress.reset();
      });

      after(function() {
        compress = originalCompress;
      });

      it('should return an array', function() {
        expect(compress(input1)).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        var result = compress(input1);
        expect(input1).to.eql([1,2,2,3,4,4,5,5,5]);
        expect(input1).to.not.equal(result);
      });

      it('should remove consecutive duplicates', function() {
        expect(compress(input1)).to.eql([1,2,3,4,5]);
        expect(compress(input2)).to.eql([1,2,3,4,2,5,4]);
      });

      it('should use recursion by calling self', function() {
        compress(input1);
        expect(compress.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        compress(input1);
        compress.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('33. Augment each element in nested arrays', function() {
      var originalAugmentElements;

      before(function() {
        originalAugmentElements = augmentElements;
        augmentElements = sinon.spy(augmentElements);
      });

      afterEach(function() {
        augmentElements.reset();
      });

      after(function() {
        augmentElements = originalAugmentElements;
      });

      it('should return an array', function() {
        expect(augmentElements([[],[3]], 5)).to.be.an('array');
      });

      it('should augment each element with given value', function() {
        expect(augmentElements([[],[3],[7]], 5)).to.eql([[5],[3,5],[7,5]]);
        expect(augmentElements([[],[3],[7]], null)).to.eql([[null],[3,null],[7,null]]);
        expect(augmentElements([[],[3],[7]], '')).to.eql([[''],[3,''],[7,'']]);
        expect(augmentElements([[],[3],[7]], false)).to.eql([[false],[3,false],[7,false]]);
      });

      it('should use recursion by calling self', function() {
        augmentElements([[],[3]], 5);
        expect(augmentElements.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        augmentElements([[],[3]], 5);
        augmentElements.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('34. Minimize zeroes', function() {
      var originalMinimizeZeroes, input1, input2;

      before(function() {
        originalMinimizeZeroes = minimizeZeroes;
        minimizeZeroes = sinon.spy(minimizeZeroes);
      });

      beforeEach(function() {
        input1 = [2,0,0,0,1,4];
        input2 = [2,0,0,0,1,0,0,4];
      });

      afterEach(function() {
        minimizeZeroes.reset();
      });

      after(function() {
        minimizeZeroes = originalMinimizeZeroes;
      });

      it('should return an array', function() {
        expect(minimizeZeroes(input1)).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        expect(minimizeZeroes(input2)).to.not.equal(input2);
      });

      it('should remove excess zeroes', function() {
        expect(minimizeZeroes(input1)).to.eql([2,0,1,4]);
        expect(minimizeZeroes(input2)).to.eql([2,0,1,0,4]);
      });

      it('should use recursion by calling self', function() {
        minimizeZeroes(input1);
        expect(minimizeZeroes.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        minimizeZeroes(input2);
        minimizeZeroes.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('35. Alternate sign', function() {
      var originalAlternateSign, input1, input2;

      before(function() {
        originalAlternateSign = alternateSign;
        alternateSign = sinon.spy(alternateSign);
      });

      beforeEach(function() {
        input1 = [2,7,8,3,1,4];
        input2 = [-2,-7,8,3,-1,4];
      });

      afterEach(function() {
        alternateSign.reset();
      });

      after(function() {
        alternateSign = originalAlternateSign;
      });

      it('should return an array', function() {
        expect(alternateSign(input1)).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        expect(alternateSign(input2)).to.not.equal(input2);
      });

      it('should alternate signs', function() {
        expect(alternateSign(input1)).to.eql([2,-7,8,-3,1,-4]);
        expect(alternateSign(input2)).to.eql([2,-7,8,-3,1,-4]);
      });

      it('should use recursion by calling self', function() {
        alternateSign(input1);
        expect(alternateSign.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        alternateSign(input2);
        alternateSign.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('36. Convert numbers to text', function() {
      var originalNumToText, input1, input2;

      before(function() {
        originalNumToText = numToText;
        numToText = sinon.spy(numToText);
      });

      beforeEach(function() {
        input1 = '5 dogs and 6 ponies';
        input2 = 'Give me 8 dollars';
      });

      afterEach(function() {
        numToText.reset();
      });

      after(function() {
        numToText = originalNumToText;
      });

      it('should return a string', function() {
        expect(numToText(input1)).to.be.a('string');
      });

      it('should convert single digits to their word equivalent', function() {
        expect(numToText(input1)).to.equal('five dogs and six ponies');
        expect(numToText(input2)).to.equal('Give me eight dollars');
      });

      it('should use recursion by calling self', function() {
        numToText(input2);
        expect(numToText.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        numToText(input2);
        numToText.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });
    describe('37. Count Tags', function() {
      var originalTagCount, actualResults, expectedResults, tags, $child, $rootElement;

      before(function() {
        originalTagCount = tagCount;
        tagCount = sinon.spy(tagCount);
        actualResults = [];
        expectedResults = [];
        $rootElement = $('<div id="tagCountTest"><p>beep</p><div><p><span>blip</span></p></div><p>blorp</p></div>');
        $child = $('#mocha');
        $child.remove();
        $('body').append($rootElement);
        tags = document.getElementById('tagCountTest');
      });

      afterEach(function() {
        tagCount.reset();
      });

      after(function() {
        $rootElement.remove();
        $('body').append($child);
        tagCount = originalTagCount;
      });

      it('should return a number', function() {
        actualResults.push(tagCount('p'));
        expectedResults.push(document.getElementsByTagName('p').length);
        expect(actualResults[0]).to.be.a('number');
      });

      it('should return number of times tag occurs', function() {
        actualResults.push(tagCount('div'));
        expectedResults.push(document.getElementsByTagName('div').length);
        expect(actualResults[1]).to.equal(expectedResults[1]);
      });

      it('should support various tag types', function() {
        actualResults.push(tagCount('span'));
        expectedResults.push(document.getElementsByTagName('span').length);
        actualResults.forEach(function(result, i) {
          expect(result).to.equal(expectedResults[i]);
        });
      });

      it('should not require starting node argument', function() {
        tagCount('html');
        expect(tagCount.args[0]).to.have.length(1);
      });

      it('should use recursion by calling self', function() {
        tagCount('p')
        expect(tagCount.callCount).to.be.above(3);
      });

      it('should be invoked with at most two arguments', function() {
        tagCount('p', tags);
        tagCount.args.forEach(arg => {
          expect(arg).to.have.length.of.at.most(2);
        });
      });

    });



    describe('38. Binary Search', function() {
      var originalBinarySearch, input1, input2, input3, input4, input5, primes;

      before(function() {
        originalBinarySearch = binarySearch;
        binarySearch = sinon.spy(binarySearch);
        input1 = [1,2,3,4,5,6];
        input2 = [1,2,3,4,5,6,7];
        input3 = [-5,-4,-3,-2,-1];
        input4 = [-6,-5,-4,-3,-2,-1];
        input5 = [-4,-3,-2,-1,0,1,2,3];
        primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43];
      });

      afterEach(function() {
        binarySearch.reset();
      });

      after(function() {
        binarySearch = originalBinarySearch;
      });

      it('should return a number', function() {
        expect(binarySearch(input1, 3)).to.be.a('number');
      });

      it('should not mutate the input array', function() {
        binarySearch(input1, 4);
        expect(input1).to.eql([1,2,3,4,5,6]);
      });

      it('should return index of target', function() {
        expect(binarySearch(input1, 1)).to.equal(0);
        expect(binarySearch(input1, 2)).to.equal(1);
        expect(binarySearch(input1, 3)).to.equal(2);
        expect(binarySearch(input1, 4)).to.equal(3);
        expect(binarySearch(input1, 5)).to.equal(4);
        expect(binarySearch(input1, 6)).to.equal(5);
        expect(binarySearch(input2, 1)).to.equal(0);
        expect(binarySearch(input2, 2)).to.equal(1);
        expect(binarySearch(input2, 3)).to.equal(2);
        expect(binarySearch(input2, 4)).to.equal(3);
        expect(binarySearch(input2, 5)).to.equal(4);
        expect(binarySearch(input2, 6)).to.equal(5);
        expect(binarySearch(input2, 7)).to.equal(6);
        expect(binarySearch(primes, 2)).to.equal(0);
        expect(binarySearch(primes,19)).to.equal(7);
        expect(binarySearch(primes,41)).to.equal(12);
      });

      it('should support negative numbers', function() {
        expect(binarySearch(input3,-5)).to.equal(0);
        expect(binarySearch(input3,-4)).to.equal(1);
        expect(binarySearch(input3,-3)).to.equal(2);
        expect(binarySearch(input3,-2)).to.equal(3);
        expect(binarySearch(input3,-1)).to.equal(4);
        expect(binarySearch(input4,-6)).to.equal(0);
        expect(binarySearch(input4,-5)).to.equal(1);
        expect(binarySearch(input4,-4)).to.equal(2);
        expect(binarySearch(input4,-3)).to.equal(3);
        expect(binarySearch(input4,-2)).to.equal(4);
        expect(binarySearch(input4,-1)).to.equal(5);
        expect(binarySearch(input5,-2)).to.equal(2);
        expect(binarySearch(input5, 2)).to.equal(6);
      });

      it('should return null if target not found', function() {
        expect(binarySearch(input1,-1)).to.be.null;
        expect(binarySearch(input1, 7)).to.be.null;
        expect(binarySearch(input2,-1)).to.be.null;
        expect(binarySearch(input2, 8)).to.be.null;
        expect(binarySearch(input3,-6)).to.be.null;
        expect(binarySearch(input3, 0)).to.be.null;
        expect(binarySearch(input4,-8)).to.be.null;
        expect(binarySearch(input4, 1)).to.be.null;
        expect(binarySearch(input5,-8)).to.be.null;
        expect(binarySearch(input5, 4)).to.be.null;
        expect(binarySearch(primes,32)).to.be.null;
      });

      it('should use recursion by calling self', function() {
        binarySearch(primes, 3);
        expect(binarySearch.callCount).to.be.above(1);
      });

      it('should be invoked with at most four arguments', function() {
        binarySearch(primes, 4);
        binarySearch.args.forEach(arg => {
          expect(arg).to.have.length.of.at.most(4);
        });
      });

      xit('should be invoked with two arguments', function() {
        binarySearch(primes, 4);
        binarySearch.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('39. Merge Sort', function() {
      var originalMergeSort, numbers, sorted;

      before(function() {
        originalMergeSort = mergeSort;
        mergeSort = sinon.spy(mergeSort);
      });

      beforeEach(function() {
        numbers = [8,2,20,1,15];
      });

      afterEach(function() {
        mergeSort.reset();
      });

      after(function() {
        mergeSort = originalMergeSort;
      });

      it('should return an array', function() {
        sorted = mergeSort(numbers);
        expect(sorted).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        sorted = mergeSort(numbers);
        expect(numbers).to.eql([8,2,20,1,15]);
        expect(numbers).to.not.equal(sorted);
      });

      it('should sort an array of numbers in order of least to greatest', function() {
        expect(mergeSort([])).to.eql([]);
        expect(mergeSort([0])).to.eql([0]);
        expect(mergeSort([1,0])).to.eql([0,1]);
        expect(mergeSort([0,1,2,3])).to.eql([0,1,2,3]);
        expect(mergeSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
        expect(mergeSort([10,1,8,5,0])).to.eql([0,1,5,8,10]);
        expect(mergeSort([8,2,20,1,15])).to.eql([1,2,8,15,20]);
      });

      it('should be able to handle negative numbers', function() {
        expect(mergeSort([-1])).to.eql([-1]);
        expect(mergeSort([0,-1])).to.eql([-1,0]);
        expect(mergeSort([0,1,-2,-3])).to.eql([-3,-2,0,1]);
        expect(mergeSort([8,-2,20,1,-15])).to.eql([-15,-2,1,8,20]);
        expect(mergeSort([0,-1,-2,-3,-4,-5,-10])).to.eql([-10,-5,-4,-3,-2,-1,0]);
      });

      it("should not use the native Array sort method", function() {
        // Spying on Array.prototype.sort in testSupport.js
        mergeSort(numbers);
        expect(Array.prototype.sort.called).to.equal(false);
      });

      it('should use recursion by calling self', function () {
        mergeSort(numbers);
        expect(mergeSort.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        mergeSort(numbers);
        mergeSort.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('40. Clone', function() {
      var originalClone, object1, object2, array1, array2, result;

      before(function() {
        originalClone = clone;
        clone = sinon.spy(clone);
        object1 = {a:1,b:{bb:{bbb:2}},c:3};
        object2 = {a:1,b:['bb',{bbb:[2]}],c:{cc:[3,{ccc:4},5]}};
        array1 = [1,[2,[]],3,[[[4]],5]];
        array2 = [1,[2,{a:[{},2,3]}],{3:[4]},5];
      });

      afterEach(function() {
        clone.reset();
      });

      after(function() {
        clone = originalClone;
      });

      it('should return an object when input is an object', function() {
        result = clone(object1);
        expect(result).to.be.an('object');
        expect(result).to.not.be.an('array');
      });

      it('should return an array when input is an array', function() {
        result = clone(array1);
        expect(result).to.be.an('array');
        expect(result).to.not.be.an('object');
      });

      it('should not mutate the input object or array', function() {
        result = clone(object1);
        expect(object1).to.eql({a:1,b:{bb:{bbb:2}},c:3});
        expect(result).to.not.equal(object1);
        result = clone(array1);
        expect(array1).to.eql([1,[2,[]],3,[[[4]],5]]);
        expect(result).to.not.equal(array1);
      });

      it('should shallow clone objects', function() {
        result = clone(object1);
        expect(result).to.eql(object1);
      });

      it('should shallow clone arrays', function() {
        result = clone(array1);
        expect(result).to.eql(array1);
      });

      it('should deeply clone objects', function() {
        result = clone(object2);
        expect(result).to.eql(object2);
        expect(result.b).to.eql(object2.b);
        expect(result.b).to.not.equal(object2.b);
        expect(result.b[1]).to.eql(object2.b[1]);
        expect(result.b[1]).to.not.equal(object2.b[1]);
        expect(result.b[1].bbb).to.eql(object2.b[1].bbb);
        expect(result.b[1].bbb).to.not.equal(object2.b[1].bbb);
        expect(result.c).to.eql(object2.c);
        expect(result.c).to.not.equal(object2.c);
        expect(result.c.cc).to.eql(object2.c.cc);
        expect(result.c.cc).to.not.equal(object2.c.cc);
        expect(result.c.cc[1]).to.eql(object2.c.cc[1]);
        expect(result.c.cc[1]).to.not.equal(object2.c.cc[1]);
      });

      it('should deeply clone arrays', function() {
        result = clone(array2);
        expect(result).to.eql(array2);
        expect(result[1]).to.eql(array2[1]);
        expect(result[1]).to.not.equal(array2[1]);
        expect(result[1][1]).to.eql(array2[1][1]);
        expect(result[1][1]).to.not.equal(array2[1][1]);
        expect(result[1][1].a).to.eql(array2[1][1].a);
        expect(result[1][1].a).to.not.equal(array2[1][1].a);
        expect(result[1][1].a[0]).to.eql(array2[1][1].a[0]);
        expect(result[1][1].a[0]).to.not.equal(array2[1][1].a);
        expect(result[2]).to.eql(array2[2]);
        expect(result[2]).to.not.equal(array2[2]);
        expect(result[2]['3']).to.eql(array2[2]['3']);
        expect(result[2]['3']).to.not.equal(array2[2]['3']);
      });

      it("should not use native JSON methods or Object.assign", function() {
        // Spying on methods in testSupport.js
        clone(object2);
        clone(array2);
        expect(Object.assign.called).to.be.false;
        expect(JSON.stringify.called).to.be.false;
        expect(JSON.parse.called).to.be.false;
      });

      it('should use recursion by calling self', function () {
        clone(object1);
        expect(clone.callCount).to.be.above(1);
        clone.reset();
        clone(array1);
        expect(clone.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        clone(object1);
        clone.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
        clone.reset();
        clone(array1);
        clone.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });

  });
}());

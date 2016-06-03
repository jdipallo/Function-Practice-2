/* ================================================================*/
function getName(someObj) {
  return someObj.name;
}

console.log("Name: ", getName( { name: 'Luisa', age: 25 } ));
console.log('-------------------------------------');

/* ================================================================*/
function totalLetters(someArray) {
  var totalLength = 0;

  for (var i = 0; i < someArray.length; i++) {
    totalLength += someArray[i].length;
  }
  return totalLength;
}

var arrOfStrings = ['javascript', 'is', 'awesome'];
console.log('Total Length of all characters is: ', totalLetters(arrOfStrings));
arrOfStrings = ['what', 'happened', 'to', 'my', 'function'];
console.log('Total Length of all characters is: ', totalLetters(arrOfStrings));
console.log('-------------------------------------');

/* ================================================================*/
function keyValue(key, value) {
  var obj = {};
  obj[key] = value;
  return obj;
}

console.log('Printing Object: ', keyValue('city', 'Denver'));
console.log('-------------------------------------');

/* ================================================================*/
function negativeIndex(someArray, negativeIndex) {
  return someArray[someArray.length + negativeIndex];
}

console.log('Negative Index: ', negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log('Negative Index: ',negativeIndex(['jerry', 'sarah', 'sally'], -1));
console.log('-------------------------------------');

/* ================================================================*/
function removeM(someString) {
  return someString.replace(/m/g, '');
}
console.log('family becomes: ', removeM('family'));
console.log('memory becomes: ', removeM('memory'));
console.log('-------------------------------------');

/* ================================================================*/
function printObject(someObject) {
  for (key in someObject) {
    console.log(key, 'is', someObject[key]);
  }
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });
console.log('-------------------------------------');

/* ================================================================*/
function vowels(someString) {
  var arrayOfVowels = [];

  for (var i = 0; i < someString.length; i++) {
    if (isCharVowel(someString[i])) {
      arrayOfVowels.push(someString[i]);
    } 
  }
  return arrayOfVowels;
}

function isCharVowel(aChar) {
  return 'aeiou'.indexOf(aChar.toLowerCase()) != -1;
}

var str1 = 'alabama';
var str2 = 'What evil odd ducks!';
console.log('The vowels in', str1, ':', vowels(str1));
console.log('The vowels in', str2, ':', vowels(str2));
console.log('-------------------------------------');

/* ================================================================*/
// iterate by 2 to compare [0] and [1], then [2] and [3] and so on...
function twins(someArray) {
  for (var i = 0; i < someArray.length; i += 2) {
    if ((someArray[i] != someArray[i+1])    // check this one and the next
      || (!someArray[i])) {                  // check for undefined
      return false;
    }
  }
  return true;
}

var arr1 = ['a', 'a', 'b', 'b', 'c', 'c'];
var arr2 = ['a', 'a', 'b', 'c', 'd', 'd'];
var arr3 = ['a', 'a', 'b', 'z'];
var arr4 = ['a', 'a', 'f', 'f', undefined, 'z'];

console.log("Are we twins? ", arr1, twins(arr1));
console.log("Are we twins? ", arr2, twins(arr2));
console.log("Are we twins? ", arr3, twins(arr3));
console.log("Are we twins? ", arr4, twins(arr4));
console.log('-------------------------------------');

/* ================================================================*/
function or(arrayOfBools) {
  if (arrayOfBools.length == 0) {
    return false;
  }

  // otherwise loop through array checking for bool values
  var len = arrayOfBools.length;
  var i = 0;      // our array index

  // lets use a faster way to iterate through the loop!
  while (len--) {
    if (arrayOfBools[i] === true) {
      return true;
    }
    i++;
  }  
  return false;
}

var arrOfBools = [false, false, true, false];
var arrOfBools2 = [false, false, false];
var arrOfBools3 = [];

console.log("Any true values?", arrOfBools, or(arrOfBools));
console.log("Any true values?", arrOfBools2, or(arrOfBools2));
console.log("Any true values?", arrOfBools3, or(arrOfBools3));
console.log('-------------------------------------');

/* ================================================================*/
function unique(someArr) {
  var uniqueArray = [];

  for (var i = 0; i < someArr.length; i++) {
    if (uniqueArray.indexOf(someArr[i]) === -1) {
      uniqueArray.push(someArr[i]);
    }
  }
  return uniqueArray;
}

var a1 = ['a', 'b', 'a', 'c', 'd', 'd'];
var a2 = ['todd', 'avery', 'maria', 'avery'];

console.log("make it unique!", a1, "becomes:\n", unique(a1));
console.log('-------------------------------------');
console.log("make it unique!", a2, "becomes:\n", unique(a2));
console.log('-------------------------------------');

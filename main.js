/* ================================================================*/
function getName(someObj) {
  return someObj.name;
}

console.log("Name: ", getName( { name: 'Luisa', age: 25 } ));

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

/* ================================================================*/
function keyValue(key, value) {
  var obj = {};
  obj[key] = value;
  return obj;
}

console.log('Printing Object: ', keyValue('city', 'Denver'));

/* ================================================================*/
function negativeIndex(someArray, negativeIndex) {
  return someArray[someArray.length + negativeIndex];
}

console.log('Negative Index: ', negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log('Negative Index: ',negativeIndex(['jerry', 'sarah', 'sally'], -1));

/* ================================================================*/
function removeM(someString) {
  return someString.replace(/m/g, '');
}
console.log('family becomes: ', removeM('family'));
console.log('memory becomes: ', removeM('memory'));

/* ================================================================*/
function printObject(someObject) {
  for (key in someObject) {
    console.log(key, 'is', someObject[key]);
  }
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

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
  return /^[aeiou]$/i.test(aChar);
}

var str1 = 'alabama';
var str2 = 'What evil odd ducks!';
console.log('The vowels in', str1, ':', vowels(str1));
console.log('The vowels in', str2, ':', vowels(str2));

/* ================================================================*/




/* ================================================================*/
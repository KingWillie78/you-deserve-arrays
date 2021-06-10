const prompt = require('prompt-sync')();

function getFirstItemFrom(array){
  return array[0];
}

function getLastItemFrom(array){
  return array[array.length - 1];
}

function getIndex3(array){
  if (array.length >= 4) {
    return array[3]
  } else {
    return getLastItemFrom(array);
  }
}

function isLongList(array){
  return (array.length >= 10);
}

function firstItemIsNumber(array) {
  return (typeof array[0] === 'number');
}

function secondCharOfThirdString(array) {
  if (typeof array[2] === 'string') {
    return (array[2][1]);
  }
}

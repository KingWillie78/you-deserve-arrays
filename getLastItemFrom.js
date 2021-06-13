const prompt = require('prompt-sync')();

const strArray = prompt('Please enter an array: ');

const array = JSON.parse(strArray);

const lastIndex = array.length - 1;

const lastItem = array[lastIndex];

console.log(lastItem);
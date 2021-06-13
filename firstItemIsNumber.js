const prompt = require('prompt-sync')();

const strArray = prompt('Please enter an array: ');

const array = JSON.parse(strArray);

const firstItem = array[0];

const isNumber = typeof firstItem === 'number';

console.log(isNumber);
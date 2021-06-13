const prompt = require('prompt-sync')();

const array = JSON.parse(prompt('Please enter an array: '));

const thirdItem = array[2];

if (typeof thirdItem === 'string') {
    const secondCharacter = thirdItem[1];
    console.log(secondCharacter);
} 


else {
    console.log('Error! Third value is not a string', thirdItem);
}
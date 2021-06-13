const prompt = require('prompt-sync')();

let array = prompt('Enter words for array >').split(" ");

const bool = isNaN(Number(array[0]));

if(bool) {
    console.log('False')
}
else {
    console.log('True')
}
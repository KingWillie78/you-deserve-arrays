const prompt = require('prompt-sync')();
let array = prompt('Enter an array: ');

array = JSON.parse(array);


if(array.length < 10){
    console.log('The array is: ', array.length);
}
else if(array.lenth >= 10){
    console.log(array.length);
}
else{
    console.log('The array is at least 10');
}
const prompt = require('prompt-sync')({sigint: true});

let userArray = prompt('Type your array and get back Index 3    ');

userArray = JSON.parse(userArray);

const lastItem = userArray[userArray.length -1];

if (userArray[3] === undefined) {

    console.log("No index 3 , user array last letter/number is:", lastItem);

} else {

    console.log("Index 3 is:", userArray[3]);

}
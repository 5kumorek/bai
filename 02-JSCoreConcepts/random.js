let min = 5;
let max = 20;
var myArray = new Array(10);

let myRand = () => Math.floor(Math.random()*(max-min + 1)) + min;

for(i = 0; i< myArray.length; i++)
{
    myArray[i] = myRand();
}

myArray.forEach(element => console.log(element));
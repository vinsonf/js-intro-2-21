import test from './overview.js';
import {myArray} from './complex.js';
import {getFlooredRandom} from './functions.js';

console.log(myArray);


const text = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, Definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and try again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];


const myRandomArrayIndex = getFlooredRandom(text.length);
console.log('myIndex', myRandomArrayIndex);

console.log('answer', text[myRandomArrayIndex])
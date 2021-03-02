let myString = "text1";
let a = 5;

console.log( myString);
myString = 'text${a}' +
    '' +
    '' +
    '' +
    '' +
    'hello world' +
    5 +
    'hi' +
    '5';
console.log(myString);
myString = `text${a}


hello world 

hi${a}
`;
console.log(myString);

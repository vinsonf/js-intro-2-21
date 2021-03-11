// global
const testConst = 1;
let testLet = 2;

// Simple Data 
const no = false;
let count = 1;
const abcs = 'a';

count++;
// Complex
const person = {
    "age": 27, // Property or Variable on an Object
    "height": 5,
    health: 100,
    score: 0,
    "eyeColor": 'brown',
    "title": 'President',
    "address": {
        street: '123 street',
        city: 'Fresno',
        zip: 984748
    },
    city: 'Modesto'
};
person.health -= 27;
person.score++;

const array = [0, 5, 'brown', 'President', {
    street: '123 street',
    city: 'Fresno',
    zip: 984748
}];

// console.log('person', person['address']['street']);
// console.log('array', array[4]['street']);
// console.log('dot notation', person.address)


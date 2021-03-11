const name = 'global';
const noYesBoolean = [false, true];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ['', 'a', 'b', 'c'];

 var string = 'hello world';

let otherString = string;

string = 'hi';

console.log(otherString, string);


let brain = { 
    noYesBoolean: [true, false, false, 1, 2 ,3],
    numbers: numbers,
    names: names,
};

const otherBrain = {
    "noYesBoolean": [false, true],
    "numbers": {{ 
        noYesBoolean: [true, false, false, 1, 2 ,3],
        numbers: numbers,
        names: names,
    }},
    "names": names,
    "brain": ,
};

brain = {};
brain.active = true;

// class Brain {
//     noYesBoolean = [true, false, false, 1, 2 ,3];
//     numbers = numbers;
//     names = names;
// }

console.log('brain', otherBrain.brain, brain);



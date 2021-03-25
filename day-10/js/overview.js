// Primitive Datatypes
const my_string = "title";
let score = 0;
var myBoolean = true;
// Complex Datatypes
const variables = [my_string, score, myBoolean, {}, [[]]];
const object = {
    eyeColor: "brown",
    age: 30,
    isVip: true,
    user: {
        name: {}
    }
}
// functions
function myParagraph(number, string, anotherString) {
    const my_string = "title";
    let score = number;
    var myBoolean = true;
    let score_plus = score + 1;
    console.log('my Paragraph', number);
    return score_plus;
}
(resolve, reject) => 1+3;
myParagraph(9, 'something', 'another');
myParagraph(9, 'something', 'another');
// Classes
class User {
    constructor(string) {
        console.log('new user is being created');
    }
}

const user = new User('vote');
console.log(user);
// loops
for( let i = 0; i < 10; i++) {
  
}
let i = 0;
while( i < 10) {
    myParagraph(i, 'something');
    i++;
}
do{
    myParagraph(i, 'something');
    i++;
}while(i < 100);
i = 100;
['a', 'b', 'c'].forEach(item => {
    console.log(item);
});

// Promise
new Promise((resolve, reject) => resolve(1 + 3))
.then((data) => {
    console.log(data);
    return data + 5;
}).then((secondData) => {
    console.log(secondData);
    return 'something';
}).then((data) => {
    console.log(data);
});

// Fetch Promise// HTTP
fetch('http://localhost').then(response => {

}).catch(err => console.log(err))

// logic
if (1 + 3 === 4) {

}

// Timers

setTimeout(function() {
    console.log('wait');
    clearInterval(myInterval);
}, 10000);

const myInterval = setInterval(function() {
    console.log('wait');
}, 1000);


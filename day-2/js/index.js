var myName = 'Vinson'; // string
var myName = 'V';

let myNumber = 0; // number
myNumber = 1;

const myBoolean = true; // boolean

// complex
const thing1 = {
    "1 property1": true,
    innerHTML: 'string',
    property3: 1,
};


const array = [true, 'string', 1];

const array2 = {
    0: true,
    1: 'string',
    2: 1
}



const myProperty = 'property';

Object.keys(thing1).forEach( key => {
    console.log('key', key);
    console.log('value', thing1[key]);
})

setTimeout(() => {
    document.body.innerHTML = '<div>hello world</div><ul></ul>';
}, 1000);
setTimeout(() => {
    document.querySelector('ul').innerHTML = '<li>Hello</li>';
}, 3000)

setTimeout(()  => {
    document.querySelector('li').innerHTML = 'Goodbye';
}, 5000)


navigator.geolocation.getCurrentPosition(function(data) {
    console.log(data.coords.latitude, data);
})



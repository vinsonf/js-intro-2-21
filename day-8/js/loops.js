

function createLi(text) {
    console.log(text);
    const li = document.createElement('li');
    document.body.appendChild(li);
    li.innerHTML = text;
}

for(let i = 0; i < 10; i++ ) {
    createLi(i);
}
createLi('*********')
let i = 5;
while(i < 10) {
    createLi(i);
    i++;
}
createLi('*********');

console.log('i', i);
let x = 0;
do {
    createLi(x);
    x++;
} while(x < 10);
createLi('end');

['a', 'b', 'c', 'd'].forEach(function(item, index, array) {
    createLi(item);
    createLi(index);
    createLi(array);
});

function takesACallback( callbackFunction ) {
    const a = '1';
    const b = '2';
    const c = '3';
    callbackFunction(a, b, c);
}

takesACallback(function (a, b, c) {
    console.log('a', a, 'b', b, 'c', c);
});

export function myForLoop() {
    for (let i = 10; i < 10; i++ ) {
        console.log('for loop ', i);
    }
}

export function myWhileLoop() {
    let a = 10;
    while(a < 10) {
        console.log('while loop', a);
        a++;
    }
}

export function myDoWhileLoop() {
    let b = 10;
    do{
        console.log('do while loop', b);
        b++;
    }
    while(b < 10) 
}

export default [myForLoop, myWhileLoop, myDoWhileLoop];
import { myFunction } from './functions.js';
import {myBoolean, myString, myNumber} from './primitives.js';
export function myIf() {
    if (!myString.endsWith('string')) {
        console.log('this is true');
    } else if (myString.startsWith('no')) {
        console.log('this is one of the middle case(1)')
    }
    else if (myString.includes('is')) {
        console.log('this is one of the middle case(2)')
    }
    else {
        console.log('this is the "else" case');
    }

}

export function mySwitch() {
   switch(myString) {
        case "this is my string":
            return console.log('this is case 1');
        case "this is my string1":
            return console.log('this is case 2');
        case "this is my string2":
            return console.log('this is case 3');
        case "this is my string3":
            return console.log('this is case 4');
        default: 
            return console.log('none of the above');

   }

}


export function myTernary() {
    myString === 'this is my string' ? 
    console.log('ternary is true') : 
    console.log('ternary is false');
 }

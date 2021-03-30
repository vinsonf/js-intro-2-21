import primitiveStructures, {myNumber, myString, myBoolean} from './primitives.js';
import complexStructures, { myObject, myArray } from './complex.js';
import myFunctions, {myFunction, getRandom, getFlooredRandom} from './functions.js';
import myClasses, {User, Enemy} from './classes.js';
import myLoops, {myForLoop, myWhileLoop, myDoWhileLoop} from './loops.js';
import myFetchables, {getAllImages, getRandomImage, getStartImage, getExtraImage as tester} from './fetch.js';
import {myIf, mySwitch, myTernary} from './logic.js';

myTernary();

export default [
    primitiveStructures,
    complexStructures,
    myFunctions,
    myClasses,
    myLoops,
    myFetchables,
];





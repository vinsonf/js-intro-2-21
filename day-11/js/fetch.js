import {handleImageObject} from './functions.js';


const endpoints = ['all', 'random', 'start', 'extra'];
const baseUrl = 'https://magic-eight-ball.herokuapp.com/';

export function getAllImages() {
    fetch(baseUrl + endpoints[0]).then( data => {
        console.log(data);
        return data.json();
    }).then( updatedData => {
        console.log(updatedData);

        updatedData.forEach( handleImageObject);
     
    }) 
}

export function getRandomImage() {
    fetch(baseUrl + endpoints[1]).then( data => {
        console.log(data);
        return data.json();
    }).then( updatedData => {
        console.log(updatedData);

       handleImageObject(updatedData);
     
    }) 
}

export function getStartImage() {
    const url = baseUrl + endpoints[2];
    console.log('url', url);
    fetch(url).then( data => {
        console.log(data);
        return data.json();
    }).then( updatedData => {
        console.log(updatedData);

       handleImageObject(updatedData);
     
    }) 
}

export function getExtraImage() {
    const url = baseUrl + endpoints[3];
    console.log('url', url);
    fetch(url).then( data => {
        console.log(data);
        return data.json();
    }).then( updatedData => {
        console.log(updatedData);

       handleImageObject(updatedData);
     
    }) 
}

export default [getExtraImage, getStartImage, getRandomImage, getAllImages];
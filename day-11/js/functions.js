export function myFunction() {
    console.log('this is from the function "myFunction"');
}

export function getRandom(limit) {
    return Math.random() * limit;
}

export function getFlooredRandom(limit) {
    return Math.floor(getRandom(limit))
}

export function handleImageObject(imgObject) {
        const img = document.createElement('img');
        img.width = 400;
        img.src = imgObject.imagePath;
        document.body.appendChild(img);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = imgObject.text;
}

export default [myFunction, getRandom, getFlooredRandom];
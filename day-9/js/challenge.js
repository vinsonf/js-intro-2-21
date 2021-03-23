
function fizzBuzzCheck(number) {
    const fizz = number % 3 === 0;
    const buzz = number % 5 === 0;
    if (fizz && buzz) {
        console.log('fizzbuzz');
    } else if (buzz) {
        console.log('buzz');
    } else if(fizz) {
        console.log('fizz');
    } else {
        console.log(number);
    }
}

for (let i = 1; i <= 15; i++ ) {
 fizzBuzzCheck(i);
}

let a = 1;
while(a <= 15) {
    fizzBuzzCheck(a);
    a++;
}

let b = 1;
do{
    fizzBuzzCheck(b);
    b++;
}while(b <= 15);




const button = document.createElement('button');
document.body.appendChild(button);

button.innerHTML = 'Click';

button.addEventListener('click', function() {
    console.log('clicked');

    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then( function(data) {
        console.log('got something from server', data);
        return data.json();
    })
    .then( whatever => {
        console.log(whatever)
        const li = document.createElement('li');
        li.innerHTML = whatever.text + whatever.createdAt;
        document.body.appendChild(li);
    })
});


function myFunction(number1, name, score) {
    console.log(number1, score, name);
}

const myPromise = new Promise(function(resolve, reject) {

    resolve([1,2,3]);
}); 

// myPromise.then( function(data) {
//     console.log('items', data);
//     return data[1];
// })
// .then(function(data) {
//     console.log('items', data);
// }).catch(err => console.log('err', err));


class Vehicle {
    tires = 4;
    doors = 2;
    gasTank = 0;
    speed = 20;
    vin = 0;
    constructor(vin) {
        console.log('a vehicle was created', vin);
        this.vin = vin;
    }

    go() {
        console.log('vehicle is moving');
    }
}

class Car extends Vehicle {
    constructor(doors = 4, vin) {
        super(vin);
        this.doors = doors;
        console.log('a Car was created')
    }
}

class Truck extends Vehicle {
    constructor(doors = 4) {
        super();
        this.doors = doors;
        console.log('a Truck was created')
    }
}

class Motorcycle extends Vehicle {
    constructor(tires = 2, doors = 0) {
        super();
        this.tires = tires;
        this.doors = doors;
        console.log('a Motorcycle was created')
    }
}

const cars = [];
const car = new Car(4, 73981);
cars.push(car);
cars.push(new Car(4, 73982));
cars.push(new Car(2, 73983));
const truck = new Truck();
const motorcycle = new Motorcycle();
console.log(motorcycle);
cars[0].go();
cars[1].go();

const list = findCar(73981);

function findCar(vin) {
    return cars.filter( item => item.vin === vin)[0];
}

function findCarsWithDoors(doors) {
    return cars.filter(item => item.doors === doors);
}

console.log('list', list);
console.log('cars', findCarsWithDoors(4));
car.go();

function Boat(tires, doors) {

    return ({
        tires: tires,
        gas: 20,
        speed: 20,
    });
}
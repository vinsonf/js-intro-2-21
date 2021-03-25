// Data
const inventory = [];
let selectedItem = null;

// Classes
class Vehicle {

    constructor(doors = 0, tires = 0, price = 0) {
        this.doors = doors;
        this.tires = tires;
        this.price = price;
        this.vin = Math.random() + '';
    }
    go() {
        console.log(this)
    }
}
class Car extends Vehicle {
    name = 'car';
    constructor(doors, tires, price, windshield) {
        super(doors, tires, price)
        this.windshield = windshield
    }
}
class Truck extends Vehicle {
    constructor(doors, tires, price) {
        super(doors, tires, price)
    }
}

class Diesel extends Truck {

}
class Motorcycle extends Vehicle {
    name = 'motorcycle';
    constructor(doors, tires, price) {
        super(doors, tires, price)
    }
}

// Create Element;
const form = document.createElement('form');
const labelType = document.createElement('label');
const selectType = document.createElement('select');
const optionCar = document.createElement('option');
const optionTruck = document.createElement('option');
const optionMoto = document.createElement('option');
const labelDoors = document.createElement('label');
const inputDoors = document.createElement('input');
const inputTires = document.createElement('input');
const labelTires = document.createElement('label');
const labelPrice = document.createElement('label');
const inputPrice = document.createElement('input');
const submitNewCar = document.createElement('input');
const searchButton = document.createElement('button');
const ul = document.createElement('ul');

// Change Type
inputDoors.type = 'number';
inputTires.type = 'number';
inputPrice.type = 'number';
submitNewCar.type = 'submit';

// Append Element
document.body.appendChild(form);
form.appendChild(labelType);
form.appendChild(selectType);
selectType.appendChild(optionCar);
selectType.appendChild(optionTruck);
selectType.appendChild(optionMoto);
form.appendChild(labelDoors);
form.appendChild(inputDoors);
form.appendChild(labelTires);
form.appendChild(inputTires);
form.appendChild(labelPrice);
form.appendChild(inputPrice);
form.appendChild(submitNewCar);
document.body.appendChild(searchButton);
document.body.appendChild(ul);


// Inner HTML
optionCar.innerHTML = 'Car';
optionTruck.innerHTML = 'Truck';
optionMoto.innerHTML = 'Motorcycle';
labelType.innerHTML = 'Type';
labelDoors.innerHTML = 'Doors';
labelTires.innerHTML = 'Tires';
labelPrice.innerHTML = 'Price';
searchButton.innerHTML = 'Search';
inputDoors.placeholder = 'Doors #';

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (selectedItem) {
        selectedItem.doors = +inputDoors.value;
        selectedItem.tires = +inputTires.value;
        selectedItem.price = +inputPrice.value;
    } else {
        switch(selectType.value) {
            case 'Car':
                inventory.push(
                    new Car(
                        +inputDoors.value,
                        +inputTires.value,
                        +inputPrice.value,
                        4,
                        )
                    )
                break;
            case 'Truck':
                inventory.push(
                    new Truck(
                        +inputDoors.value,
                        +inputTires.value,
                        +inputPrice.value,
                        )
                    )
                break;
            case 'Motorcycle':
                inventory.push(
                    new Motorcycle(
                        +inputDoors.value,
                        +inputTires.value,
                        +inputPrice.value,
                        )
                    )
                break;
        }

    }
    drawInventory(inventory);
} )

searchButton.addEventListener('click', function() {
    const filteredList = inventory
    .filter( item => inputDoors.value ? +inputDoors.value === item.doors : item)
    .filter( item => inputTires.value ? +inputTires.value === item.tires : item)
    .filter( item => inputPrice.value ? +inputPrice.value === item.price : item);
    drawInventory(filteredList);
})
function drawInventory(list) {
    ul.innerHTML = '';
    list.forEach( item => {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `
            <div>Name: ${item.name}</div>
            <div>Doors: ${item.doors}</div>
            <div>Tires: ${item.tires}</div>
            <div>Price: ${item.price}</div>
        `;

        li.addEventListener('click', function() {
            document.querySelectorAll('.selected').forEach( si  =>{
                si.classList.remove('selected');
            });

            if (selectedItem === item) {
                selectedItem = null;
            } else {
                selectedItem = item;    
                li.classList.add('selected');
            }
           
        })
    })
}
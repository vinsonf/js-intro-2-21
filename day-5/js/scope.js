const name = 'global';
const sea = 'sea';

const user = {
    name: 'user1',
    health: 100,
    greet: function() {
        console.log('hello', this.name);
    },
    takeDamage: function() {
        this.health -= 20;
        console.log(this);
    }
}

user.greet();
user.takeDamage();

function country1() {
    const name = 'country1';
    console.log(name);
    console.log(sea);
}

function country2() {
    const name = 'country2';
    console.log(name);
    console.log(sea);
}


console.log(this);
console.log(name);

country1();
country2();

document.body.innerHTML = '<button>Click me1 </button><button>Click me2 </button>'; 

const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log('button clicked', this);
    this.remove();
});

// "this" keyword
const user1 = {name: 'user1', sayMyName};
const user2 = {name: 'user2', sayMyName};
function sayMyName() {
    console.log(this.name);
}
sayMyName();
user1.sayMyName();
user2.sayMyName();


class User {
    myProperty = 1;
    constructor(username = 'admin', isVip = false, score = 0) {
        this.username = username;
        this.isVip = isVip;
        this.score = score;
    }

    get message() {
        return `Hello, my name is ${this.us}`;
    }
    greet() {
        console.log('Hello,', 'my name is', this.username, '.');
    }
    sit() {
        console.log(this.username, 'sits.')
    }

    get scoreDoubled() {
        return this.score * 2;
    }

    getsPoints() {
        this.score++;
        console.log(this);
        this.greet();
        this.sit();
    }
}

const user = new User('v', true);
const user2 = new User('a', true);
const user3 = new User('b', false);
const users = [];


users.push(
    new User('v', true),
    new User('a', true),
    new User('b', false));

console.log(users);

function myFunction(a = 10, b, c) {
    console.log(a);
}

myFunction();
console.dir(document.body);

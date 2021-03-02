const date = new Date();

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
const color = colors[Math.floor( Math.random() * colors.length )]

const random = Math.random();
console.log(random);

date.setHours(Math.floor( Math.random() * 24 ))

const hour = date.getHours();
document.body.style.backgroundColor = color;

if (hour < 12) {
    document.body.innerHTML = 'Good Morning';
}


if (hour > 12) {
    document.body.innerHTML = 'Good Afternoon';
    document.body.style.backgroundColor = 'orange'
    document.body.style.color = color;
}


if (hour > 18) {
    document.body.innerHTML = 'Good Evening';
    document.body.style.backgroundColor = color;
    document.body.style.color = 'white'
}

if (hour > 22) {
    document.body.innerHTML = 'What are you still doing up?';
}
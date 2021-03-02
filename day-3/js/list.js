const ul = document.querySelector('ul');
new Date();
console.log(ul);


const users = [
    'Larry',
    'Moe',
    'Curly',
    'Shemp'
];

const users = ['Larry', 'Moe', 'Curly', 'Shemp'];

function addLi(username) {

    ul.innerHTML += `<li style="background-color: rgb(50,50, 50);" >  ${username} </li>`;
}

for( let i = 0; i < users.length; i++ ) {
    console.log(i);
    addLi(users[i])
}

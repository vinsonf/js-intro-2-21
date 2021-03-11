
// Function Declaration;
function myFunction() {
    alert('myFunction');
}

// Function Expression
const myFunction2 = function () {
    alert('myFunction2');
};

// Arrow Function Expression
const myFunction3 =  () => {
    alert('myFunction3');
};

// Callback function : function that is passed into another function
['mickey', 'goofy', 'donald'].forEach( (character) => {
    const name = 'Mr.' + character; 
    console.log(name);
});

// parameter is the thing described passed in
function getTotal(total=100, tax=.08, discount=0) {
    return total + (total * tax) - discount;
    // return keyword is what makes assignments to this function possible
}
// argument is the thing actually passed in
// getTotal(89, .08, 5);
// getTotal(200);

const firstNumber = getTotal();
// const myAlert = alert(firstNumber);
// console.log(myAlert);
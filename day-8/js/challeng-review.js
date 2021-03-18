/* 
Use javascript to create append the following to your HTML:
Button element (with text)
 */

const button = document.createElement('button');
document.body.appendChild(button);


button.innerHTML = 'Click';
console.dir( button);

/*
If you haven't already, create a function that will make the API request
*/

function callApi() {
    fetch( 'https://cat-fact.herokuapp.com/facts?animal_type=dog')
    .then( function(data) {
        console.log(data);
        return data.json();
    })
    .then( function(newData) {
        console.log(newData);
        const li = document.createElement('li');
        document.body.appendChild(li);
        li.classList.add('cat-fact');
        li.innerHTML = newData[1].text;
    })
}

/*
Add an event listener to your button
*/

button.addEventListener('click', function() {
    callApi();
})


/*
When your button is clicked, it should make the API request and append the results to the DOM
*/


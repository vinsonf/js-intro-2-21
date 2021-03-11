const baseUrl = 'https://api.github.com';
const username = prompt('what is your github username', 'geekwisevinson');
getUser(username)
function getUser( username) {
    const endpoints = ['/users/' + username];
fetch(baseUrl + endpoints[0])
.then(function(res){
    return res.json()
}).then(data => {
    document.body.innerHTML = `
        <img width="100px" src="${data.avatar_url}">
        <h2>${data.name}</h2>
        <h2>${data.login}</h2>
    `;
    fetch(data.followers_url)
    .then( res => {
        return res.json()
    }).then( data => {
        data.forEach( user => {
            document.body.innerHTML += `
            <img width="100px" src="${user.avatar_url}">
            <h2>${user.login}</h2>
        `
        });  
        const images = document.querySelectorAll('img');
        images.forEach( function(img, index) {
            img.addEventListener('click', function() {
                getUser(data[ index -1].login);
            })
        })   
    })

}).catch( err => {console.log(err)});
}


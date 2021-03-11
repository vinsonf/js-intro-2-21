fetch('https://jobs.github.com/positions.json?description=python&location=new+york'
)
.then(data => data.json())
.then(data => console.log(data));
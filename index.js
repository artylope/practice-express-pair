const express = require('express');
const app = express();

console.log('hdahdjsd');

app.get('/', (request, response) => {
  response.send('hello brian')
});

app.get("/greet/:name/:lastname", (request, response) => {
  response.send("Hello " + request.params.name + " " + request.params.lastname)
});

app.get("/multiply/:x/:y", (request, response) => {
  response.send("The answer is: " + (request.params.x * request.params.y))
});

app.get("/add/:x/:y", (request, response) => {
  response.send("The answer is: " + (parseInt(request.params.x) + parseInt(request.params.y)))
});

app.get("/pokemon/:name/:type", (request, response) => {
  response.send("The pokemon is: " + request.params.name + " The type is " + request.params.type);
});

// make a search using: http://localhost:4000/search?q=pokemon
app.get("/search", (request, response) => {
  response.send("You are searching for: " + request.query.q);
});


const PORT = 4000;
app.listen(PORT);

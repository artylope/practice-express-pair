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

app.get("/add/*", function(req, response) {
  let myParams = req.params[0].split("/")
  const result = myParams.reduce(function(total, num) {
    return total + parseInt(num)
  }, 0);
  response.send("The answer is  " + result)
})

// console.log('sjdehfj');

const PORT = 4000;
app.listen(PORT);
